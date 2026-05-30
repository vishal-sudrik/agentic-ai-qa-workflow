# OrangeHRM Login Page QA Plan

## Objective
Validate the OrangeHRM login page user flows and form validation for the public OrangeHRM demo site.

## Scenarios

### 1. Login page elements are visible
Steps:
1. Open the OrangeHRM login page.
2. Verify the Username field is visible with placeholder "Username".
3. Verify the Password field is visible with placeholder "Password".
4. Verify the Login button is visible and enabled.
5. Verify the "Forgot your password?" link is visible.

Expected:
- Username and Password inputs are present and accept text.
- Login button is visible and actionable.
- Forgot password link is visible.

### 2. Username validation when blank
Steps:
1. Open the login page.
2. Enter a valid password only.
3. Click Login.

Expected:
- A "Required" validation error appears for the Username field.

### 3. Password validation when blank
Steps:
1. Open the login page.
2. Enter a valid username only.
3. Click Login.

Expected:
- A "Required" validation error appears for the Password field.

### 4. Invalid credentials display error
Steps:
1. Open the login page.
2. Enter an invalid username and password.
3. Click Login.

Expected:
- An "Invalid credentials" error banner is shown.

### 5. Successful login with valid credentials
Steps:
1. Open the login page.
2. Enter valid credentials: Admin / admin123.
3. Click Login.

Expected:
- The user is redirected to the OrangeHRM dashboard.

### 6. Forgot password flow
Steps:
1. Open the login page.
2. Click "Forgot your password?".
3. Verify navigation to the password reset page.
4. Verify the username/email input is visible.
5. Verify the Reset Password button is visible.

Expected:
- Reset Password page is displayed with Username input and Reset Password action.
