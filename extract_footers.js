const fs = require('fs');
const content = fs.readFileSync('index.html.bak', 'utf-8');
const pages = content.split('<div id="page-');

pages.slice(1).forEach(page => {
  const pageId = page.substring(0, page.indexOf('"'));
  const footerMatch = page.match(/<footer[^>]*>([\s\S]*?)<\/footer>/);
  if (footerMatch) {
    console.log(`\n\n--- FOOTER FOR ${pageId} ---`);
    console.log(footerMatch[1].trim());
  }
});
