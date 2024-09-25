
// function processDocument(html, baseId) {
//   const dom = new JSDOM(`<!DOCTYPE html><html><body>${html}</body></html>`);
//   const document = dom.window.document;

//   addUniqueIdsToHeaders(document, baseId);
//   changeBlueSpanToMark(document);
//   addAttributesToLinks(document);
//   changeMarksToYellow(document);

//   // Return only the <body> content without additional <html> and <body> tags
//   return document.body.innerHTML;
// }

// function addUniqueIdsToHeaders(document, baseId) {
//   const headers = document.querySelectorAll('h2');

//   headers.forEach((header, index) => {
//     header.id = `${baseId}_${index}`;
//   });
// }

// // remove this function on migration clean up
// function changeBlueSpanToMark(document) {
//   const links = document.querySelectorAll('a');

//   links.forEach((link) => {
//     const span = link.querySelector('span');

//     if (span && span.style.color === 'rgb(12, 71, 192)') {
//       link.rel = "external noreferrer noopener nofollow";
//       const spanText = span.textContent;
//       span.replaceWith(spanText);

//       // Wrap the entire link content in a yellow <mark>
//       const mark = document.createElement('mark');
//       mark.setAttribute('data-color', '#f5f901');
//       mark.setAttribute('style', 'background-color: #f5f901; color: inherit');
//       mark.append(...link.childNodes);
//       link.appendChild(mark);
//     }
//   });
// }

// function addAttributesToLinks(document) {
//   const links = document.querySelectorAll('a');

//   links.forEach((link) => {
//     // If any <mark> exists within the link, add rel attributes
//     if (link.querySelectorAll('mark').length > 0) {
//       link.rel = "external noreferrer noopener nofollow";
//     }
//   });

// }

// function changeMarksToYellow(document) {
//   const marks = document.querySelectorAll('mark');

//   marks.forEach((mark) => {
//     mark.style.backgroundColor = '#f5f901';
//     mark.setAttribute('data-color', '#f5f901');
//   });
// }

// function contentToText(content) {
//   let contentBlocks = content || [];

//   if (Array.isArray(contentBlocks)) {
//     contentBlocks = contentBlocks
//       .map((item) => {
//         return `${item?.title || ''} ${item?.description || ''
//           }`
//       }
//       )
//       .join(' ');
//   }

//   return HTMLConverter(contentBlocks);
// }

// function HTMLConverter(htmlText) {
//   return htmlText.replace(/<[^>]+>/g, '')
// }

// module.exports = {
//   processDocument,
//   contentToText
// };