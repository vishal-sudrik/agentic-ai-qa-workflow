import { test, expect } from '@playwright/test';

const LOGIN_URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
const VALID_USERNAME = 'Admin';
const VALID_PASSWORD = 'admin123';

test.describe('OrangeHRM Login Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(LOGIN_URL);
  });

  test('should display login form fields and forgot password link', async ({ page }) => {
    const usernameField = page.getByPlaceholder('Username');
    const passwordField = page.getByPlaceholder('Password');
    const loginButton = page.getByRole('button', { name: 'Login' });
    const forgotPasswordLink = page.getByText('Forgot your password?');

    await expect(usernameField).toBeVisible();
    await expect(passwordField).toBeVisible();
    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();
    await expect(forgotPasswordLink).toBeVisible();
  });

  test('should show required error when username is blank', async ({ page }) => {
    await page.getByPlaceholder('Password').fill(VALID_PASSWORD);
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Required')).toBeVisible();
  });

  test('should show required error when password is blank', async ({ page }) => {
    await page.getByPlaceholder('Username').fill(VALID_USERNAME);
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Required')).toBeVisible();
  });

  test('should display invalid credentials error for bad login', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('wronguser');
    await page.getByPlaceholder('Password').fill('wrongpass');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });

  test('should log in successfully with valid credentials', async ({ page }) => {
    await page.getByPlaceholder('Username').fill(VALID_USERNAME);
    await page.getByPlaceholder('Password').fill(VALID_PASSWORD);
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/dashboard/);
  });

  test('should navigate to reset password page and allow username entry', async ({ page }) => {
    await page.getByText('Forgot your password?').click();
    await expect(page).toHaveURL(/requestPasswordResetCode/);
    await expect(page.getByPlaceholder('Username')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Reset Password' })).toBeVisible();
  });
});
