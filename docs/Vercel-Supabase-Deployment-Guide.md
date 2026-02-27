# Vercel + Supabase Deployment Guide

This guide walks you through migrating the current static app (`index.html`) to Next.js, adding Supabase email/password authentication, and deploying to Vercel.

## What This Guide Covers

- Migrate from static HTML/JS to Next.js App Router
- Preserve existing `guides/` JSON-driven content model
- Add Supabase Auth (email + password)
- Protect authenticated app routes
- Deploy to Vercel with correct environment/config setup
- Validate production behavior and troubleshoot common failures

## Current Repo Baseline

Before starting, this repository currently has:

- Static frontend entrypoint: `index.html`
- Guide content in `guides/<topic>/*.json`
- Topic/guide manifest builder: `scripts/build-guides-manifest.js`
- No Supabase integration yet
- No Vercel config yet

---

## 1) Target Architecture

After migration, the architecture should look like:

- `Next.js` (App Router) hosts the web UI
- `Supabase Auth` handles users and sessions
- `Vercel` hosts Preview + Production deployments
- `guides/` remains your content source (served as static files or copied to `public/guides`)

Recommended runtime split:

- **Client-side**: uses `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Server-side / middleware (optional)**: validates session cookies for route protection
- **Secrets**: never expose service role key to client

---

## 2) Prerequisites

## Accounts

- Vercel account with access to this GitHub/Git provider repo
- Supabase account and a new Supabase project

## Local Tooling

- Node.js 20+ (LTS recommended)
- npm (or pnpm/yarn if your team standardizes on one)
- Git CLI

## Baseline sanity checks

From repo root, verify existing manifest generation still works:

```bash
node scripts/build-guides-manifest.js
```

---

## 3) Migrate Static App to Next.js

## 3.1 Create a migration branch

```bash
git checkout -b feat/nextjs-supabase-vercel
```

## 3.2 Scaffold Next.js at repo root

If the repo has no `package.json`, initialize Next.js in place.

```bash
npx create-next-app@latest . --ts --eslint --app --src-dir --import-alias "@/*"
```

If the command refuses because files already exist, scaffold into a temporary folder and copy the generated framework files into this repo (excluding `.git`).

## 3.3 Preserve guide content source

Keep the existing `guides/` folder as source content. Add one of these patterns:

- **Option A (recommended):** Serve from `public/guides`  
  - Copy/sync `guides/` -> `public/guides/` during build
- **Option B:** Read `guides/` from server-side filesystem in Route Handlers (not ideal for static-friendly deploy)

Recommended: Option A for simpler Vercel behavior.

## 3.4 Add scripts for manifest + guide asset sync

In `package.json`, add scripts similar to:

```json
{
  "scripts": {
    "build:manifests": "node scripts/build-guides-manifest.js",
    "sync:guides": "node scripts/sync-guides-to-public.js",
    "dev": "next dev",
    "build": "npm run build:manifests && npm run sync:guides && next build",
    "start": "next start"
  }
}
```

Create `scripts/sync-guides-to-public.js` to copy `guides/` into `public/guides/`.

## 3.5 Port UI from `index.html`

Break the monolithic page into components:

- `src/app/page.tsx` for authenticated home
- `src/components/GuideShell.tsx`
- `src/components/Sidebar.tsx`
- `src/components/SectionRenderer.tsx`
- component files for interactive types (MCQ, ordering, matching, etc.)

Move logic in this order:

1. Topic/guide selector and `topics.json` + `manifest.json` loading
2. Global guide state (student name, progress, answers)
3. Rendering by stage/section
4. Interactive components
5. Summary page and print actions

## 3.6 Validate migration before auth

- App boots with Next.js
- Guide list loads from `/guides/topics.json`
- Selecting a topic loads `/guides/<topic>/manifest.json`
- A guide JSON loads and renders section content
- localStorage persistence still works

---

## 4) Configure Supabase Project (Dashboard)

## 4.1 Create project

In Supabase:

1. Create a new project
2. Save:
   - Project URL
   - `anon` public key
   - `service_role` key (secret; server-only)

## 4.2 Configure email/password auth

In **Authentication -> Providers -> Email**:

- Enable Email provider
- Enable Email + Password sign-in
- Decide whether to require email confirmation

## 4.3 Set Auth URLs

In **Authentication -> URL Configuration**:

- **Site URL**: production Vercel URL (later)
- **Redirect URLs**:
  - local dev URL (for auth flows and reset links)
  - Vercel preview URL pattern (if needed)
  - production URL

Example values:

- `http://localhost:3000`
- `https://<your-project>.vercel.app`
- `https://<custom-domain.com>`

---

## 5) Install and Configure Supabase in Next.js

## 5.1 Install dependencies

```bash
npm install @supabase/supabase-js
```

If you implement cookie-aware server helpers with SSR patterns, also add:

```bash
npm install @supabase/ssr
```

## 5.2 Add environment variables

