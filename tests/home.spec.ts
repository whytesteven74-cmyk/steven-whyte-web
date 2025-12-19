
import { test, expect } from '@playwright/test';

test('homepage has correct title and mission statement', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Steven Whyte/);

    // Check for the new mission statement
    await expect(page.getByText('Breaking the Silence')).toBeVisible();

    // Check for the "Mental Health Advocate" label
    await expect(page.getByText('Mental Health Advocate')).toBeVisible();

    // Check navigation links
    await expect(page.getByRole('link', { name: 'My Story' })).toBeVisible();
});

test('story page loads correctly', async ({ page }) => {
    await page.goto('/story');

    // Check for the "Unspoken" heading
    await expect(page.getByRole('heading', { name: 'My Story: From Silence to Unspoken Truths' })).toBeVisible();
});
