// ========================================
// CHAT DEMO FUNCTIONALITY
// Handles the animated chatbot demonstration
// ========================================

class ChatDemo {
    constructor(config) {
        this.config = config;
        this.messageIndex = 0;
        this.chatContainer = null;
        this.isRunning = false;
        this.intervalId = null;
        this.init();
    }

    init() {
        this.setupChatContainer();
        this.startDemo();
    }

    setupChatContainer() {
        const chatbotDemo = document.getElementById('chatbotDemo');
        if (chatbotDemo) {
            chatbotDemo.innerHTML = `
                <div class="chatbot-header">
                    <div class="avatar">🤖</div>
                    <div>
                        <div style="font-weight: 600;">Assessmate AI</div>
                        <div style="font-size: 0.875rem; color: var(--gray-400);">Online</div>
                    </div>
                </div>
                <div class="chat-messages" id="chatMessages"></div>
            `;
            
            this.chatContainer = document.getElementById('chatMessages');
        }
    }

    startDemo() {
        if (this.isRunning) return;
        
        this.isRunning = true;
        this.showNextMessage();
        
        // Set up interval for continuous demo
        this.intervalId = setInterval(() => {
            this.showNextMessage();
        }, this.config.interval);
    }

    stopDemo() {
        this.isRunning = false;
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    resetDemo() {
        this.messageIndex = 0;
        if (this.chatContainer) {
            this.chatContainer.innerHTML = '';
        }
    }

    showNextMessage() {
        if (!this.chatContainer || !this.config.messages.length) return;
        
        // Reset if we've shown all messages
        if (this.messageIndex >= this.config.messages.length) {
            this.resetDemo();
            return;
        }
        
        const message = this.config.messages[this.messageIndex];
        this.addMessage(message.type, message.text);
        this.messageIndex++;
        
        // Auto-scroll to bottom
        this.scrollToBottom();
    }

    addMessage(type, text) {
        if (!this.chatContainer) return;
        
        const messageEl = document.createElement('div');
        messageEl.className = `message ${type}`;
        messageEl.textContent = text;
        
        // Add animation class
        messageEl.style.opacity = '0';
        messageEl.style.transform = 'translateY(20px)';
        
        this.chatContainer.appendChild(messageEl);
        
        // Trigger animation
        requestAnimationFrame(() => {
            messageEl.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            messageEl.style.opacity = '1';
            messageEl.style.transform = 'translateY(0)';
        });
    }

    scrollToBottom() {
        if (this.chatContainer) {
            this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
        }
    }

    // Public methods for external control
    pause() {
        this.stopDemo();
    }

    resume() {
        if (!this.isRunning) {
            this.startDemo();
        }
    }

    restart() {
        this.stopDemo();
        this.resetDemo();
        this.startDemo();
    }

    // Update configuration
    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
        this.restart();
    }

    // Add custom message
    addCustomMessage(type, text) {
        this.addMessage(type, text);
        this.scrollToBottom();
    }
}

// Utility functions for easy demo control
window.ChatDemoUtils = {
    pause: () => {
        if (window.chatDemo) window.chatDemo.pause();
    },
    
    resume: () => {
        if (window.chatDemo) window.chatDemo.resume();
    },
    
    restart: () => {
        if (window.chatDemo) window.chatDemo.restart();
    },
    
    addMessage: (type, text) => {
        if (window.chatDemo) window.chatDemo.addCustomMessage(type, text);
    }
};