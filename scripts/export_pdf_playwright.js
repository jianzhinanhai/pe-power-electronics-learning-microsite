// Export the static page to PDF with Playwright.
// Usage:
//   npm install -D playwright
//   node scripts/export_pdf_playwright.js [inputUrlOrFile] [outputPdf]

const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const input = process.argv[2] || path.resolve('index.html');
  const output = process.argv[3] || 'output.pdf';
  const url = input.startsWith('http') ? input : 'file://' + path.resolve(input);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 1800 } });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(() => {
    document.querySelectorAll('details').forEach(d => d.open = true);
  });
  await page.pdf({
    path: output,
    format: 'A4',
    printBackground: true,
    margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' }
  });
  await browser.close();
  console.log(`Saved ${output}`);
})();
