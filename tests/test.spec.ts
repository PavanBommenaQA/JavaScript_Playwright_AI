import { test, expect } from '@playwright/test';

test.only('nimble login smoke test', async ({ page }) => {

    await page.goto('https://qa.nimblestaffing.net/');

    await page.locator('#tbUserName').fill('pavan.bommena@nimbleaccounting.com');
    await page.locator('#tbPassword').fill('Nimble#2025');
    await page.locator('#bLoginButton').click();

    const mainFrame = page.frameLocator("//iframe[@id='ifNimble']");
    await expect(mainFrame.locator(".loader_inner_wrap")).toBeHidden();

    // Handle dialog BEFORE click
    page.once('dialog', async dialog => {
        await dialog.accept();
    });
    const dropdown = mainFrame.locator('select[name="company"]');
    await dropdown.waitFor();
    await dropdown.click();
    await dropdown.selectOption({ label: 'BMW AG' });
    await page.keyboard.press('Tab');
    // Print selected value
    const selected = await dropdown.locator('option:checked').textContent();
    console.log('Selected:', selected);
    await page.locator('#ifNimble').contentFrame().getByText('Customers').first().click();
    await page.locator('#ifNimble').contentFrame().getByRole('button', { name: ' Add New' }).click();
    await page.waitForTimeout(5000);
    await page.locator('#ifNimble').contentFrame().locator('p-autocomplete').getByRole('button').click();
    await page.waitForTimeout(5000);
});