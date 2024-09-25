exports.handleBlogPost = function handleBlogPost(ctx) {
  const { header, content } = ctx.request.body;

  console.log(content);

  try {
    // Znajdź pierwszy obiekt typu 'blog-post.tex'
    const firstTexComponent = content.find(item => item.__component === 'blog-post.tex');

    if (firstTexComponent) {
      let modifiedTex = firstTexComponent.TEX;

      // Usuń znaczniki '\textbf{...}', zachowując tekst wewnątrz i dodając spację przed tekstem
      modifiedTex = modifiedTex.replace(/\\textbf\{([\s\S]*?)\}/g, ' $1');

      // Zamień '\begin{equation*}...\end{equation*}' na ' $$...$$ ' z dodaniem spacji
      modifiedTex = modifiedTex.replace(/\\begin\{equation\*\}([\s\S]*?)\\end\{equation\*\}/g, ' $$ $1 $$ ');

      // Usuń wiodące spacje po znakach nowej linii
      modifiedTex = modifiedTex.replace(/(\r\n|\n|\r)\s+/g, '$1');

      // Zamień wszystkie znaki nowej linii na spację
      modifiedTex = modifiedTex.replace(/(\r\n|\n|\r)/gm, ' ');

      // Zamień podwójne ukośniki '\\' wraz z ewentualnymi następującymi spacjami na pojedynczą spację
      modifiedTex = modifiedTex.replace(/\\\\\s*/g, ' ');

      // Dodaj spację po każdym wystąpieniu '$...$' jeśli nie ma spacji
      modifiedTex = modifiedTex.replace(/(\$[^$]*\$)(?!\s)/g, '$1 ');

      // Usuń dodatkowe spacje
      modifiedTex = modifiedTex.replace(/\s+/g, ' ').trim();

      // Przypisz zmodyfikowany tekst do opisu w żądaniu
      ctx.request.body.description = modifiedTex;

      // Możesz również wyświetlić zmodyfikowany tekst w konsoli
      console.log(modifiedTex);
    } else {
      console.log('Nie znaleziono komponentu typu blog-post.tex w content');
    }
  } catch (error) {
    strapi.log.error(`Error in blog post:`, error);
  }
};
