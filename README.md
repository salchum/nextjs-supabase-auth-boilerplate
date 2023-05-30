<h1 align="center"><b>Next.js</b> + <b>Supabase</b> Auth</h1>

<p align="center" style="display: flex; align-items: center; justify-content: center; gap: 0.75rem;">
  <a href="https://nextjs.org">
    <img src="https://img.shields.io/github/package-json/dependency-version/mryechkin/nextjs-supabase-auth/next?style=for-the-badge" alt="Next.js" />
  </a>
  <a href="https://www.supabase.io">
    <img src="https://img.shields.io/github/package-json/dependency-version/mryechkin/nextjs-supabase-auth/@supabase/supabase-js?color=%2322c55e&style=for-the-badge" alt="Supabase" />
  </a>
</p>

<p align="center">
  <img src="https://www.misha.wtf/_next/image?url=%2Fblog%2Fsupabase-auth-next-13%2Fcover.png&w=640&q=100" alt="Banner image" />
</p>

## Overview

Sample project showing how to add authentication to [Next.js](https://nextjs.org/) 13+ using [Supabase](https://www.supabase.io/) [Auth](https://supabase.com/docs/guides/auth) and the new [`app` directory](https://nextjs.org/docs/app/building-your-application/routing#the-app-directory).

> **NOTE:** `app` directory is stable as of Next 13.4

This project is a supplement to [this guide](https://www.misha.wtf/blog/supabase-auth-next-13). See the link for a detailed tutorial.

## Supabase Setup
1. Create user for Authentication, open ``Authentication`` then ``Users``
2. Choose ``Add Users`` then ``Create New User``
3. Fill ``Email Address`` and ``Password``
4. Check ``Auto Confirm User`` then click ``Create User``

## Project Setup
1. Create file ``.env.local``
```
touch .env.local.
```
2. Fill environtment variable in ``.env.local``
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```
3. Updating dependencies of Supabase
```
npm install next@latest react@latest react-dom@latest @supabase/supabase-js@latest @supabase/auth-helpers-nextjs classnames formik yup
```
4. Install Tailwind's Form Plugin
```
npm install -D @tailwindcss/forms
```
5. Remove depracated ``@supabase/ui``
```
npm uninstall @supabase/ui
```