import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-4 py-20 text-center sm:py-28">
      <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg">
        <span className="text-6xl drop-shadow">📕</span>
      </div>

      <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-indigo-600">
        Алдаа 404
      </p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
        Энэ хуудас олдсонгүй
      </h1>
      <p className="mx-auto mt-4 max-w-md leading-relaxed text-slate-500">
        Таны хайсан ном эсвэл хуудас байхгүй, эсвэл хаяг буруу байж магадгүй.
        Бүх номоо нүүр хуудаснаас үзээрэй.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          Нүүр хуудас руу буцах
        </Link>
        <Link
          href="/"
          className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Бүх номыг үзэх
        </Link>
      </div>
    </div>
  );
}
