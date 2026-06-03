# BookSpark — Номын дэлгүүр

> Энэ файл нь Claude Code-д төслийн дүрмийг сануулдаг — session бүрт автоматаар уншина.
> **1-р PROMPT**-оор үүнийг сайжруулна (setup.sh ажилласны дараа эхэнд нь `@AGENTS.md` нэмэгдэнэ).

## Project

Дижитал номын дэлгүүр (BookSpark). Хэрэглэгч ном үзэж, худалдаж аваад татаж авна. Admin талаас ном нэмнэ.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19, TypeScript
- Tailwind CSS v4 (CSS-first: `@import "tailwindcss"`)
- Later courses: Supabase, Anthropic API, QPay, Custom Bank Transfer

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

## Repo workflow (instructor — internal)

> Энэ нь багшийн (Намсрай) дотоод workflow. Future Claude session энэ бүтцийг мэдэх ёстой.

- **`main`** = энгийн **md-only starter** (оюутнууд clone хийдэг). App код энд НЭМЭХГҮЙ.
- **`course-01`** branch = Курс 1 (BookSpark)-ийн бүрэн ажиллах app. Lesson бүр = тусдаа commit, tag-тай (`c01-1-setup` … `c01-4-detail`). Дараагийн курс бүр шинэ branch-аас (ж: `course-02` нь `course-01`-аас) салаална.
- **`course/`** = оюутны Курс 1 хичээлүүд (tracked, main дээр). _Тэмдэглэл: BookSpark = build-track-ийн "Курс 1". Skool дээрх concept Курс 1–3-аас ялгаатай._
- **`internalcontext/`** = ЗӨВХӨН local. Master plan, бүх курсийн материал, checkpoints. `.gitignore`-д орсон. **ХЭЗЭЭ Ч push хийхгүй.**
- **Push:** `internalcontext/`-ийг ХЭЗЭЭ Ч push хийхгүй. `main` + course branch + tags-ийг зөвхөн Намсрай шууд хүсвэл push хийнэ (2026-06-03: `main` + `course-01` + `c01-*` tags push хийсэн).
- Чухал context-ийг Claude memory (`MEMORY.md`) + `internalcontext/PROJECT-STATE.md`-д хадгал.
