// ========================================
// MAIN APP INITIALIZATION
// This file orchestrates the entire application
// ========================================

class AssessmateApp {
    constructor() {
        this.config = SITE_CONFIG;
        this.init();
    }

    async init() {
        try {
            // Wait for DOM to be ready
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.render());
            } else {
                this.render();
            }
        } catch (error) {
            console.error('Failed to initialize app:', error);
        }
    }

    render() {
        this.renderHero();
        this.renderDashboard();
        this.renderTabs();
        this.renderTestimonial();
        this.renderFinalCTA();
        this.initializeFeatures();
    }


    renderHero() {
        const heroHeadlineEl = document.getElementById('heroHeadline');
        const heroSubtextEl = document.getElementById('heroSubtext');
        const heroButtonsEl = document.getElementById('heroButtons');
        
        if (heroHeadlineEl) heroHeadlineEl.textContent = this.config.hero.headline;
        if (heroSubtextEl) heroSubtextEl.textContent = this.config.hero.subtext;
        
        if (heroButtonsEl) {
            heroButtonsEl.innerHTML = `
                <a href="#demo" class="btn-primary" onclick="tryDemo()">${this.config.hero.primaryCTA}</a>
                <a href="#how-it-works" class="btn-secondary" onclick="showTab('how-it-works')">${this.config.hero.secondaryCTA}</a>
            `;
        }
    }

    renderDashboard() {
        const dashboardHeadlineEl = document.getElementById('dashboardHeadline');
        const dashboardSubtextEl = document.getElementById('dashboardSubtext');
        const dashboardImageEl = document.getElementById('dashboardImage');
        const dashboard = this.config.dashboard;
        
        if (dashboardHeadlineEl && dashboard) dashboardHeadlineEl.textContent = dashboard.headline;
        if (dashboardSubtextEl && dashboard) dashboardSubtextEl.textContent = dashboard.subtext;
        if (dashboardImageEl && dashboard) {
            dashboardImageEl.src = dashboard.imageSrc;
            dashboardImageEl.alt = dashboard.imageAlt;
        }
    }

    renderTabs() {
        const tabsHeaderEl = document.getElementById('tabsHeader');
        const tabsContentEl = document.getElementById('tabsContent');
        
        const tabs = [
            { id: 'features', label: 'Features', data: this.config.features },
            { id: 'how-it-works', label: 'How It Works', data: this.config.steps },
            { id: 'use-cases', label: 'Use Cases', data: this.config.useCases },
            { id: 'faq', label: 'FAQ', data: this.config.faq }
        ];
        
        if (tabsHeaderEl) {
            tabsHeaderEl.innerHTML = tabs.map((tab, index) => `
                <button class="tab-btn ${index === 0 ? 'active' : ''}" 
                        onclick="showTab('${tab.id}')">${tab.label}</button>
            `).join('');
        }
        
        if (tabsContentEl) {
            tabsContentEl.innerHTML = tabs.map((tab, index) => `
                <div class="tab-content ${index === 0 ? 'active' : ''}" id="${tab.id}">
                    ${this.renderTabContent(tab.id, tab.data)}
                </div>
            `).join('');
        }
    }

    renderTabContent(tabId, data) {
        switch (tabId) {
            case 'features':
            case 'use-cases':
                return `
                    <div class="features-grid">
                        ${data.map(item => `
                            <div class="feature-card">
                                <span class="feature-icon">${item.icon}</span>
                                <h3>${item.title}</h3>
                                <p>${item.description}</p>
                            </div>
                        `).join('')}
                    </div>
                `;
            
            case 'how-it-works':
                return `
                    <div class="steps-container">
                        ${data.map(step => `
                            <div class="step">
                                <div class="step-number">${step.number}</div>
                                <h3>${step.title}</h3>
                                <p>${step.description}</p>
                            </div>
                        `).join('')}
                    </div>
                `;
            
            case 'faq':
                return `
                    <div class="features-grid">
                        ${data.map(item => `
                            <div class="feature-card">
                                <h3>${item.question}</h3>
                                <p>${item.answer}</p>
                            </div>
                        `).join('')}
                    </div>
                `;
            
            default:
                return '<p>Content not found</p>';
        }
    }

    renderTestimonial() {
        const testimonialEl = document.getElementById('testimonialSection');
        const testimonial = this.config.testimonial;
        
        if (testimonialEl && testimonial) {
            testimonialEl.innerHTML = `
                <blockquote>"${testimonial.quote}"</blockquote>
                <cite>— ${testimonial.author}, ${testimonial.title}</cite>
            `;
        }
    }

    renderFinalCTA() {
        const finalCTAEl = document.getElementById('finalCTA');
        const cta = this.config.finalCTA;
        
        if (finalCTAEl && cta) {
            finalCTAEl.innerHTML = `
                <h2>${cta.headline}</h2>
                <p>${cta.subtext}</p>
                <button class="btn-primary" onclick="bookDemo()" 
                        style="background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); border: 2px solid rgba(255,255,255,0.3);">
                    ${cta.buttonText}
                </button>
            `;
        }
    }

    initializeFeatures() {
        // Initialize all interactive features
        this.initializeChatDemo();
        this.initializeScrollAnimations();
        this.initializeSmoothScrolling();
        this.initializeResponsiveHandling();
    }

    initializeChatDemo() {
        if (typeof ChatDemo !== 'undefined') {
            new ChatDemo(this.config.chatDemo);
        }
    }

    initializeScrollAnimations() {
        if (typeof ScrollAnimations !== 'undefined') {
            new ScrollAnimations();
        }
    }

    initializeSmoothScrolling() {
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    initializeResponsiveHandling() {
        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1024) {
                const sidebar = document.getElementById('sidebar');
                if (sidebar) sidebar.classList.remove('open');
            }
        });
    }

    handleBookDemo() {
        if (this.config.demo.useRealBooking && this.config.demo.bookingURL) {
            window.open(this.config.demo.bookingURL, '_blank');
        } else {
            alert('Demo booking would open here! 🚀\n\nIn a real implementation, this would:\n• Open a calendar booking widget\n• Show a contact form\n• Redirect to a scheduling page');
        }
    }

    handleTryDemo() {
        if (this.config.demo.useRealBooking && this.config.demo.demoURL) {
            window.open(this.config.demo.demoURL, '_blank');
        } else {
            alert('Interactive demo would launch here! 🤖\n\nIn a real implementation, this would:\n• Open an embedded chatbot demo\n• Show a guided product tour\n• Start a live screening simulation');
        }
    }
}

// Global functions for backward compatibility and ease of use
function bookDemo() {
    if (window.app) {
        window.app.handleBookDemo();
    }
}

function tryDemo() {
    if (window.app) {
        window.app.handleTryDemo();
    }
}

function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tab buttons
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected tab content
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Add active class to clicked button
    const clickedBtn = event.target;
    if (clickedBtn && clickedBtn.classList.contains('tab-btn')) {
        clickedBtn.classList.add('active');
    }

}


// Initialize the app
window.app = new AssessmateApp();