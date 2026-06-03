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
