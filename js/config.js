// ========================================
// SITE CONFIGURATION
// Update this file to change content across the site
// ========================================

const SITE_CONFIG = {
    // Company Information
    company: {
        name: "Assessmate",
        logo: "🤖", // Can be emoji or path to image: "assets/images/logo.png"
        tagline: "AI-Powered Applicant Screening"
    },

    // Hero Section
    hero: {
        headline: "Screen 100% of applicants. Talk to only the best.",
        subtext: "Assessmate handles first-round screening so your team doesn't have to.",
        primaryCTA: "Try a Demo",
        secondaryCTA: "How It Works"
    },

    // Navigation Menu
    navigation: [
        { id: "home", label: "Home", href: "#home" },
        { id: "features", label: "Features", href: "#features" },
        { id: "use-cases", label: "Use Cases", href: "#use-cases" },
        { id: "demo", label: "Demo", href: "#demo" },
        { id: "contact", label: "Contact", href: "#contact" }
    ],

    // Features Data
    features: [
        {
            icon: "🧠",
            title: "Human-like AI Screening",
            description: "Natural conversations that feel authentic while gathering crucial applicant information efficiently."
        },
        {
            icon: "⌨️",
            title: "Typing & Diction Test Modules",
            description: "Built-in assessments for roles requiring specific skills, with automated scoring and detailed feedback."
        },
        {
            icon: "📊",
            title: "Progress Tracking Dashboard",
            description: "Real-time visibility into screening progress with comprehensive analytics and candidate insights."
        },
        {
            icon: "🎯",
            title: "Scoring and Strengths Summary",
            description: "Intelligent evaluation with clear recommendations to help you focus on the most promising candidates."
        }
    ],

    // How It Works Steps
    steps: [
        {
            number: 1,
            title: "Get Your Chatbot Link",
            description: "Set up your custom screening bot in minutes with your specific requirements and questions."
        },
        {
            number: 2,
            title: "Applicants Chat & Test",
            description: "Candidates interact naturally with AI and complete relevant skill assessments."
        },
        {
            number: 3,
            title: "System Scores & Tracks",
            description: "Advanced algorithms evaluate responses and test results automatically."
        },
        {
            number: 4,
            title: "Review Top Candidates",
            description: "Receive ranked summaries and focus your time on the most qualified applicants."
        }
    ],

    // Use Cases
    useCases: [
        {
            icon: "💼",
            title: "High-Volume Recruitment",
            description: "Perfect for companies receiving hundreds of applications. Screen everyone without overwhelming your team."
        },
        {
            icon: "🚀",
            title: "Startups & Scale-ups",
            description: "Limited HR resources? Assessmate acts as your first line of screening, ensuring no good candidate is missed."
        },
        {
            icon: "🏢",
            title: "Enterprise Organizations",
            description: "Standardize screening across departments while maintaining quality and compliance standards."
        },
        {
            icon: "🎯",
            title: "Specialized Roles",
            description: "Custom assessments for technical positions, customer service, or any role requiring specific skills."
        }
    ],

    // FAQ Data
    faq: [
        {
            question: "How long does setup take?",
            answer: "Most companies are up and running within 15 minutes. Simply configure your questions and share the link."
        },
        {
            question: "Can I customize the screening questions?",
            answer: "Absolutely! Tailor questions to your specific role requirements and company culture."
        },
        {
            question: "What about candidate privacy?",
            answer: "We're GDPR compliant with enterprise-grade security. Candidate data is encrypted and protected."
        },
        {
            question: "How accurate is the AI scoring?",
            answer: "Our AI achieves 94% correlation with human recruiters, continuously improving with each interaction."
        }
    ],

    // Chat Demo Messages
    chatDemo: {
        messages: [
            { type: 'bot', text: "Hi! I'm here to help with your application. What position are you applying for?" },
            { type: 'user', text: "Software Engineer" },
            { type: 'bot', text: "Great! Let's start with a few questions about your experience..." },
            { type: 'user', text: "I have 5 years of experience with React and Node.js" },
            { type: 'bot', text: "Excellent! Now let's test your typing speed..." }
        ],
        interval: 3000 // milliseconds between messages
    },

    // Social Proof
    testimonial: {
        quote: "Assessmate reduced our screening time by 80% while actually improving candidate quality. It's like having a senior recruiter working 24/7.",
        author: "Sarah Chen",
        title: "Head of Talent at TechFlow"
    },

    // Dashboard Preview Section
    dashboard: {
        headline: "Powerful insights at your fingertips",
        subtext: "Track candidate progress, review scores, and manage your hiring pipeline with our intuitive dashboard.",
        imageSrc: "assets/images/dashboard-preview.png",
        imageAlt: "Assessmate Dashboard"
    },

    // Final CTA
    finalCTA: {
        headline: "Hiring doesn't have to be overwhelming.",
        subtext: "Let Assessmate do the first pass.",
        buttonText: "Book a Free Demo"
    },

    // Sidebar CTA
    sidebarCTA: "Book a Demo",

    // Contact/Demo Settings
    demo: {
        // Set to true to use actual booking links, false for demo alerts
        useRealBooking: false,
        bookingURL: "https://calendly.com/your-company/demo", // Your actual booking URL
        demoURL: "https://demo.assessmate.com" // Your actual demo URL
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
}