# Курс 1 (BookSpark) · Claude Code Prompt Pack
## Дэлгүүрээ "бичихгүйгээр" — Claude Code-д prompt өгч бүтээх

> 🎙️ **Энэ бол бичлэг хийх script.** Намсрай эдгээр prompt-ыг дарааллаар нь Claude Code-д
> өгч, дэлгүүрийг шууд бүтээж харуулна. Сурагчид мөн адил хийнэ. Зорилго: **код бичиж сурах биш,
> AI-д зөв даалгавар өгч сурах.** (Хэрэв AI өөрөөр хийвэл — энэ хэвийн. Бэлэн код бүр хэсэгт
> `checkpoints/`-д бий.)

> 🌐 **Prompt-ууд яагаад англиар вэ?** Код үүсгэх даалгаврыг англиар өгөхөд AI илүү сайн ажилладаг
> (Курс 2.1.3). Чи дэлгэц дээр **монголоор тайлбарлаж**, prompt-оо англиар хуулна. UI-ийн текст
> монголоор гарна.

---

## 🔑 Claude Code-д prompt өгөх 5 дүрэм (бичлэгийн эхэнд хэлэх)

1. **Context эхэлж өг** — "энэ юу вэ, ямар stack" (project дотор `claude`-г ажиллуулбал `AGENTS.md`/`CLAUDE.md`-ыг өөрөө уншина).
2. **Тодорхой бай** — файлын нэр, яг ямар feature, ямар өнгө/текст.
3. **Хязгаар тавь** — "одоохондоо database бүү нэм", "dark mode хэрэггүй".
4. **Үр дүнг шалга** — AI засвар хийх болгонд `y` (зөвшөөрөх) / `n` (татгалзах) / `a` (бүгдийг зөвшөөрөх). Хийсний дараа browser-аас хар.
5. **Ойлгуул** — "энэ файлыг монголоор тайлбарла" гэж асуу. Энэ бол загас барих хэсэг.

> 💡 Prompt бүр **5-part formula**-тай (Курс 2.1.1): Context · Role · Task · Constraints · Format.

---

## ⚙️ 0. Эхлэх — зөвхөн татаж авсан файлуудаас (Setup)

Чи **бэлэн төсөлгүйгээр**, зөвхөн татаж авсан файлуудаас эхэлнэ — яг Намсрайн адил.

