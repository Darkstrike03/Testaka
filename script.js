// Function to handle redirection to the login page
function redirectToLogin() {
    window.location.href = 'login.html'; // Replace 'login.html' with the actual login page URL
}
function editProfile() {
    alert("Edit Profile functionality coming soon!");
}

// Function to redirect to the Home page or refresh if already on it
function goToHome() {
    if (window.location.pathname.endsWith('akindex.html')) {
        window.location.reload();  // Refresh the page if already on the home page
    } else {
        window.location.href = 'index.html';  // Redirect to the home page
    }
}

// Function to redirect to the Novel page
function goToNovel() {
    window.location.href = 'novels.html'; // Replace with the actual Novel section link
}

// Function to redirect to the Post page
function goToPost() {
    window.location.href = 'posts.html'; // Replace with the actual Post section link
}

// Optional: If you want to dynamically update the sign-in button to avatar when logged in
function updateAuthButton(isLoggedIn) {
    const authButton = document.getElementById('authButton');
    if (isLoggedIn) {
        authButton.innerHTML = '<img src="avatar.png" alt="User Avatar" class="avatar">'; // Replace with actual avatar image and styling
        authButton.onclick = function() {
            window.location.href = 'profile.html'; // Link to profile page
        };
    } else {
        authButton.innerText = 'Sign In/Sign Up';
        authButton.onclick = redirectToLogin;
    }
}

// Initialize the authentication button on page load
window.onload = function() {
    const isLoggedIn = false; // This would be dynamically set based on user login status
    updateAuthButton(isLoggedIn);
};
