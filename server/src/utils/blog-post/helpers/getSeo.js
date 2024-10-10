const { latexToText } = require('./latexToText');
const { getFirstNumberTag, getFirstWordTag } = require('./getSlug');

function getSeo(seo, categoryName, tags, title, description, slug) {
  const newSeo = seo || {}

  const tagNumber = getFirstNumberTag(tags)
  const tagWord = getFirstWordTag(tags)

  if (categoryName && tagNumber) {
    newSeo.metaTitle = `${title} z matematyki - ${categoryName} ${tagNumber} ${tagWord ? '- ' + tagWord : ''}`.trim()
  }
  newSeo.metaDescription = `${categoryName} przyprawia o zawrót głowy? To może rozwiążemy go razem? Sprawdź rozwiązanie krok po kroku i poszerz swoją wiedzę matematyczną!`
  newSeo.keywords = getKeywords(title, categoryName, tags, tagNumber, description)
  newSeo.metaViewport = "width=device-width, initial-scale=1"
  newSeo.canonicalURL = `https://facetkazmajzy.pl/zadania/${slug}`

  console.log(newSeo.metaTitle);



}

const dupa = {
  "id": 3,
  "metaTitle": "Medical software certification - a guide  for managers",
  "metaDescription": "askodoqwkm oiwm saokm doim doaskmd okmq o",
  "keywords": "sada",
  "metaRobots": "nofollow, noindex",
  "structuredData": {},
  "metaViewport": "width=device-width, initial-scale=1",
  "canonicalURL": "facetkazmajzy.pl",
  "structuredQuestion": "asd",
  "structuredAnswear": "asd",
  "metaImage": null,
  "metaSocial": [
    {
      "id": 3,
      "socialNetwork": "Facebook",
      "title": "Medical software certification - a guide  for managers",
      "description": "Medical software certification - a guide  for managers",
      "image": null,
      "__temp_key__": 0
    }
  ],
  "__temp_key__": 0
}

function getKeywords(title, categoryName, tags, tagNumber, description) {
  const keywords = ['zadania z matematyki', 'zadania facetka z majzy']
  keywords.push(title.trim())
  if (categoryName && tagNumber) {
    keywords.push(`${categoryName} ${tagNumber}`)
    keywords.push(`zadanie z ${categoryName} ${tagNumber}`)
  }
  if (tags.length > 0) {
    tags.forEach(element => {
      if (isNaN(Number(element.name))) {
        keywords.push(element.name);
      }
    })
  }
  keywords.push(removeCommas(latexToText(getFirstSentence(description))))

  return keywords.join(',')
}

function removeCommas(text) {
  // Wyrażenie regularne szuka wszystkich przecinków w tekście
  return text.replace(/,/g, '');
}

function getFirstSentence(text) {
  // Definiujemy znaki kończące zdanie
  const sentenceEndings = /[.!?]/;

  // Szukamy indeksu pierwszego znaku kończącego zdanie
  const firstSentenceEnd = text.search(sentenceEndings);

  let firstSentence;

  if (firstSentenceEnd !== -1) {
    // Jeśli znaleziono znak kończący zdanie, pobieramy pierwsze zdanie
    firstSentence = text.substring(0, firstSentenceEnd + 1).trim();
  } else {
    // Jeśli nie ma znaku kończącego zdanie, traktujemy cały tekst jako jedno zdanie
    firstSentence = text.trim();
  }

  // Sprawdzamy długość pierwszego zdania
  if (firstSentence.length >= 30) {
    return firstSentence;
  } else {
    // Jeśli pierwsze zdanie jest krótsze niż 30 znaków, potrzebujemy więcej tekstu
    // Ustalamy limit do 60 znaków
    const limit = 60;

    if (text.length <= limit) {
      // Jeśli tekst jest krótszy lub równy 60 znaków, zwracamy cały tekst
      return text.trim();
    } else {
      // Pobieramy pierwsze 60 znaków
      let truncated = text.substring(0, limit);

      // Znajdujemy ostatnią spację przed limitem, aby nie przerywać słowa
      const lastSpace = truncated.lastIndexOf(' ');

      if (lastSpace !== -1) {
        truncated = truncated.substring(0, lastSpace);
      }

      return truncated.trim() + '...';
    }
  }
}

function removeCommasBetweenWords(text) {
  if (!text) {
    return '';
  }

  // Regex:
  // (?<!\d), - Dopasowuje przecinek, który **nie** jest poprzedzony cyfrą
  // | - Alternatywa (OR)
  // ,(?!\d) - Dopasowuje przecinek, który **nie** jest następowany przez cyfrę
  const regex = /(?<!\d),|,(?!\d)/g;

  // Zamiana dopasowanych przecinków na spację
  text = text.replace(regex, ' ');

  return text;
}



module.exports = {
  getSeo,
};