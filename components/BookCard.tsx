import Link from "next/link";
import { type Book, formatMnt } from "@/lib/books";

// `book`-ийг "prop" болгож хүлээж авна.
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
