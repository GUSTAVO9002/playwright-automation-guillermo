import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { URL, CREDENTIALS } from './data/Constantes';

test('User must be logged in successfuly.', async ({ page }) => {
    await page.goto(URL.SAUCEDEMOURL);
    const loginPage = new LoginPage(page);
    await loginPage.submitLoginform('' + CREDENTIALS.SAUCEDMOUSER, CREDENTIALS.SAUCEDMOPASSWORD);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});