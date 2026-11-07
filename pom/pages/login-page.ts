import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly user: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;


  constructor(page: Page) {
    this. page = page;
    this.user = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
  }

  async submitLoginform(user: string , pass: string) {
    await this.user.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
  }
}