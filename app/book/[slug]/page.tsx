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
