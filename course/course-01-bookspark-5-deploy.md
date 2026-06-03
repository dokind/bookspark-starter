# Курс 1 (BookSpark) · 5-р хэсэг: Deploy
## Дэлгүүрээ интернэтэд гаргах (Vercel)

**⏱️ ~15 минут** · **Өмнөх:** `c01-4-detail` · **Үр дүн:** бодит live URL 🌍

> 🤖 **Хоёр зам:** **(A) Claude Code-д prompt өгч deploy хий** — [Prompt Pack → Part 5](course-01-bookspark-PROMPTS.md) (зөвлөнө). **(B)** Доорх алхмуудыг гараар дага.

> localhost дээрх дэлгүүрээ интернэтэд гаргаж, найзууддаа линк илгээж болдог болгоё. 🎉

---

## 🎯 Энэ хэсэгт сурах зүйлс
- **Vercel** дээр Next.js апп-аа үнэгүй deploy хийх
- "Build" гэж юу болох, яагаад deploy-оос өмнө шалгадаг вэ
- Кодоо өөрийн GitHub repo-д тавих (portfolio + автомат deploy)

---

## ⚠️ ХАМГИЙН ЧУХАЛ — энэ бол ЧИНИЙ апп
Энэ дэлгүүр бол чиний код. Deploy-ийг ч **ӨӨРИЙН** Vercel болон **ӨӨРИЙН** GitHub repo-д хийнэ. Багшийн repo руу юу ч push хийхгүй (хийж ч чадахгүй — тэр repo хамгаалагдсан).

---

## 🔌 Эхлээд: миний repo-той холбоогоо салга  *(clone хийсэн бол — ихэнх нь!)*
Хэрэв чи төслөө **`git clone`-оор** (Курс 0/1-д заасан шиг) татсан бол, чиний хавтас одоо хүртэл **миний repo руу холбогдсон** хэвээр байгаа — `origin` миний хаяг руу заасан. Тиймээс push хийх гээд **"permission denied"** алдаа гарна. Эхлээд үүнийг 100% өөрийн болгоё.

**🤖 Хамгийн амар — Claude Code-д энэ prompt-ыг өг:**
```text
I cloned the BookSpark starter from someone else's GitHub repo, so this project is still
connected to their repo (origin points to it) and I can't push. Make this project 100% MINE:
1. Show the current remote with `git remote -v`.
2. Remove the connection to the original repo — the cleanest way is to delete the existing
   .git folder and start a fresh git repo. Do that and explain what you are doing.
3. Create one initial commit with all my current files.
4. Then tell me, step by step in Mongolian, how to make my OWN empty repo on github.com and
   push to it (the exact `git remote add origin ...` + `git push -u origin main` commands,
   with a placeholder for my username/repo).
Do NOT push anything yourself — only prepare everything and explain in Mongolian.
```

**⌨️ Эсвэл гараараа:**

*Цэвэр эхлэл (зөвлөнө) — багшийн git-ийг бүрэн устгаад шинээр эхэл:*
```bash
git remote -v                # одоо миний хаяг руу заасан байгаа эсэхийг харна
rm -rf .git                  # багшийн git түүх+холболтыг устга
                             #   ⊳ Windows PowerShell бол: Remove-Item -Recurse -Force .git
git init                     # өөрийн шинэ, цэвэр git
git add -A
git commit -m "My BookSpark"
```

*Эсвэл зүгээр л холбоог тасал (түүхийг үлдээнэ):*
```bash
git remote remove origin     # миний repo-той холбоо тасрана
```

→ Одоо доорх **Арга A**-ийн "өөрийн repo үүсгэх → push" алхмаар үргэлжлүүл. (Git огт хүсэхгүй бол → **Арга B (Vercel CLI)**, git хэрэггүй.)

---

## 🧠 Deploy гэж юу вэ?
Одоо чиний дэлгүүр зөвхөн **чиний компьютер дээр** (`localhost:3000`) ажиллаж байна. Deploy = кодыг интернэт дэх сервер дээр тавьж, **хэн ч нэвтрэх боломжтой URL** (ж: `my-bookspark.vercel.app`) гаргах. **Vercel** бол Next.js-ийг хийсэн компанийн hosting — Next.js-д хамгийн амар.

