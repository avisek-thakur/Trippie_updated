// navbar.js - Standardized navigation functionality for all pages

class NavbarManager {
    constructor() {
        this.initializeNavigation();
    }

    initializeNavigation() {
        this.setupAvatarDropdown();
        this.setupNavigationHandlers();
    }

    setupAvatarDropdown() {
        const avatar = document.querySelector('.navbar-avatar');
        const avatarMenu = document.querySelector('.navbar-avatar-menu');
        
        if (avatar && avatarMenu) {
            // Avatar dropdown toggle
            avatar.addEventListener('click', (event) => {
                event.stopPropagation();
                avatarMenu.classList.toggle('show');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', (event) => {
                if (!avatar.contains(event.target) && !avatarMenu.contains(event.target)) {
                    avatarMenu.classList.remove('show');
                }
            });
        }
    }

    setupNavigationHandlers() {
        // Home logo navigation
        const homeLogo = document.querySelector('.navbar-logo');
        if (homeLogo) {
            homeLogo.addEventListener('click', () => {
                this.navigateTo('homepage.html');
            });
        }

        // Manage Profile navigation
        const manageProfileBtn = document.getElementById('navbarManageProfile');
        if (manageProfileBtn) {
            manageProfileBtn.addEventListener('click', () => {
                this.navigateTo('manageprofile.html');
            });
        }

        // View Booking navigation
        const viewBookingBtn = document.getElementById('navbarViewBooking');
        if (viewBookingBtn) {
            viewBookingBtn.addEventListener('click', () => {
                this.navigateTo('recentbook.html');
            });
        }

        // Log Out functionality
        const logoutBtn = document.getElementById('navbarLogout');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                if (confirm('Are you sure you want to log out?')) {
                    this.navigateTo('login.html');
                }
            });
        }
    }

    navigateTo(url) {
        // Close dropdown before navigation
        const avatarMenu = document.querySelector('.navbar-avatar-menu');
        if (avatarMenu) {
            avatarMenu.classList.remove('show');
        }
        window.location.href = url;
    }

    // Utility method to check current page
    getCurrentPage() {
        return window.location.pathname.split('/').pop();
    }

    // Method to highlight current page in navigation (if needed)
    highlightCurrentPage() {
        const currentPage = this.getCurrentPage();
        // Add any active state logic here if needed
    }
}

// Initialize navbar when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new NavbarManager();
});
