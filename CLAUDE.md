# BookSpark — Номын дэлгүүр

> Энэ файл нь Claude Code-д төслийн дүрмийг сануулдаг — session бүрт автоматаар уншина.
> **1-р PROMPT**-оор үүнийг сайжруулна (setup.sh ажилласны дараа эхэнд нь `@AGENTS.md` нэмэгдэнэ).

## Project
Дижитал номын дэлгүүр (BookSpark). Хэрэглэгч ном үзэж, худалдаж аваад татаж авна. Admin талаас ном нэмнэ.

## Stack
- Next.js 16 (App Router, Turbopack)
- React 19, TypeScript
- Tailwind CSS v4 (CSS-first: `@import "tailwindcss"`)
- Later courses: Supabase, Anthropic API, QPay

## Rules
- ALL user-facing UI text in Mongolian (Cyrillic). Code, comments, variable names in English.
- Next.js 16: `params` and `searchParams` are Promises — ALWAYS `await` them.
- One light theme only. No dark mode.
- Inter font with subsets ["latin","cyrillic"] (Geist has no Cyrillic).
- Server Components by default; add `"use client"` only when interactivity is needed.
- Small components in `components/`. All data access in `lib/`.
- Money as MNT integers (e.g. 29000), formatted like "29,000₮".

## Don't
- No new dependencies without asking.
- No hardcoded secrets — use `process.env`.
- Don't commit `.env.local`.
