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
