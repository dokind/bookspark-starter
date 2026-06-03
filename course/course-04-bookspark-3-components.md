# Курс 4 (BookSpark) · 3-р хэсэг: Components
## Header ба BookCard — дахин ашиглагдах хэсгүүд

**⏱️ ~20 минут** · **Өмнөх:** `c04-2-data` · **Checkpoint:** `c04-3-components`

> 🤖 **Хоёр зам:** **(A) Claude Code-д prompt өгч бүтээ** — [Prompt Pack → Part 3](course-04-bookspark-PROMPTS.md) (зөвлөнө). **(B)** Доорх кодыг хуул — fallback.

> Энгийн жагсаалтыг **гоё карт** болгож, бүх хуудсанд гарах толгой (Header) нэмнэ.

---

## 🎯 Энэ хэсэгт сурах зүйлс
- **Component** гэж юу болох, **prop**-оор өгөгдөл дамжуулах
- Нэг component-ыг дахин ашиглах (6 карт — нэг загвар)
- Tailwind-аар **grid** + responsive (утас/таблет/компьютер)

---

## 🧠 Component гэж юу вэ?
UI-ийн дахин ашиглагддаг жижиг хэсэг. Жишээ: нэг номын карт. Нэг удаа бичээд 6 удаа ашиглана. Энэ нь кодыг богино, цэвэрхэн байлгана.

---

## Алхам 1 — Header component

`components` хавтас үүсгээд `components/Header.tsx`:

```tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <span className="text-2xl">📚</span>
          <span>Номын дэлгүүр</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-slate-900">Нүүр</Link>
          <Link href="/" className="rounded-full bg-slate-900 px-4 py-2 text-white hover:bg-slate-700">
            Бүх ном
          </Link>
        </nav>
      </div>
    </header>
  );
}
```

## Алхам 2 — BookCard component

`components/BookCard.tsx`:

```tsx
import { type Book, formatMnt } from "@/lib/books";

// `book`-ийг "prop" болгож хүлээж авна.
export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className={`flex h-44 items-center justify-center bg-gradient-to-br ${book.accent}`}>
        <span className="text-6xl drop-shadow">{book.emoji}</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold leading-tight">{book.title}</h3>
        <p className="mt-1 text-sm text-slate-500">{book.author}</p>
        <p className="mt-3 font-bold text-indigo-600">{formatMnt(book.priceMnt)}</p>
      </div>
    </div>
  );
}
```

## Алхам 3 — Header-ыг layout-д тавих

`app/layout.tsx`-ийг сольж бич (Header + Footer нэмж):

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Номын дэлгүүр — Дижитал ном, гарын авлага",
  description: "Монгол бүтээгчдийн дижитал ном, гарын авлагыг худалдаж аваад татаж аваарай.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mn" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-400">
          © 2026 Номын дэлгүүр · Solo Spark жишээ төсөл
        </footer>
      </body>
    </html>
  );
}
```

## Алхам 4 — Нүүрийг grid болгох

`app/page.tsx`-ийг сольж бич:

```tsx
import { getBooks } from "@/lib/books";
import BookCard from "@/components/BookCard";

export default function Home() {
  const books = getBooks();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <section className="rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-700 px-6 py-14 text-center text-white sm:px-12">
        <h1 className="text-3xl font-bold sm:text-5xl">Дижитал номын дэлгүүр</h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-indigo-100 sm:text-lg">
          Build хийх, бизнес хийх, амьдралаа зохион байгуулах — монгол бүтээгчдийн ном.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="mb-6 text-xl font-bold">Бүх ном</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}
```

Хадгал — одоо толгойтой, hero-той, гоё карт grid-тэй дэлгүүр болсон!

---

## 🧠 Ойлгох (товч)
- **Prop:** `{ book }: { book: Book }` — эцэг (нүүр хуудас) component-оос дамжуулсан өгөгдөл.
- **Дахин ашиглалт:** нэг `BookCard`-ыг `.map`-аар 6 удаа ашигласан.
- **Responsive grid:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` → утас 1, таблет 2, компьютер 3 багана.
- **Layout-ийн хүч:** Header-ыг layout-д нэг л удаа тавихад бүх хуудсанд гарна.

## ✅ Шалгах
- [ ] Дээд талд Header, доор Footer харагдана
- [ ] Номнууд карт хэлбэрээр, өнгөт cover-той
- [ ] Цонхоо нарийсгахад 3 → 2 → 1 багана болно

## 📦 Бэлэн код
- **ZIP:** `checkpoints/bookspark-c04-3-components.zip`
- **Git:** `git checkout c04-3-components`

## ⚠️ Түгээмэл алдаа
- Cover-ийн өнгө гарахгүй → `accent` нь бүтэн класс (`from-indigo-500 to-violet-600`) байх ёстой, Tailwind-д бүтэн нэр хэрэгтэй.
- `Header is not defined` → `import Header from "@/components/Header"` нэмсэн эсэх.

---

*Дараагийн хэсэг: [4-р хэсэг — Pages](course-04-bookspark-4-detail.md): ном дээр дарвал дэлгэрэнгүй хуудас руу орно.*
