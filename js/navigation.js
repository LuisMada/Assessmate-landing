// ========================================
// NAVIGATION FUNCTIONALITY
// Handles sidebar, mobile menu, and tab navigation
// ========================================

class Navigation {
    constructor() {
        this.sidebar = document.getElementById('sidebar');
        this.mobileMenuBtn = document.getElementById('mobileMenuBtn');
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupOutsideClick();
        this.setupKeyboardNavigation();
    }

    setupMobileMenu() {
        if (this.mobileMenuBtn) {
            this.mobileMenuBtn.addEventListener('click', () => this.toggleSidebar());
        }
    }

    setupOutsideClick() {
        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (event) => {
            if (window.innerWidth <= 1024 && 
                this.sidebar && 
                !this.sidebar.contains(event.target) && 
                !this.mobileMenuBtn.contains(event.target) && 
                this.sidebar.classList.contains('open')) {
                this.closeSidebar();
            }
        });
    }

    setupKeyboardNavigation() {
        // ESC key to close sidebar
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && this.sidebar && this.sidebar.classList.contains('open')) {
                this.closeSidebar();
            }
        });
    }

    toggleSidebar() {
        if (this.sidebar) {
            this.sidebar.classList.toggle('open');
            
            // Update aria attributes for accessibility
            const isOpen = this.sidebar.classList.contains('open');
            this.sidebar.setAttribute('aria-hidden', !isOpen);
            
            if (this.mobileMenuBtn) {
                this.mobileMenuBtn.setAttribute('aria-expanded', isOpen);
            }
        }
    }

    closeSidebar() {
        if (this.sidebar) {
            this.sidebar.classList.remove('open');
            this.sidebar.setAttribute('aria-hidden', 'true');
            
            if (this.mobileMenuBtn) {
                this.mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        }
    }

    openSidebar() {
        if (this.sidebar) {
            this.sidebar.classList.add('open');
            this.sidebar.setAttribute('aria-hidden', 'false');
            
            if (this.mobileMenuBtn) {
                this.mobileMenuBtn.setAttribute('aria-expanded', 'true');
            }
        }
    }
}

// Initialize navigation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.navigation = new Navigation();
});