---

## Алхам 0 — Эхлээд build шалга
Vercel зөвхөн **build амжилттай** бол л deploy хийнэ. Тиймээс эхлээд өөр дээрээ шалга:

```bash
npm run build
```

Алдаагүй "Compiled successfully" гарвал бэлэн. Алдаа гарвал → Claude Code-д бүтнээр нь хуулж засуул (deploy хийхээсээ өмнө).

---

## 🌟 Арга A — Өөрийн GitHub repo + Vercel (ЗӨВЛӨНӨ)
> Яагаад энэ нь хамгийн зөв вэ: код чинь GitHub-д portfolio болж үлдэнэ, цаашид `git push` хийх болгонд **автоматаар** шинэчлэгдэнэ, Курс 2+ ч энэ repo дээр үргэлжилнэ.

**1. Өөрийн ШИНЭ, ХООСОН GitHub repo үүсгэ**
[github.com/new](https://github.com/new) → нэр өг (ж: `my-bookspark`) → **Create repository**. (README, .gitignore нэмэх хэрэггүй — хоосон байг.)

**2. Кодоо тэр repo руу түлх** (төслийнхөө дотор, terminal дээр):
```bash
git init
git add -A
git commit -m "My BookSpark"
git branch -M main
git remote add origin https://github.com/ЧИНИЙ-НЭР/my-bookspark.git
git push -u origin main
```

**3. Vercel-д холбо**
[vercel.com](https://vercel.com) → GitHub-аар нэвтэр → **Add New… → Project** → жагсаалтаас **өөрийн** `my-bookspark`-ыг сонго → **Deploy** дар. ~1 минут хүлээ.

→ **Болоо!** Live URL гарна (ж: `my-bookspark.vercel.app`). Цаашид `git push` хийх болгонд автоматаар шинэчлэгдэнэ. ✅

---

## ⚡ Арга B — Vercel CLI (хамгийн хурдан, GitHub хэрэггүй)
Зүгээр л хурдан гаргахыг хүсвэл:
```bash
npm i -g vercel      # Vercel-ийн хэрэгслийг суулгана (нэг удаа)
vercel               # асуултуудад Enter дарж яв. Эхэнд нэвтэрнэ (email/GitHub).
vercel --prod        # бодит (production) URL гаргана
```
→ Live URL шууд гарна. (GitHub repo үүсэхгүй, автомат deploy байхгүй — зөвхөн хурдан.)

---

## 🧠 Ойлгох (товч)
- **Build** = кодыг сервер дээр ажиллах хэлбэрт хувиргах. Эвдэрсэн бол deploy зогсоно — сайн хамгаалалт.
- **Vercel + GitHub** = `git push` → автомат deploy. Энэ бол мэргэжлийн жишиг урсгал.
- **Чиний repo, чиний Vercel** — багшийн repo-той огт холбоогүй.

## ✅ Шалгах
- [ ] `npm run build` алдаагүй
- [ ] Live URL дээр дэлгүүр ажиллаж байна (нүүр + ном дээр дарахад дэлгэрэнгүй)
- [ ] Утсан дээрээ нээгээд харсан (responsive)

## 🏆 Action items
- [ ] Live URL-аа **#ship-it-friday**-д "Анхны дэлгүүрээ deploy хийлээ 🚀" гэж хуваалцсан

## ⚠️ Түгээмэл алдаа
- **"Build failed" Vercel дээр** → эхлээд local дээр `npm run build` ажиллаж байгаа эсэхээ шалга.
- **`git push` "permission denied"** → `origin` нь ЧИНИЙ repo мөн үү шалга: `git remote -v`. Миний repo бол `git remote remove origin` хийгээд өөрийнхөө руу зааруул.
- **Vercel-д repo харагдахгүй** → Vercel-ийн GitHub холболтод тухайн repo-ийн зөвшөөрөл өгсөн эсэх (Vercel → Settings → GitHub).

---

*Дараагийн курс: **Курс 2 (BookSpark)** — номнуудаа Supabase database руу нүүлгэж, login + admin нэмнэ.*
