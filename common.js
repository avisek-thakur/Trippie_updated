// common.js - Shared functionality across all admin pages

// Logout functionality
function setupLogoutHandler() {
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function() {
            if (confirm('Are you sure you want to log out?')) {
                window.location.href = "login.html";
            }
        });
    }
}

// Initialize common functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupLogoutHandler();
    console.log("Admin page loaded successfully");
});
