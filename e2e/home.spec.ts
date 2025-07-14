import { test, expect } from '@playwright/test';

test('should show homepage', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle("Create Next App");
});
