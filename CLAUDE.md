# CLAUDE.md

## Project Overview

SaaS starter built with Next.js 16 (App Router, Turbopack), Supabase auth, shadcn/ui, and Tailwind CSS v4.

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Auth**: Supabase email/password via `@supabase/ssr`
- **UI**: shadcn/ui (new-york style), Tailwind CSS v4, lucide-react icons
- **Language**: TypeScript (strict mode)

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint

## Project Structure

```
app/                    # Next.js App Router pages
  auth/callback/        # OAuth/email code exchange route
  login/                # Login page + server action
  signup/               # Signup page + server action
  forgot-password/      # Password reset request
  reset-password/       # Password update form
  logout/               # Server component that signs out
components/
  landing/              # Landing page sections (header, hero, features, pricing, footer)
  ui/                   # shadcn/ui components
lib/
  supabase/client.ts    # Browser client (createBrowserClient)
  supabase/server.ts    # Server client (createServerClient + cookies)
  supabase/proxy.ts     # Session refresh via getClaims()
  utils.ts              # cn() utility
proxy.ts                # Root proxy (Next.js 16 middleware equivalent)
```

## Conventions

- Auth pages use **server actions** (not client-side API calls)
- Supabase clients are created via factory functions, never singletons
- `@/` path alias maps to the project root
- Server components fetch user via `createClient()` from `lib/supabase/server.ts`
- Client components use `createClient()` from `lib/supabase/client.ts`
- Environment variable for Supabase public key: `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