Create `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

Optional server-only key (only if you truly need admin operations):

```bash
SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVICE_ROLE_KEY
```

Never expose `SUPABASE_SERVICE_ROLE_KEY` in any `NEXT_PUBLIC_*` variable.

## 5.3 Create Supabase clients

Create:

- `src/lib/supabase/client.ts` (browser client)
- `src/lib/supabase/server.ts` (server client; if using server-side session checks)

Client pattern:

```ts
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
```

---

## 6) Implement Email/Password Auth Flow

## 6.1 Add auth pages

Recommended routes:

- `src/app/login/page.tsx`
- `src/app/signup/page.tsx` (optional if self-signup allowed)

UI actions:

- Sign up: `supabase.auth.signUp({ email, password })`
- Sign in: `supabase.auth.signInWithPassword({ email, password })`
- Sign out: `supabase.auth.signOut()`

## 6.2 Handle session state

In client components, use:

- `supabase.auth.getSession()`
- `supabase.auth.onAuthStateChange(...)`

Store only minimal session state in React context; avoid duplicating full token data in localStorage.

## 6.3 Protect routes

Use one of these:

- **Middleware protection**: guard `/app/*` routes in `middleware.ts`
- **Server layout protection**: in protected layouts/pages, check session and redirect to `/login`

Recommended for this project: middleware + clear redirect rules.

## 6.4 Suggested route model

- `/login` -> public
- `/signup` -> public (if enabled)
- `/` or `/app` -> authenticated guide UI

---

## 7) Configure and Deploy to Vercel

## 7.1 Import project

In Vercel:

1. New Project -> import this repository
2. Framework preset: Next.js
3. Root directory: repo root

## 7.2 Set build behavior

Ensure build command runs manifest generation and guide sync:

- Build command: `npm run build`
- Install command: `npm install`

## 7.3 Add environment variables in Vercel

In Project Settings -> Environment Variables, add:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (only if needed; server-only)

Set values for:

- Development
- Preview
- Production

## 7.4 Align Supabase URL config with Vercel

After first deploy, copy Vercel domains and update Supabase:

- **Site URL** -> production domain
- **Redirect URLs** -> include localhost + preview + production

If redirect URLs are wrong, login may appear successful but session/callback handling will fail.

## 7.5 Deploy and verify

- Trigger a deploy from `main` (or your release branch)
- Open production URL
- Test full login/logout flow
- Verify protected routes reject anonymous users

---

## 8) Verification Checklist

## Local verification

- `npm run dev` works without env errors
- Guide manifests build and guides load in UI
- Login with valid credentials succeeds
- Invalid credentials show expected error
- Logout clears authenticated state

## Preview verification (Vercel)

- Preview deployment has all required env vars
- Login flow works on preview URL
- Protected routes enforce auth
- Guide data still loads from `/guides/...`

## Production verification

- Production domain listed in Supabase Site/Redirect URLs
- Users can sign in repeatedly without intermittent redirect errors
- No client-side exposure of server secret keys

---

## 9) Troubleshooting Matrix

| Symptom | Likely Cause | Fix |
|---|---|---|
| `Invalid API key` or auth init crash | Wrong anon key or URL | Recopy `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local` and Vercel |
| Auth works locally but fails on Vercel | Missing Vercel env vars | Add env vars to Preview/Production and redeploy |
| Login succeeds but user gets redirected back to login | Session not persisted or guard logic incorrect | Re-check middleware/session check logic and ensure cookies/session are read correctly |
| Password reset or confirmation links fail | Redirect URL mismatch | Add exact preview/prod URLs in Supabase Auth Redirect URLs |
| App deploys but guides list is empty | Manifests not generated or guides not copied to `public/guides` | Ensure build runs `build:manifests` and `sync:guides` before `next build` |
| Build fails on Vercel with missing script | `package.json` scripts incomplete | Verify `build` script includes all prebuild steps |

---

## 10) Security + Operations Notes

## Key handling

- `NEXT_PUBLIC_*` vars are visible to the browser by design
- Keep `SUPABASE_SERVICE_ROLE_KEY` server-only
- Never commit real secrets to git

## Environment strategy

- Use separate Supabase projects for staging vs production if your compliance level requires it
- At minimum, separate Preview and Production variable values in Vercel

## Change management

- Rotate keys immediately if leaked
- Add deployment checklist review to PR process
- Keep this guide updated when auth flow or build scripts change

---

## Definition of Done

You are done when all are true:

- Next.js app replaces static entrypoint for normal usage
- Existing guide manifests/content still load correctly
- Supabase email/password sign-in works locally and on Vercel
- Protected routes are enforced
- Vercel env vars and Supabase URL settings are aligned
- Team can follow this guide end-to-end without tribal knowledge

---

## Appendix: Suggested File Layout (Post-Migration)

```text
.
├─ src/
│  ├─ app/
│  │  ├─ login/page.tsx
│  │  ├─ signup/page.tsx
│  │  └─ page.tsx
│  ├─ components/
│  │  ├─ GuideShell.tsx
│  │  ├─ Sidebar.tsx
│  │  └─ SectionRenderer.tsx
│  └─ lib/
│     └─ supabase/
│        ├─ client.ts
│        └─ server.ts
├─ guides/
├─ public/
│  └─ guides/   (synced during build)
├─ scripts/
│  ├─ build-guides-manifest.js
│  └─ sync-guides-to-public.js
├─ middleware.ts
└─ package.json
```
