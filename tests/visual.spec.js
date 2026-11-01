import { test, expect } from '@playwright/test';

const routes = ['/', '/blog'];

const snapName = (route) =>
  (route === '/' ? 'home' : route.slice(1).replace(/\//g, '_')) + '.png';

async function scrollThrough(page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 400) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 100));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForLoadState('networkidle');
}

for (const route of routes) {
  test(`visual: ${route}`, async ({ page }) => {
    const errors = [];

    page.on('console', (m) => {
      // generic 404 messages lack URLs; the response handler below reports them properly
      if (m.type() === 'error' && !m.text().startsWith('Failed to load resource')) {
        errors.push(`console: ${m.text()}`);
      }
    });
    page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
    page.on('response', (r) => {
      if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`);
    });
    page.on('requestfailed', (r) =>
      errors.push(`request failed: ${r.url()} (${r.failure()?.errorText})`)
    );

    await page.goto(route);
    await scrollThrough(page);

    await expect(page).toHaveScreenshot(snapName(route), { fullPage: true });
    expect(errors).toEqual([]);
  });
}