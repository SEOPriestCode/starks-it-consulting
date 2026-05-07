const fs = require('fs');

const content = fs.readFileSync('index.html.bak', 'utf-8');
const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/);

if (styleMatch && styleMatch[1]) {
  fs.writeFileSync('src/app/globals.css', styleMatch[1].trim());
  console.log('CSS extracted successfully.');
} else {
  console.log('No CSS found.');
}
