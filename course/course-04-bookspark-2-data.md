# Курс 4 (BookSpark) · 2-р хэсэг: Data
## Номнуудаа нэмж, жагсаах

**⏱️ ~15 минут** · **Өмнөх:** `c04-1-setup` · **Checkpoint:** `c04-2-data`

> 🤖 **Хоёр зам:** **(A) Claude Code-д prompt өгч бүтээ** — [Prompt Pack → Part 2](course-04-bookspark-PROMPTS.md) (зөвлөнө). **(B)** Доорх кодыг хуул — fallback.

> Одоо дэлгүүрт **ном** оруулна. Database-гүйгээр, энгийн файлд.

---

## 🎯 Энэ хэсэгт сурах зүйлс
- TypeScript `type`-аар өгөгдлийн "хэлбэр" тодорхойлох
- Жагсаалт (array) үүсгэх ба `.map()`-аар дэлгэцэнд гаргах
- Өгөгдлийг **нэг газар** төвлөрүүлэх (дараа Supabase руу амархан нүүлгэх гүүр)

---

## 🧠 Яагаад файлд бичиж байна вэ, database биш гэж?
Database setup хийхгүйгээр дэлгүүрээ хурдан ажиллуулахын тулд. Курс 5-д бид яг **энэ өгөгдлийг** Supabase руу нүүлгэхэд апп бараг өөрчлөгдөхгүй — учир нь бүх хуудас `getBooks()` функцээр л өгөгдөл уншина. Бид зөвхөн тэр функцийн **дотор**-ыг солино. Энэ бол сайн зуршил: **өгөгдлийн эх сурвалжийг нэг газар байлга.**

---

## Алхам 1 — Өгөгдлийн файл

`bookspark` дотор `lib` хавтас, дотор нь `books.ts` үүсгээд бүтнээр нь хуул:

```ts
// lib/books.ts — дэлгүүрийн ТҮР "database". Курс 5-д Supabase руу нүүнэ.

// Нэг номын "хэлбэр". TypeScript үүгээр алдааг урьдчилан барина.
export type Book = {
  id: string;
  slug: string; // URL-д харагдах нэр, ж: "anhny-app" -> /book/anhny-app
  title: string;
  author: string;
  description: string;
  priceMnt: number; // үнэ төгрөгөөр
  emoji: string; // одоохондоо cover зургийн оронд
  accent: string; // cover-ийн Tailwind gradient
};

export const books: Book[] = [
  { id: "1", slug: "anhny-app", title: "Анхны апп хүртэл", author: "Намсрай",
    description: "Кодын мэдлэггүй хүн AI-тай хамт 60 хоногт анхны апп-аа build хийж, deploy хийж, орлого олох гарын авлага.",
    priceMnt: 49000, emoji: "🚀", accent: "from-indigo-500 to-violet-600" },
  { id: "2", slug: "mongol-brand", title: "Монгол брэнд бүтээх", author: "Намсрай",
    description: "Жижиг бизнес болон хувь хүний брэндийг тэг-ээс эхлүүлэх практик ном.",
    priceMnt: 39000, emoji: "🎨", accent: "from-rose-500 to-pink-600" },
  { id: "3", slug: "freelancer-guide", title: "Фрилансерын гарын авлага", author: "Б. Болор",
    description: "Үйлчлүүлэгч олох, үнээ тогтоох, гэрээ байгуулах — Монголд фрилансаар амьдрах зөвлөмж.",
    priceMnt: 29000, emoji: "💼", accent: "from-amber-500 to-orange-600" },
  { id: "4", slug: "ai-marketing", title: "AI-тай маркетинг", author: "Г. Сарнай",
    description: "Контент, зар, зураг — AI ашиглан маркетингаа 10 дахин хурдан хийх загварууд.",
    priceMnt: 45000, emoji: "🤖", accent: "from-cyan-500 to-blue-600" },
  { id: "5", slug: "personal-finance-101", title: "Хувийн санхүү 101", author: "Д. Тэмүүлэн",
    description: "Цалин хуваарилах, хэмнэх, өрөөс гарах, эхний хөрөнгө оруулалт — энгийн систем.",
    priceMnt: 25000, emoji: "💰", accent: "from-emerald-500 to-green-600" },
  { id: "6", slug: "notion-life", title: "Notion-оор амьдрал зохион байгуулах", author: "Э. Ану",
    description: "Ажил, төсөл, зорилгоо нэг дор удирдах Notion систем + бэлэн template.",
    priceMnt: 19000, emoji: "🗂️", accent: "from-slate-600 to-zinc-800" },
];

// Аппын бусад хэсэг номыг ЗӨВХӨН эдгээр функцээр унина.
export function getBooks(): Book[] {
  return books;
}
export function getBook(slug: string): Book | undefined {
  return books.find((book) => book.slug === slug);
}
export function formatMnt(price: number): string {
  return `${price.toLocaleString("en-US")}₮`;
}
```

## Алхам 2 — Нүүрэнд жагсаах

`app/page.tsx`-ийг сольж бич:

```tsx
import { getBooks, formatMnt } from "@/lib/books";

export default function Home() {
  const books = getBooks(); // бүх номыг уншина

  return (
    <main className="mx-auto max-w-2xl p-10">
      <h1 className="text-3xl font-bold">📚 Номын дэлгүүр</h1>
      <p className="mt-2 text-slate-600">Манай {books.length} ном:</p>

      <ul className="mt-6 space-y-3">
        {books.map((book) => (
          <li key={book.id} className="rounded-lg border border-slate-200 bg-white p-4">
            <span className="font-semibold">{book.title}</span>
            <span className="text-slate-500"> — {book.author}</span>
            <span className="float-right font-bold text-indigo-600">
              {formatMnt(book.priceMnt)}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
```

Хадгал — нүүрэнд 6 ном жагсаж гарна.

---

## 🧠 Ойлгох (товч)
- **`type Book`** — нэг номд ямар талбар байх ёстойг тодорхойлно. `title` мартвал TypeScript улаанаар анхааруулна.
- **`books.map(...)`** — жагсаалтын зүйл бүрийг UI болгоно. Энэ бол React-д жагсаалт харуулах гол арга.
- **`key={book.id}`** — React-д мөр бүрийг ялгахад заавал хэрэгтэй.
- **`@/lib/books`** — `@/` нь төслийн root. `../../lib/books` гэж бичих хэрэггүй.

## ✅ Шалгах
- [ ] Нүүрэнд 6 ном гарч байна
- [ ] Үнэ нь "49,000₮" хэлбэрээр баруун талд харагдана
- [ ] `lib/books.ts`-д **өөрийн** нэг номыг нэмж туршсан

## 📦 Бэлэн код
- **ZIP:** `checkpoints/bookspark-c04-2-data.zip`
- **Git:** `git checkout c04-2-data`

## ⚠️ Түгээмэл алдаа
- `Cannot find module '@/lib/books'` → файлын зам (`lib/books.ts`) ба `@/` зөв эсэх.
- Хуудас хоосон → `getBooks()`-ийг `import` хийсэн эсэх, `.map` доторх `key` байгаа эсэх.

---

*Дараагийн хэсэг: [3-р хэсэг — Components](course-04-bookspark-3-components.md): жагсаалтыг гоё карт болгоно.*