**Татаж авах** — [github.com/dokind/bookspark-starter](https://github.com/dokind/bookspark-starter) → ногоон **`Code`** товч → **Download ZIP** (эсвэл `git clone https://github.com/dokind/bookspark-starter.git`). Задлаад VSCode-оор нээ. Дотор нь:
- `CLAUDE.md` — төслийн дүрэм (бэлэн загвар)
- `START-HERE.md` — товч заавар
- `setup.sh` — хоосон Next.js апп-ыг ЭНЭ хавтсанд босгох жижиг script
- `course/` — бүх хичээл + энэ prompt pack

**Нэг удаагийн setup** (VSCode-ийн terminal дээр, `` Ctrl+` ``):

```bash
bash setup.sh    # Next.js 16 хоосон апп-ыг энэ хавтсанд босгоно (~1 мин). CLAUDE.md, course/-ыг хадгална.
claude           # Claude Code session нээнэ
```

> 💡 `setup.sh` нь зөвхөн **хоосон** Next.js апп үүсгэдэг — дэлгүүрийн бүх код дараа нь prompt-оор орж ирнэ.

<details><summary>🤖 setup.sh-ийн оронд AI-аар scaffold хийе гэвэл — Prompt 0</summary>

```text
This folder currently has only CLAUDE.md, START-HERE.md, setup.sh, and a course/ folder.
Scaffold a Next.js 16 app INTO this folder WITHOUT deleting my files:
1. Run: npx create-next-app@latest bookspark-scaffold --yes
2. Move everything from bookspark-scaffold into the current folder, but DO NOT overwrite my
   CLAUDE.md, START-HERE.md, setup.sh, README.md, or the course/ folder. Then delete bookspark-scaffold.
3. Run `npm run dev` to confirm it starts on http://localhost:3000, then stop it.
Report what you did, in Mongolian.
```
</details>

---

## 💬 1-р PROMPT — CLAUDE.md үүсгэх ба шинэчлэх

**Энэ бол хамгийн ЭХНИЙ prompt.** Юу ч бүтээхээсээ өмнө Claude Code-д төслийн дүрмийг
ойлгуулна. Сайн `CLAUDE.md` = дараагийн бүх prompt илүү сайн ажиллана (Курс 2.3.3).

**💬 PROMPT:**

```text
Read the CLAUDE.md file in this project, and skim course/course-01-bookspark-PROMPTS.md.

Then create/update CLAUDE.md so it is a clear, concise guide (under ~40 lines) for
building BookSpark, a Mongolian digital bookstore:
- If AGENTS.md exists, reference it on the very first line as: @AGENTS.md
- Project: a digital bookstore "Номын дэлгүүр" — users browse, buy, and download books;
  an admin adds books.
- Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4.
  Later courses add: Supabase, Anthropic API, QPay.
- Rules:
  - ALL user-facing UI text in Mongolian (Cyrillic). Code, comments, variable names in English.
  - Next.js 16: `params` and `searchParams` are Promises — ALWAYS await them.
  - Tailwind v4 (CSS-first: @import "tailwindcss"). One light theme, no dark mode.
  - Inter font with subsets ["latin","cyrillic"] (Geist has no Cyrillic).
  - Server Components by default; add "use client" only when interactivity is needed.
  - Small components in components/. All data access in lib/.
  - Money as MNT integers (e.g. 29000), formatted like "29,000₮".
- Don't: add dependencies without asking; hardcode secrets; commit .env.local.

Then explain to me in Mongolian (3-4 sentences) what CLAUDE.md is and why setting it up
first makes every later prompt better.
```

**✅ Шалгах:** `CLAUDE.md` шинэчлэгдэж, дээд талд нь `@AGENTS.md` мөр орсон, дүрмүүд тодорхой.

---

## 🎬 Part 1 — Setup: брэнд хийсэн нүүр  *(checkpoint `c01-1-setup`)*

**Recording goal:** хоосон төслийг "Номын дэлгүүр" болгож, монгол үсэг зөв гаргах.

**💬 PROMPT:**

```text
Set up the BookSpark storefront shell.

1. In app/layout.tsx: load the Inter font with subsets ["latin","cyrillic"] as a CSS
   variable (--font-inter), set <html lang="mn">, and set the page <title> to
   "Номын дэлгүүр".
2. In app/globals.css: keep `@import "tailwindcss";`. Set ONE light theme —
   background #f8fafc (slate-50), foreground #0f172a (slate-900) — and make the body
   use the Inter font variable. Remove any dark-mode block.
3. Replace app/page.tsx with a simple centered welcome: an <h1> "📚 Номын дэлгүүр"
   and a slate-600 paragraph "Тавтай морил! Удахгүй энд дижитал номнууд гарч ирнэ."

Keep it minimal — no header and no data yet.
```

**✅ Шалгах:** `npm run dev` → [localhost:3000](http://localhost:3000). "📚 Номын дэлгүүр" гарч, монгол үсэг цэвэрхэн.

**🔁 Засах prompt-ууд (хэрэгцээтэй бол):**
- `The Mongolian text shows boxes/tofu. Make sure Inter loads the "cyrillic" subset.`
- `Make the heading bigger and add more top spacing.`

**🧠 Ойлгуул:** `Explain app/layout.tsx line by line in simple Mongolian. What is the difference between a layout and a page in Next.js?`

---

## 🎬 Part 2 — Data: номнуудаа нэмж жагсаах  *(checkpoint `c01-2-data`)*

**Recording goal:** database-гүйгээр номын өгөгдөл оруулж, дэлгэцэнд жагсаах.

**💬 PROMPT:**

```text
Add our book data and render it as a simple list.

1. Create lib/books.ts:
   - export a `type Book` with: id (string), slug (string, url-friendly), title,
     author, description, priceMnt (number), emoji (string), accent (string of
     Tailwind gradient classes, e.g. "from-indigo-500 to-violet-600").
   - export `const books: Book[]` with 6 realistic Mongolian digital books. Titles,
     authors, and 1-sentence descriptions in Mongolian. Prices in MNT (e.g. 49000,
     29000, 19000). One emoji and one Tailwind gradient per book.
   - export `getBooks()` (all books), `getBook(slug)` (one or undefined), and
     `formatMnt(price)` returning e.g. "49,000₮".
2. Update app/page.tsx to import getBooks + formatMnt and render the books as a <ul>:
   each <li> shows the title, " — author" in slate-500, and the price on the right in
   bold indigo-600. Use key={book.id}.

Keep styling minimal for now. This file is our temporary "database" — explain in a
comment that Course 5 will move it to Supabase.
```

**✅ Шалгах:** Нүүрэнд 6 ном жагсаж, үнэ баруун талд.

**🔁 Засах prompt-ууд:**
- `Add one more book about Mongolian cooking. Keep the same shape.`
- `The price isn't aligned right. Push it to the right edge of each row.`

**🧠 Ойлгуул:** `Explain in Mongolian what .map() does here and why React needs key={book.id}.`

---

## 🎬 Part 3 — Components: Header + BookCard, гоё grid  *(checkpoint `c01-3-components`)*

**Recording goal:** давтагдах кодыг component болгож, жинхэнэ дэлгүүр шиг харагдуулах.

**💬 PROMPT:**

```text
Refactor into reusable components and make it look like a real shop.

1. Create components/Header.tsx: a sticky top bar. On the left a 📚 "Номын дэлгүүр"
   logo that links to "/". On the right, nav links "Нүүр" and a dark pill button
   "Бүх ном". Use next/link.
2. Create components/BookCard.tsx: takes a `book: Book` prop (import the type from
   lib/books). Show a gradient cover (h-44, bg-gradient-to-br with `book.accent`) with
   the emoji centered (text-6xl), then below it the title, author (slate-500), and the
   formatted price (indigo-600, bold). For now make it a plain <div>, NOT a link.
3. Update app/layout.tsx to render <Header/> above {children}, plus a simple footer
   "© 2026 Номын дэлгүүр · Solo Spark жишээ төсөл" below. Make <body> a flex column so
   the footer sits at the bottom.
4. Update app/page.tsx: add a hero section (rounded, bg-gradient indigo-600→violet-700,
   white text) with <h1> "Дижитал номын дэлгүүр" and a one-line Mongolian subtitle.
   Below it, a responsive grid (grid-cols-1 sm:grid-cols-2 lg:grid-cols-3) of <BookCard>
   for each book from getBooks().
```

**✅ Шалгах:** Толгой + footer + hero + өнгөт картны grid. Цонх нарийсгахад 3→2→1 багана.

**🔁 Засах prompt-ууд:**
- `Add a subtle hover effect to the cards (slight lift + shadow).`
- `The hero is too tall on mobile. Reduce vertical padding on small screens.`

**🧠 Ойлгуул:** `Explain in Mongolian what a "component" and a "prop" are, using BookCard as the example.`

---

## 🎬 Part 4 — Pages: номын дэлгэрэнгүй хуудас  *(checkpoint `c01-4-detail`)*

**Recording goal:** карт дээр дарвал дэлгэрэнгүй хуудас руу орох — dynamic route.

**💬 PROMPT:**

```text
Add a book detail page and make the cards clickable.

1. Update components/BookCard.tsx: wrap the whole card in a next/link <Link> pointing
   to `/book/${book.slug}`, with a subtle hover lift.
2. Create app/book/[slug]/page.tsx as a dynamic route:
   - IMPORTANT: this is Next.js 16, so `params` is a Promise. Type the prop as
     `{ params: Promise<{ slug: string }> }` and do `const { slug } = await params`.
   - export `generateStaticParams()` built from getBooks() (one { slug } per book).
   - export an async `generateMetadata` that sets the title to
     "<book.title> — Номын дэлгүүр" (or "Ном олдсонгүй" if missing).
   - In the page: find the book by slug; if not found, call `notFound()` from
     next/navigation. Otherwise render: a back link "← Бүх ном руу буцах", a large
     gradient cover with the emoji, the title, "Зохиогч: <author>", the description,
     the price, and a "Худалдаж авах" button that does nothing yet, with a small note
     "* Төлбөр (QPay)-г Курс 4-д холбоно".
```

**✅ Шалгах:** Карт дээр дарвал дэлгэрэнгүй хуудас руу орно. Буруу хаяг (`/book/test`) → 404.

**🔁 Засах prompt-ууд:**
- `params.slug shows a warning. We're on Next.js 16 — make sure we await params everywhere.`
- `Make the detail layout two columns on desktop: cover left, details right.`

**🧠 Ойлгуул:** `Explain in Mongolian why params is a Promise in Next.js 16, and what notFound() does.`

---

## 🎬 Part 5 — Deploy: интернэтэд гаргах  *(үр дүн: live URL)*

**Recording goal:** дэлгүүрээ Vercel дээр deploy хийж бодит URL авах. (Дэлгэрэнгүй: [5-р хэсэг — Deploy](course-01-bookspark-5-deploy.md).)

**💬 PROMPT:**

```text
Help me deploy this Next.js app to Vercel as MY OWN project (not linked to anyone else's repo).

1. First run `npm run build` and fix any errors so the build is clean.
2. Make sure .gitignore ignores node_modules and .next.
3. Then guide me step by step, in Mongolian, to deploy with the Vercel CLI:
   - npm i -g vercel
   - vercel        (explain each prompt; I will log in with GitHub or email)
   - vercel --prod (to get the public production URL)
4. Also briefly explain the alternative: push to my OWN new GitHub repo and import it on vercel.com.
Do NOT push to any git remote yourself — only guide me and explain in Mongolian.
```

**✅ Шалгах:** Live URL дээр дэлгүүр ажиллана (нүүр + ном дээр дарахад дэлгэрэнгүй).

**🔁 Засах prompt-ууд:**
- `The Vercel build failed with this log: <paste>. Diagnose and fix, then I'll redeploy.`
- `I cloned the starter so my origin points at someone else's repo. Help me detach it (git remote remove origin) and push to my own new GitHub repo.`

**🧠 Ойлгуул:** `Explain in Mongolian what "build" and "deploy" mean, and why Vercel only deploys when the build passes.`

---

## 🆘 Алдаа гарвал — Claude Code-д өгөх prompt-ууд

Claude Code-ийн хамгийн хүчтэй тал: алдааг өөрт нь засуулах. Терминал/browser дээрх
алдааг **бүтнээр нь** хуулж ингэж асуу:

```text
I got this error:
<paste the full error here>

Read the relevant file(s), fix the cause, and explain in Mongolian what was wrong.
```

Түгээмэл:
- `The page is blank and the terminal shows a hydration / "use client" error. Diagnose and fix.`
- `Tailwind classes aren't applying. Check globals.css has @import "tailwindcss" (v4).`
- `Cannot find module '@/lib/books'. Check the path and the @/ alias.`

**Бүгд бүтэлгүй бол:** тухайн хэсгийн checkpoint-ыг ав — `git checkout c01-2-data` эсвэл
`checkpoints/bookspark-c01-2-data.zip`.

---

## 🎥 Бичлэгийн урсгал (товч)

1. Starter задлаад VSCode-оор нээ → terminal → `bash setup.sh` → `claude`
2. **1-р PROMPT — CLAUDE.md** (төслийн дүрэм тогтоох)
3. Part 1 → 2 → 3 → 4 → 5: prompt өг → `y`/`a`-аар зөвшөөр → browser-аас шалга → нэг "ойлгуул" prompt
4. Part 5-д Vercel дээр deploy хийж live URL ав
5. Дуусаад `/review` гэж бичээд Claude-аар кодоо хянуул
6. `#ship-it-friday`-д live URL эсвэл screenshot

> Тэмдэглэл: AI заримдаа жаахан өөр код бичнэ — энэ нь vibe coding-ийн мөн чанар. Үр дүн нь
> ажиллаж байвал болсон. Яг ижил код хэрэгтэй бол checkpoint харьцуул.

---

*Холбоотой: [Part 1](course-01-bookspark-1-setup.md) · [Part 2](course-01-bookspark-2-data.md) · [Part 3](course-01-bookspark-3-components.md) · [Part 4](course-01-bookspark-4-detail.md) · [Part 5](course-01-bookspark-5-deploy.md) · бэлэн код `checkpoints/`*
