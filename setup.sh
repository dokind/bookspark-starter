#!/usr/bin/env bash
# BookSpark — хоосон Next.js 16 апп-ыг ЭНЭ хавтсанд босгоно.
# Чиний CLAUDE.md, START-HERE.md, course/ файлуудыг ХАДГАЛНА.
set -e

if [ -f package.json ]; then
  echo "✅ Next.js апп аль хэдийн энд байна. Алгасаж байна."
  exit 0
fi

echo "📦 Next.js 16 хоосон апп үүсгэж байна (~1 минут болно)..."
npx --yes create-next-app@latest bookspark-scaffold --yes

echo "📂 Файлуудыг зөөж байна (CLAUDE.md / course/ -ыг хадгална)..."
shopt -s dotglob
for f in bookspark-scaffold/*; do
  base="$(basename "$f")"
  case "$base" in
    CLAUDE.md|START-HERE.md|setup.sh|course|README.md)
      : ;;  # бидний өөрсдийн файлыг дарж бичихгүй
    *)
      mv -f "$f" . ;;
  esac
done
rm -rf bookspark-scaffold

echo ""
echo "✅ Бэлэн боллоо!"
echo "   Дараагийн алхам:  claude         # Claude Code нээх"
echo "   Шалгах:           npm run dev    # http://localhost:3000"
