// script.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signupForm');

  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  const usernameError = document.getElementById('usernameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const formSuccess = document.getElementById('formSuccess');

  // 1) helper: simple email validation regex
  function isValidEmail(value) {
    // This is a commonly used simple email regex for client-side validation.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  // show and clear helpers
  function showError(inputEl, message, errorEl) {
    inputEl.classList.add('error');
    errorEl.textContent = message;
  }

  function clearError(inputEl, errorEl) {
    inputEl.classList.remove('error');
    errorEl.textContent = '';
  }

  // 2) Real-time validation (while typing)
  email.addEventListener('input', () => {
    const val = email.value.trim();
    if (val === '') {
      clearError(email, emailError);
      return;
    }
    if (!isValidEmail(val)) {
      showError(email, 'Please enter a valid email address.', emailError);
    } else {
      clearError(email, emailError);
    }
  });

  password.addEventListener('input', () => {
    if (password.value.length > 0 && password.value.length < 6) {
      showError(password, 'Password must be at least 6 characters.', passwordError);
    } else {
      clearError(password, passwordError);
    }
  });

  username.addEventListener('input', () => {
    if (username.value.trim() === '') {
      showError(username, 'Username is required.', usernameError);
    } else {
      clearError(username, usernameError);
    }
  });

  // 3) Submit handler — full validation
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // stop form from submitting to server (for now)
    formSuccess.textContent = ''; // clear previous success

    let valid = true;

    // Username required
    if (username.value.trim() === '') {
      showError(username, 'Username is required.', usernameError);
      valid = false;
    } else {
      clearError(username, usernameError);
    }

    // Email required + format
    const emailVal = email.value.trim();
    if (emailVal === '') {
      showError(email, 'Email is required.', emailError);
      valid = false;
    } else if (!isValidEmail(emailVal)) {
      showError(email, 'Please enter a valid email address.', emailError);
      valid = false;
    } else {
      clearError(email, emailError);
    }

    // Password length >= 6
    if (password.value.length < 6) {
      if (password.value === '') {
        showError(password, 'Password is required.', passwordError);
      } else {
        showError(password, 'Password must be at least 6 characters.', passwordError);
      }
      valid = false;
    } else {
      clearError(password, passwordError);
    }

    if (valid) {
      // All checks passed
      formSuccess.textContent = 'All good — form validated successfully!';
      // Optionally reset the form:
      form.reset();
      // Remove any error styles left behind
      [username, email, password].forEach(el => el.classList.remove('error'));
    }
  });
});
