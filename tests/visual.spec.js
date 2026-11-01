import { test, expect } from '@playwright/test';

const routes = ['/', '/blog']; // <- list your real routes

async function scrollThrough(page) {
  // trigger lazy-loaded images / scroll animations
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 400) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 100));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForLoadState('networkidle');
}

for (const route of routes) {
  test(`visual: ${route}`, async ({ page }) => {
    const errors = [];
    page.on('console', m => m.type() === 'error' && errors.push(m.text()));
    page.on('pageerror', e => errors.push(e.message));

    await page.goto(route);
    await scrollThrough(page);

    await expect(page).toHaveScreenshot(
      `${route.replace(/\//g, '_') || 'home'}.png`,
      {
        fullPage: true,
        // mask anything dynamic, e.g. current year, carousels, live feeds:
        // mask: [page.locator('[data-testid="dynamic"]')],
      }
    );
    expect(errors).toEqual([]);
  });
}