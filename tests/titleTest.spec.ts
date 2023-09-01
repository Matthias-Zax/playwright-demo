import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/#/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Home' }).click();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Software Testing/);
});