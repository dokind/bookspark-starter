# Курс 1 (BookSpark) · 4-р хэсэг: Pages
## Номын дэлгэрэнгүй хуудас (dynamic route)

**⏱️ ~20 минут** · **Өмнөх:** `c01-3-components` · **Checkpoint:** `c01-4-detail`

> 🤖 **Хоёр зам:** **(A) Claude Code-д prompt өгч бүтээ** — [Prompt Pack → Part 4](course-01-bookspark-PROMPTS.md) (зөвлөнө). **(B)** Доорх кодыг хуул — fallback.

> Ном дээр дарвал тухайн номын **дэлгэрэнгүй хуудас** руу ороход дэлгүүр бүрэн болно.

---

## 🎯 Энэ хэсэгт сурах зүйлс
- **Dynamic route** (`/book/[slug]`) — нэг файлаар олон хуудас
- **Next.js 16-ийн `await params`** дүрэм (хуучин tutorial-аас ялгаатай!)
- `notFound()` — буруу хаягт 404 харуулах
- Картыг дарагдах (`<Link>`) болгох

---

## 🧠 Dynamic route гэж юу вэ?
6 номд 6 тусдаа файл бичих нь утгагүй. Оронд нь `app/book/[slug]/page.tsx` гэсэн **нэг** файл бичээд, `/book/anhny-app`, `/book/notion-life` бүгд түүгээр ажиллана. `[slug]` хаалт нь "энэ хэсэг хувьсагч" гэсэн утга.

---

## Алхам 1 — Картыг дарагдах болгох

`components/BookCard.tsx`-ийг сольж бич (`<Link>`-ээр ороосон):

```tsx
import Link from "next/link";
import { type Book, formatMnt } from "@/lib/books";

export default function BookCard({ book }: { book: Book }) {
  return (
    <Link
      href={`/book/${book.slug}`}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className={`flex h-44 items-center justify-center bg-gradient-to-br ${book.accent}`}>
        <span className="text-6xl drop-shadow">{book.emoji}</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold leading-tight group-hover:underline">{book.title}</h3>
        <p className="mt-1 text-sm text-slate-500">{book.author}</p>
        <p className="mt-3 font-bold text-indigo-600">{formatMnt(book.priceMnt)}</p>
      </div>
    </Link>
  );
}
```

## Алхам 2 — Дэлгэрэнгүй хуудас

`app` дотор `book` хавтас → дотор нь `[slug]` хавтас (заавал дөрвөлжин хаалттай) → дотор нь `page.tsx`:

```tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBook, getBooks, formatMnt } from "@/lib/books";

// Ном бүрт хуудсыг урьдчилан бэлдэнэ (хурдан + SEO).
export function generateStaticParams() {
  return getBooks().map((book) => ({ slug: book.slug }));
}

// Browser tab-ийн гарчгийг ном бүрт тааруулна.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = getBook(slug);
  return { title: book ? `${book.title} — Номын дэлгүүр` : "Ном олдсонгүй" };
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = getBook(slug);

  if (!book) {
    notFound(); // буруу slug бол 404
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10">
      <Link href="/" className="text-sm text-slate-500 hover:text-slate-900">
        ← Бүх ном руу буцах
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className={`flex h-72 items-center justify-center rounded-3xl bg-gradient-to-br ${book.accent}`}>
          <span className="text-8xl drop-shadow">{book.emoji}</span>
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl font-bold sm:text-3xl">{book.title}</h1>
          <p className="mt-2 text-slate-500">Зохиогч: {book.author}</p>
          <p className="mt-6 leading-relaxed text-slate-700">{book.description}</p>
          <p className="mt-8 text-3xl font-bold text-indigo-600">{formatMnt(book.priceMnt)}</p>

          {/* Энэ товч одоохондоо юу ч хийхгүй — QPay-г Курс 4-д холбоно. */}
          <button
            type="button"
            className="mt-4 w-full rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700 sm:w-auto"
          >
            Худалдаж авах
          </button>
          <p className="mt-2 text-xs text-slate-400">* Төлбөр (QPay)-г Курс 4-д холбоно.</p>
        </div>
      </div>
    </div>
  );
}
```

Хадгал → нүүрэн дэх ном дээр дарж үз. Дэлгэрэнгүй хуудас руу орно. 🎉

---

## 🧠 Ойлгох — хамгийн чухал хэсэг
- **`[slug]` хавтас = dynamic route.** URL-ийн тэр хэсэг хувьсагч болно.
- **⚠️ Next.js 16:** `params` нь одоо **Promise**. Тиймээс `const { slug } = await params` гэж бичнэ. Интернет/AI-аас олдсон хуучин код `params.slug` гэж шууд бичсэн бол **энд засна**.
- **`notFound()`** — ном олдохгүй бол автоматаар 404 хуудас.
- **`generateStaticParams`** — 6 хуудсыг урьдчилан бэлддэг тул маш хурдан.

## ✅ Шалгах
- [ ] Ном дээр дарвал дэлгэрэнгүй хуудас руу орно
- [ ] "← Бүх ном руу буцах" ажиллана
- [ ] Буруу хаяг (ж: `/book/test`) → 404 гарна

## 🚀 Deploy
Дэлгүүрээ интернэтэд гаргах бүрэн заавар: **[5-р хэсэг — Deploy](course-01-bookspark-5-deploy.md)**. Live URL-аа **#ship-it-friday**-д хуваалц!

## 📦 Бэлэн код
- **ZIP:** `checkpoints/bookspark-c01-4-detail.zip`
- **Git:** `git checkout c01-4-detail`

## ⚠️ Түгээмэл алдаа
- **`params.slug` ажиллахгүй** → Next 16-д `const { slug } = await params`.
- **Карт дарагдахгүй** → BookCard-ыг `<Link href={...}>`-ээр ороосон эсэх.
- **Хавтасны нэр** → `[slug]` (дөрвөлжин хаалттай), доторх файл `page.tsx`.

## ✅ Action items
- [ ] Бүрэн дэлгүүрээ local дээр ажиллуулсан
- [ ] Screenshot аваад **#ship-it-friday**-д "Анхны дэлгүүр" гэж post хийсэн
- [ ] (Сонголт) Vercel дээр deploy хийсэн

**❓ Гацсан уу? #help-me-debug-д:** алдааны screenshot + юу хийсэн + repo line.

---

*Дараагийн хэсэг: [5-р хэсэг — Deploy](course-01-bookspark-5-deploy.md): дэлгүүрээ интернэтэд гаргана.*
