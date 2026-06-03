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
Чи апп-аа эхнээс нь (`create-next-app`) өөрөө үүсгэсэн. Энэ бол **100% чиний код** — багшийн repo биш. Тиймээс deploy-ийг ч **ӨӨРИЙН** Vercel болон **ӨӨРИЙН** GitHub repo-д хийнэ. Хэн нэгний repo руу юу ч push хийхгүй.

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

## 🧯 Хэрэв чи checkpoint-аас (миний repo-г clone хийж) эхэлсэн бол
Чиний `origin` миний repo руу заасан байж магадгүй. Салга:
```bash
git remote remove origin
```
Дараа нь **Арга A**-ийн 1, 2, 3-ыг өөрийн repo-гоор хий. (Эсвэл хамгийн амар нь: ZIP-ийг л татаад **Арга B**-г ашигла.)

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
