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
function goToProfile() {
    window.location.href = 'author-profile.html';
}
// Function to redirect to the Novel page
function goToNovel() {
    window.location.href = 'novels.html'; // Replace with the actual Novel section link
}
 function timeAgo(date) {
    const now = new Date();
    const updated = new Date(date);
    const diffInSeconds = Math.floor((now - updated) / 1000);

    const intervals = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "week", seconds: 604800 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 },
    ];

    for (const interval of intervals) {
      const count = Math.floor(diffInSeconds / interval.seconds);
      if (count >= 1) {
        return `Updated ${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
      }
    }
    return "Updated just now";
  }

  // Update all .update-time elements
  function updateTimes() {
    const elements = document.querySelectorAll(".update-time");
    elements.forEach((el) => {
      const updatedTime = el.getAttribute("data-updated");
      el.textContent = timeAgo(updatedTime);
    });
  }

  // Initial load
  updateTimes();

  // Optional: Auto-refresh every 60 seconds to keep times updated
  setInterval(updateTimes, 60000);
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
function toggleTheme() {
    document.body.classList.toggle('dark-mode');

    // Update button icon based on the theme
    const themeToggle = document.getElementById("themeToggle");
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = "🌜"; // Moon icon for dark mode
    } else {
        themeToggle.textContent = "🌞"; // Sun icon for light mode
    }
}

// Check saved theme preference
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("themeToggle").textContent = "🌜";
    }
});

// Save theme preference
document.body.classList.contains("dark-mode")
    ? localStorage.setItem("theme", "dark")
    : localStorage.setItem("theme", "light");

// Initialize the authentication button on page load
window.onload = function() {
    const isLoggedIn = false; // This would be dynamically set based on user login status
    updateAuthButton(isLoggedIn);
};
