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
