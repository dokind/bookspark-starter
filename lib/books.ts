// lib/books.ts — дэлгүүрийн ТҮР "database". Курс 2-д Supabase руу нүүнэ.

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
