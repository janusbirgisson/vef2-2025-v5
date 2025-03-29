<!--datocms-autoinclude-header start-->

<a href="https://www.datocms.com/"><img src="https://www.datocms.com/images/full_logo.svg" height="60"></a>

👉 [Visit the DatoCMS homepage](https://www.datocms.com) or see [What is DatoCMS?](#what-is-datocms)

---

<!--datocms-autoinclude-header end-->

# Verkefni 5 - Fréttavefur

Fréttavefur byggður með Next.js og DatoCMS sem hluti af Vefforritun 2, vormisseri 2025.

## Virkni

Vefurinn birtir fréttir sem eru vistaðar í DatoCMS. Notendur geta:
- Skoðað lista af öllum fréttum
- Smellt á einstaka frétt til að lesa hana í heild sinni
- Séð höfund hverrar fréttar
- Séð flokk fréttarinnar

## Tæknilegt

- Next.js 14 framework
- TypeScript
- DatoCMS sem headless CMS
- GraphQL fyrir fyrirspurnir í gögn
- Markdown fyrir fréttartexta

## Uppsetning verkefnis

1. Klóna verkefnið:
```bash
git clone https://github.com/janusbirgisson/vef2-2025-v5.git
cd vef2-2025-v5
```

2. Setja upp umhverfisbreytur:
   - Afrita `.env.local.example` í `.env.local`
   - Setja inn rétt gildi fyrir DatoCMS aðgang

3. Setja upp og keyra:
```bash
npm install
npm run dev
```

4. Opna vefinn á `http://localhost:3000`

## Uppbygging verkefnis

- `/src/app/(base-layout)/newsArticles` - Forsíða með lista af fréttum
- `/src/app/(base-layout)/newsArticles/[id]` - Síða fyrir einstaka frétt
- Notar DatoCMS fyrir gagnageymslu og umsýslu á fréttum

## Höfundur

Janus Birgisson

## Keyra verkefnið

Verkefnið er keyrandi á Vercel [hér](https://vef2-2025-v5-242w0aifh-janusbirgissons-projects.vercel.app/)

