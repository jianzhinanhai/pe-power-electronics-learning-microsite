// Export the microsite to PDF with Playwright.
// Usage:
//   npm install -D playwright
//   npx playwright install chromium
//   node scripts/export_pdf_playwright.js [url-or-file] [output.pdf]
//
// Examples:
//   node scripts/export_pdf_playwright.js http://localhost:8000/ output.pdf
//   node scripts/export_pdf_playwright.js file:///absolute/path/to/index.html output.pdf

const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const input = process.argv[2] || `file://${path.resolve(process.cwd(), 'index.html')}`;
  const output = process.argv[3] || 'output.pdf';

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 1600 }, deviceScaleFactor: 1 });

  await page.goto(input, { waitUntil: 'networkidle', timeout: 120000 });

  // Expand standard disclosure widgets before printing.
  await page.evaluate(() => {
    document.querySelectorAll('details').forEach((el) => { el.open = true; });
    window.scrollTo(0, 0);
  });

  await page.pdf({
    path: output,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' }
  });

  await browser.close();
  console.log(`PDF written to ${output}`);
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
