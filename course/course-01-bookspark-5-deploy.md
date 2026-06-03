# Курс 1 (BookSpark) · 5-р хэсэг: Deploy
## Дэлгүүрээ интернэтэд гаргах (Vercel)

**⏱️ ~15 минут** · **Өмнөх:** `c01-4-detail` · **Үр дүн:** бодит live URL 🌍

> 🤖 **Хоёр зам:** **(A) Claude Code-д prompt өгч deploy хий** — [Prompt Pack → Part 5](course-01-bookspark-PROMPTS.md) (зөвлөнө). **(B)** Доорх алхмуудыг гараар дага.

> localhost дээрх дэлгүүрээ интернэтэд гаргаж, найзууддаа линк илгээдэг болгоё. 🎉

---

## 🎯 Энэ хэсэгт сурах зүйлс
- Clone хийсэн төслөө **100% өөрийн** болгох (багшийн git-ийг салгах)
- Кодоо **өөрийн** GitHub repo-д тавих
- **Vercel** дээр Next.js апп-аа үнэгүй deploy хийж, `git push` болгонд авто-шинэчлэх

---

## ⚠️ Гол зарчим — энэ бол ЧИНИЙ апп
Дэлгүүрийн код чинийх. Deploy-ийг ч **өөрийн** GitHub + **өөрийн** Vercel дансанд хийнэ. Багшийн repo руу юу ч push хийхгүй (тэр repo хамгаалагдсан — хийж ч чадахгүй).

---

## 🗺️ Хамгийн зөв зам — 4 алхам
> Ихэнх чинь төслөө **`git clone`-оор** татсан. Тиймээс эхлээд "багшийнхаас" → "чинийх" болгоод, дараа нь интернэтэд гаргана.

1. **Build шалгах** — апп алдаагүй эсэх
2. **Апп-аа өөрийн болгох** — багшийн git холбоог салгаж, шинээр эхлэх
3. **Өөрийн GitHub repo руу түлх**
4. **Vercel-д холбож deploy** → live URL

*(Зүгээр хурдан гаргахыг хүсвэл → доорх **⚡ Хурдан хувилбар (Vercel CLI)**, GitHub хэрэггүй.)*

---

## Алхам 1 — Build шалга
Vercel зөвхөн **build амжилттай** бол deploy хийдэг. Эхлээд өөр дээрээ шалга:
```bash
npm run build
```
"Compiled successfully" гарвал бэлэн. Алдаа гарвал → Claude Code-д бүтнээр нь хуулж засуул (deploy-оос өмнө).

---

## Алхам 2 — Апп-аа 100% өөрийн болго
Чи `git clone`-оор татсан бол хавтас чинь одоо хүртэл **миний repo руу холбогдсон** хэвээр (`origin` миний хаяг). Тиймээс push хийхэд **"permission denied"** гарна. Багшийн git-ийг бүрэн устгаад, өөрийн цоо шинэ git-ээр эхэлье.

> 💡 Энэ алхам **бүгдэд** ажиллана — clone, ZIP, эсвэл шинэ scaffold хийсэн эсэхээс үл хамаарч төслийг чинь цэвэр, өөрийн git болгоно.

**🤖 Хамгийн амар — Claude Code-д:**
```text
I cloned this BookSpark starter from someone else's GitHub repo, so origin still points to
their repo and I can't push. Make this project 100% mine:
1. Show the current remote with `git remote -v`.
2. Delete the existing .git folder and start a fresh git repo, then make one initial commit
   with all my files. Explain what you're doing in Mongolian.
Do NOT push anything yet — I'll create my own GitHub repo in the next step.
```

**⌨️ Эсвэл гараараа:**
```bash
git remote -v                # одоо миний хаяг руу заасан байгааг харна
rm -rf .git                  # багшийн git түүх + холболтыг устга
                             #   ⊳ Windows PowerShell бол: Remove-Item -Recurse -Force .git
git init                     # өөрийн шинэ, цэвэр git
git add -A
git commit -m "My BookSpark"
```
> 💡 Яагаад `rm -rf .git`? Энэ нь багшийн бүх git мэдээллийг устгаад, төслийг чинь **цоо шинэ, цэвэр** git болгоно — ямар ч үлдэгдэл холбоосгүй. (Зүгээр холбоог л таслахыг хүсвэл: `git remote remove origin`.)

