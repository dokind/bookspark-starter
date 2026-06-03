# Курс 1 (BookSpark) · 1-р хэсэг: Setup
## Төсөл үүсгээд ажиллуулах

**⏱️ ~15 минут** · **Checkpoint:** `c01-1-setup`

> 🤖 **Хоёр зам бий:** **(A) Claude Code-д prompt өгч бүтээ** — энэ хэсгийн бэлэн prompt-ууд [Prompt Pack → Part 1](course-01-bookspark-PROMPTS.md) дотор (жинхэнэ vibe coding, зөвлөнө). **(B)** Доорх кодыг шууд хуул — fallback.

> 🎓 Бид Курс 1–5-д **нэг дэлгүүрийг** (Номын дэлгүүр) алхам алхмаар бүтээнэ. Энэ бол 1-р алхам: хоосон төслийг үүсгээд, өөрийн брэндээр будна.

---

## 🎯 Энэ хэсэгт сурах зүйлс
- `create-next-app`-аар Next.js 16 төсөл үүсгэх
- Dev server асааж, browser-аас харах
- `app/`, `layout.tsx`, `page.tsx`, `globals.css` гэж юу болохыг ойлгох

---

## 🧠 Юу хийх гэж байна вэ?
Кодыг шууд бичихээсээ өмнө "**яагаад**"-аа ойлгоё. Next.js бол вэб апп хийх **framework**. Хавтас, файлын бүтэц нь шууд хуудас (URL) болдог: `app/page.tsx` → `/`. Энэ хэсэгт зүгээр л төслийг босгож, "📚 Номын дэлгүүр" гэсэн хоосон нүүртэй болно.

---

## Алхам 1 — Төсөл үүсгэх

Terminal нээ (VSCode дотроос `` Ctrl+` `` / `` Cmd+` ``). Төсөл хадгалах хавтас руугаа очоод:

```bash
npx create-next-app@latest bookspark --yes
cd bookspark
```

`--yes` нь default тохиргоог ашиглана: **TypeScript + Tailwind CSS + ESLint + App Router**. Хэдэн багц татаж суулгана (~1 минут).

## Алхам 2 — Ажиллуулах

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) -ийг нээ → Next.js-ийн анхны хуудас гарна. 🎉

> ⚠️ **"Port 3000 in use"?** Өөр дугаар өг: `npm run dev -- -p 3100`

## Алхам 3 — Файлуудтай танилцах

| Файл/хавтас | Юу вэ |
|---|---|
| `app/` | Бүх хуудас энд. Хавтасны бүтэц = URL. |
| `app/page.tsx` | Нүүр хуудас (`/`). |
| `app/layout.tsx` | Бүх хуудсыг **ороох** хүрээ (фонт, толгой/хөл). |
| `app/globals.css` | Бүх апп-д хамаарах style (Tailwind энд орж ирдэг). |
| `package.json` | Төслийн "үнэмлэх" — ямар сангуудтай, ямар command-уудтай вэ. |

## Алхам 4 — Брэнд хийх

`app/layout.tsx`-ийг бүтнээр нь сольж бич (монгол үсэг сайхан гарах Inter фонт + гарчиг):

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Inter-ийг "cyrillic"-тэй ачаалбал монгол кирилл сайхан харагдана.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Номын дэлгүүр",
  description: "Дижитал ном, гарын авлагын дэлгүүр.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mn" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
```

`app/globals.css`-ийг сольж бич (нэг тогтвортой цайвар theme):

```css
@import "tailwindcss";

:root {
  --background: #f8fafc;
  --foreground: #0f172a;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-inter);
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-inter), system-ui, sans-serif;
}
```

`app/page.tsx`-ийг сольж бич:

```tsx
export default function Home() {
  return (
    <main className="mx-auto max-w-2xl p-10">
      <h1 className="text-3xl font-bold">📚 Номын дэлгүүр</h1>
      <p className="mt-3 text-slate-600">
        Тавтай морил! Удахгүй энд дижитал номнууд гарч ирнэ.
      </p>
    </main>
  );
}
```

Хадгалаад browser-аа хар — автоматаар шинэчлэгдэнэ.

---

## 🧠 Ойлгох (товч)
- **`layout` vs `page`:** layout бол хүрээ (бүх хуудсанд хамаарна), page бол тухайн хуудасны агуулга.
- **Server Component:** Next.js-д хуудас default-аар server дээр render хийгддэг. Бид `onClick` гэх мэт интерактив зүйл нэмэх үед л `"use client"` бичнэ (дараа үзнэ).
- **Tailwind v4:** `globals.css`-д `@import "tailwindcss";` гэсэн нэг мөр л хангалттай. `bg-slate-50`, `p-10` гэх классуудыг шууд бичнэ.

## ✅ Шалгах
- [ ] `npm run dev` ажиллаж байна
- [ ] Browser-д "📚 Номын дэлгүүр" гарч байна
- [ ] Монгол үсэг цэвэрхэн харагдаж байна

## 📦 Бэлэн код (build хийж чадаагүй бол)
- **ZIP:** `checkpoints/bookspark-c01-1-setup.zip` → задлаад `npm install` → `npm run dev`
- **Git:** `git checkout c01-1-setup`

## ⚠️ Түгээмэл алдаа
- Кирилл муухай → `subsets: ["latin","cyrillic"]` байгаа эсэхээ шалга.
- Tailwind класс ажиллахгүй → `globals.css`-д `@import "tailwindcss";` бий эсэх.
- "Port in use" → `npm run dev -- -p 3100`.

---

*Дараагийн хэсэг: [2-р хэсэг — Data](course-01-bookspark-2-data.md): номнуудаа нэмж жагсаана.*
