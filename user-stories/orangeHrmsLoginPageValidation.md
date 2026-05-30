📖 User Story
As a user of OrangeHRM,
I want to log in securely using the login page,
So that I can access the HR management system with proper authentication.

✅ Acceptance Criteria
1. Username Field
The login page must display a Username input field.

The field should accept alphanumeric characters and special characters (e.g., @, ., _).

Placeholder text should be visible (e.g., "Username").

Field should not allow submission when left blank.

Error message should appear if the field is empty upon login attempt.

2. Password Field
The login page must display a Password input field.

The field should mask input characters (●●●●).

Placeholder text should be visible (e.g., "Password").

Field should not allow submission when left blank.

Error message should appear if the field is empty upon login attempt.

3. Login Button
A Login button must be visible and clickable.

Button should remain disabled if both fields are empty.

On valid credentials, clicking should redirect to the OrangeHRM dashboard.

On invalid credentials, an error message should appear (e.g., "Invalid credentials").

4. Forgot Password Link
A Forgot your password? link must be visible below the login form.

Clicking the link should redirect to the password reset page.

The reset page should allow entry of a registered username/email.

5. Form Validation
Both fields must be mandatory.

Error messages should be displayed in case of:

Empty username

Empty password

Invalid credentials

Error messages should be clear, concise, and visible near the input fields.

## Application URL: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
