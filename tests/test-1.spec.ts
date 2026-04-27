import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('heading', { name: 'Danielle Mcloughlin' })).toBeVisible();
});

test("all images load successfully (with debug info)", async ({ page }) => {
  await page.goto("https://www.codewithdani.com/");

  const images = page.locator('img');
  const count = await images.count();

  for (let i = 0; i < count; i++) {
    const img = images.nth(i);

    if (!(await img.isVisible())) continue;

    const alt = await img.getAttribute('alt');
    const src = await img.getAttribute('src');

    // Ensure image is visible
    await expect(img, `Image ${i} not visible | alt="${alt}" src="${src}"`)
      .toBeVisible();

    // Check it actually loaded
    const isLoaded = await img.evaluate(
      (el) => el.complete && el.naturalWidth > 0
    );

    expect(
      isLoaded,
      `Image ${i} failed to load | alt="${alt}" src="${src}"`
    ).toBe(true);

    // Check it's not a fallback
    expect(
      src,
      `Image ${i} is using a fallback | alt="${alt}" src="${src}"`
    ).not.toMatch(/placeholder|fallback/i);
  }
});