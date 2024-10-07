const signupLink = document.getElementById('signupLink');
const loginLink = document.getElementById('loginLink');
const loginContainer = document.getElementById('loginContainer');
const signupContainer = document.getElementById('signupContainer');

// Show sign-up form and hide login form
signupLink.addEventListener('click', function(e) {
    e.preventDefault();
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'block';
});

// Show login form and hide sign-up form
loginLink.addEventListener('click', function(e) {
    e.preventDefault();
    signupContainer.style.display = 'none';
    loginContainer.style.display = 'block';
});
