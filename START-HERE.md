# 🎬 ЭНДЭЭС ЭХЭЛ — BookSpark (Курс 1)

Чи **бэлэн төсөлгүйгээр**, зөвхөн эдгээр файлаас эхэлж байна — яг Намсрайн адил.
Дэлгүүрийн бүх кодыг Claude Code-д **prompt** өгч бүтээнэ.

## Дараалал (нэг нэгээр)

**1. Хоосон апп босго** — VSCode terminal (`` Ctrl+` ``) дээр:
```bash
bash setup.sh
```
(Next.js 16 хоосон апп-ыг энэ хавтсанд босгоно, ~1 мин. `CLAUDE.md`, `course/`-ыг хадгална.)

**2. Claude Code нээ:**
```bash
claude
```

**3.** `course/course-01-bookspark-PROMPTS.md`-ыг нээ (зүүн талын Explorer-аас).

**4. Prompt-уудыг ДАРААЛЛААР өг:**
- **1-р PROMPT — CLAUDE.md** (төслийн дүрэм тогтоох) ← хамгийн эхэнд
- дараа нь **Part 1 → 2 → 3 → 4** (Setup → Data → Components → Pages)

**5.** Засвар бүрийг `y` (эсвэл `a`)-аар зөвшөөр. Дараа нь шалга:
```bash
npm run dev
```
→ [http://localhost:3000](http://localhost:3000)

## Файлууд
- `CLAUDE.md` — төслийн дүрэм (1-р PROMPT-оор сайжруулна)
- `setup.sh` — хоосон апп босгогч
- `course/` — бүх хичээл + PROMPTS pack

## Гацвал
`course/`-д заасан checkpoint-уудыг (zip) ав, эсвэл бүрэн жишээ кодыг хар.
