// Function to handle redirection to the login page
function redirectToLogin() {
    window.location.href = 'login.html'; // Replace 'login.html' with the actual login page URL
}

function editProfile() {
    alert("Edit Profile functionality coming soon!");
}

// Function to redirect to the Home page or refresh if already on it
function goToHome() {
    if (window.location.pathname.endsWith('index.html')) {
        window.location.reload();  // Refresh the page if already on the home page
    } else {
        window.location.href = 'index.html';  // Redirect to the home page
    }
}

function goToBack() {
    window.location.href = 'profile.html'; // Link to the general profile page
}

function goToContinueReading() {
    // Redirect or function for continue reading
}

function goToPosts() {
    // Redirect or function for posts
}

function goToComments() {
    // Redirect or function for comments
}

function goToSaved() {
    // Redirect or function for saved items
}

function goToBookmarks() {
    // Redirect or function for bookmarks
}