---

## Алхам 3 — Өөрийн GitHub repo руу түлх
**1.** [github.com/new](https://github.com/new) → нэр өг (ж: `my-bookspark`) → **Create repository**. (README, .gitignore нэмэхгүй — хоосон байг.)

**2.** Гарч ирэх хуудасны хаягийг ашиглаад:
```bash
git remote add origin https://github.com/ЧИНИЙ-НЭР/my-bookspark.git
git branch -M main
git push -u origin main
```

> 🔐 `git push` нэр/нууц үг асуувал — GitHub нууц үг **биш**, Personal Access Token хэрэгтэй. Хамгийн амар нь Claude Code-оор хийлгэ. (`gh` суулгасан бол нэг мөрөөр болно: `gh repo create my-bookspark --public --source=. --push` — repo үүсгээд шууд түлнэ.)

---

## Алхам 4 — Vercel-д холбож deploy
[vercel.com](https://vercel.com) → GitHub-аар нэвтэр → **Add New… → Project** → жагсаалтаас **өөрийн** `my-bookspark`-ыг сонго → **Deploy** дар (~1 мин).

→ **Болоо!** Live URL гарна (ж: `my-bookspark.vercel.app`). Цаашид `git push` хийх болгонд **автоматаар** шинэчлэгдэнэ. ✅

---

## ⚡ Хурдан хувилбар — Vercel CLI (GitHub хэрэггүй)
Зүгээр л хурдан гаргахыг хүсвэл (git тоглохгүй):
```bash
npm i -g vercel      # Vercel хэрэгсэл (нэг удаа)
vercel               # асуултуудад Enter; эхэнд нэвтэрнэ (email/GitHub)
vercel --prod        # бодит (production) URL
```
→ Live URL шууд гарна. (GitHub repo үүсэхгүй, авто-deploy байхгүй.)
> **Тэмдэглэл:** Курс 2-оос эхлэн өөрийн GitHub repo дээр үргэлжлүүлнэ — тиймээс боломжтой бол дээрх **4 алхмыг** хий.

---

## 🧠 Ойлгох (товч)
- **`rm -rf .git` + `git init`** = clone хийсэн төслийг "багшийнхаас" → "чинийх" болгох хамгийн цэвэр арга.
- **Build** = кодыг сервер дээр ажиллах хэлбэрт оруулах. Эвдэрвэл deploy зогсоно — сайн хамгаалалт.
- **GitHub + Vercel** = `git push` → авто-deploy. Энэ бол мэргэжлийн жишиг урсгал (Курс 2+ үргэлжилнэ).

## ✅ Шалгах
- [ ] `npm run build` алдаагүй
- [ ] `git remote -v` нь **чиний** repo-г заасан (миний биш)
- [ ] Live URL дээр дэлгүүр ажиллана (нүүр + ном дээр дарахад дэлгэрэнгүй)
- [ ] Утсан дээрээ нээгээд харсан (responsive)

## 🏆 Action items
- [ ] Live URL-аа **#ship-it-friday**-д "Анхны дэлгүүрээ deploy хийлээ 🚀" гэж хуваалцсан

## ⚠️ Түгээмэл алдаа
- **`git push` "permission denied" / "remote origin already exists"** → чи clone хийсэн, `origin` миний хаяг хэвээр. **Алхам 2**-ыг хий (`rm -rf .git`), эсвэл `git remote remove origin` хийгээд өөрийнхөө руу зааруул.
- **"Build failed" Vercel дээр** → эхлээд local дээр `npm run build` ажиллаж байгаа эсэхээ шалга.
- **`git push` нэр/нууц үг дахин дахин асууна** → Personal Access Token хэрэгтэй; эсвэл Claude Code / `gh`-аар хийлгэ.
- **Vercel-д repo харагдахгүй** → Vercel → Settings → GitHub дээр тухайн repo-ийн зөвшөөрлийг өг.

---

*Дараагийн курс: **Курс 2 (BookSpark)** — номнуудаа Supabase database руу нүүлгэж, login + admin нэмнэ.*
