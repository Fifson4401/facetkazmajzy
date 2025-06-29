const { latexToText } = require('./latexToText');
const { getFirstNumberTag, getFirstWordTag } = require('./getSlug');

const author = 'Facetka z majzy - Helena Niemczynowska'

function getSeo(seo, categoryName, tags, title, description, slug, publishedAt, updatedAt, video) {
  const newSeo = seo || {}

  const tagNumber = getFirstNumberTag(tags)
  const tagWord = getFirstWordTag(tags)

  if (categoryName && tagNumber) {
    newSeo.metaTitle = generateMetaTitle(title, categoryName, tagNumber, tagWord)
  }
  newSeo.metaDescription = `${categoryName} przyprawia o zawrót głowy? To może rozwiążemy go razem? Sprawdź rozwiązanie krok po kroku i poszerz swoją wiedzę matematyczną!`
  newSeo.keywords = getKeywords(title, categoryName, tags, tagNumber, description)
  newSeo.metaViewport = "width=device-width, initial-scale=1"
  newSeo.canonicalURL = `https://facetkazmajzy.pl/zadania/${slug}`
  newSeo.metaRobots = process.env.HOST.includes('api.facetkazmajzy.pl') ? "follow, index, max-snippet:-1, max-image-preview:large, max-video-preview:-1" : "nofollow, noindex"

  const structuredData = []

  structuredData.push(organization);
  structuredData.push(website);

  const breadcrumbs = generateBreadcrumbs(newSeo.canonicalURL);
  if (breadcrumbs) {
    structuredData.push(breadcrumbs);
  }

  if (newSeo.structuredQuestion && newSeo.structuredAnswear) {
    const structuredQuestion = latexToText(newSeo.structuredQuestion)
    const structuredAnswear = latexToText(newSeo.structuredAnswear)
    const shortStructuredQuestion = newSeo.shortStructuredQuestion ? latexToText(newSeo.shortStructuredQuestion) : structuredQuestion

    newSeo.structuredQuestion = structuredQuestion
    newSeo.structuredAnswear = structuredAnswear
    newSeo.shortStructuredQuestion = shortStructuredQuestion

    const qaPage = generateQAPage({
      question: structuredQuestion,
      questionShort: shortStructuredQuestion,
      answer: structuredAnswear,
      author,
      url: newSeo.canonicalURL,
      publishedAt,
      updatedAt,
      video
    });

    if (qaPage) {
      structuredData.push(qaPage);
    }
  }

  newSeo.structuredData = structuredData;


  if (newSeo.metaSocial && Array.isArray(newSeo.metaSocial)) {
    newSeo.metaSocial = newSeo.metaSocial.map((social) => {
      let updatedSocial = {
        ...social,
        title: truncateText(newSeo.metaTitle || title, 60),
        description: truncateText(newSeo.metaDescription || description, 65),
        image: newSeo.metaImage || social.image // Ustawienie obrazu z metaImage, jeśli dostępny
      };

      return updatedSocial;
    });
  }

  return newSeo
}

function generateQAPage({ question, questionShort, answer, author, url, publishedAt, updatedAt, video }) {
  const qaPage = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "url": url,
    "mainEntity": {
      "@type": "Question",
      "name": questionShort,
      "text": question,
      "author": {
        "@type": "Person",
        "name": author
      },
      "dateCreated": publishedAt,
      "dateModified": updatedAt,
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "url": url,
        "text": answer,
        "dateCreated": publishedAt,
        "dateModified": updatedAt,
        "author": {
          "@type": "Person",
          "name": author
        }
      }
    }
  };

  // Jeśli istnieje wideo, dodaj VideoObject
  if (video && video.embedURL) {
    const videoIdMatch = video.embedURL.match(/embed\/([a-zA-Z0-9_-]{11})/);
    const videoId = videoIdMatch ? videoIdMatch[1] : null;

    if (videoId) {
      const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

      qaPage.mainEntity.video = {
        "@type": "VideoObject",
        "name": video.title || "Video",
        "description": question,
        "thumbnailUrl": thumbnailUrl,
        "uploadDate": publishedAt,
        "embedUrl": video.embedURL,
        "contentUrl": video.embedURL,
        "publisher": {
          "@type": "Organization",
          "name": "Facetka z Majzy",
          "logo": {
            "@type": "ImageObject",
            "url": "https://facetkazmajzy.pl/logo.webp"
          }
        }
      };
    }
  }

  return qaPage;
}

function generateMetaTitle(title, categoryName, tagNumber, tagWord) {
  const baseTitle = `${title} z matematyki - ${categoryName} ${tagNumber}`.trim();

  const fullTitleWithWord = `${baseTitle} - ${tagWord}`.trim();

  // Sprawdzamy, czy pełny tytuł mieści się w limicie
  if (fullTitleWithWord.length <= 60) {
    return fullTitleWithWord;
  }

  // Jeśli nie, zwracamy tytuł bez tagWord
  return baseTitle;
}

function generateBreadcrumbs(canonicalUrl) {
  try {
    const url = new URL(canonicalUrl);
    const pathSegments = url.pathname.split('/').filter(segment => segment.length > 0);

    const breadcrumbs = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Strona Główna",
        "item": `${url.origin}/`
      }
    ];

    let cumulativePath = '';
    pathSegments.forEach((segment, index) => {
      cumulativePath += `/${segment}`;
      const name = decodeURIComponent(segment.replace(/-/g, ' ')).replace(/\b\w/g, char => char.toUpperCase());

      breadcrumbs.push({
        "@type": "ListItem",
        "position": index + 2, // +2 ponieważ "Home" jest na pozycji 1
        "name": name,
        "item": `${url.origin}${cumulativePath}/`
      });
    });

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs
    };

    return breadcrumbSchema;
  } catch (error) {
    console.error("Błąd generowania breadcrumbów:", error);
    return null;
  }
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

function truncateText(text, maxLength) {
  if (!text) return '';
  return text.length > maxLength ? text.substring(0, maxLength - 3).trim() + '...' : text.trim();
}

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Facetka z Majzy - Helena Niemczynowska",
  "url": "https://facetkazmajzy.pl",
  "logo": "https://facetkazmajzy.pl/logo.webp",
  "sameAs": [
    "https://www.facebook.com/profile.php?id=100095406271152",
    "https://www.instagram.com/facetkazmajzy",
    "https://www.youtube.com/@Facetkazmajzy"
  ]
}

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Facetka z Majzy",
  "url": "https://facetkazmajzy.pl",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://facetkazmajzy.pl/zadania?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}


module.exports = {
  getSeo,
};