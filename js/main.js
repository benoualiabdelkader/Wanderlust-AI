// Initialize API keys from environment
const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY';
const YOUTUBE_API_KEY = 'YOUR_YOUTUBE_API_KEY';
const GOOGLE_SEARCH_API_KEY = 'YOUR_GOOGLE_SEARCH_API_KEY';
const GOOGLE_SEARCH_ENGINE_ID = 'YOUR_GOOGLE_SEARCH_ENGINE_ID';

// DOM elements
const pageContainer = document.getElementById('page-container');
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');
const navLinks = document.querySelectorAll('.nav-link');

// Simple user state management
const userState = {
    currentPage: 'home',
    favorites: [],
    recentSearches: [],
    settings: {
        currency: 'USD',
        language: 'English',
        theme: 'light'
    },
    
    // Add a destination to favorites
    addToFavorites: function(destination) {
        if (!this.favorites.some(fav => fav.id === destination.id)) {
            this.favorites.push(destination);
            console.log(`Added to favorites: ${destination.name}`);
            return true;
        }
        return false;
    },
    
    // Add a recent search
    addRecentSearch: function(query) {
        // Keep only the last 5 searches
        this.recentSearches = this.recentSearches
            .filter(item => item !== query) // Remove if already exists
            .slice(0, 4); // Keep only the 4 most recent
        
        this.recentSearches.unshift(query); // Add new query at the beginning
        console.log(`Added to recent searches: ${query}`);
    },
    
    // Update a setting
    updateSetting: function(key, value) {
        if (this.settings.hasOwnProperty(key)) {
            this.settings[key] = value;
            console.log(`Updated setting ${key} to ${value}`);
            return true;
        }
        return false;
    }
};

// Navigation function
function navigateTo(hash) {
    const pageId = hash.substring(1) || 'home';
    
    // Log for debugging
    console.log(`Navigating to page: ${pageId}`);
    
    if (pages[pageId]) {
        // Update user state
        userState.currentPage = pageId;
        
        // Render the page content
        pageContainer.innerHTML = pages[pageId];
        
        // Update active navigation link
        document.querySelectorAll('.nav-link').forEach(link => {
            const linkPage = link.getAttribute('href').substring(1);
            link.classList.toggle('active-nav', linkPage === pageId);
        });
        
        // Call page-specific setup functions
        switch(pageId) {
            case 'explore':
                renderExplorePage();
                break;
            case 'home':
                setupChat();
                break;
            case 'inspiration':
                renderYouTubeVideos();
                break;
        }
        
        // Add event listeners for dynamic elements
        setupPageEventListeners(pageId);
        
        // Scroll to top when navigating
        window.scrollTo(0, 0);
    } else {
        console.error(`Page not found: ${pageId}`);
        pageContainer.innerHTML = pages['home'];
    }
}

// Setup event listeners for elements that are dynamically added to the page
function setupPageEventListeners(pageId) {
    // Common event listeners for all pages
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    if (favoriteButtons) {
        favoriteButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const itemId = this.getAttribute('data-id');
                const itemName = this.getAttribute('data-name');
                
                if (itemId && itemName) {
                    userState.addToFavorites({
                        id: itemId,
                        name: itemName,
                        type: this.getAttribute('data-type') || 'destination'
                    });
                    
                    // Visual feedback
                    this.innerHTML = '<i class="fas fa-heart"></i>';
                    this.classList.add('text-pink-500');
                    
                    // Show notification
                    showNotification(`Added ${itemName} to favorites!`);
                }
            });
        });
    }
    
    // Page-specific event listeners
    if (pageId === 'planner') {
        const generateTripBtn = document.getElementById('generate-trip-btn');
        if (generateTripBtn) {
            generateTripBtn.addEventListener('click', function() {
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
                
                // Simulate API call delay
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-magic"></i> Generate Trip Itinerary';
                    showNotification('Trip itinerary generated successfully!');
                }, 2000);
            });
        }
    }
}

// Show notification to the user
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-24 right-4 p-4 rounded-lg shadow-lg text-white z-50 transition-all duration-300 transform translate-x-full ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`;
    notification.innerHTML = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 10);
    
    // Animate out and remove
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Initialize API keys and ensure they're available
function checkAPIKeys() {
    console.log("Checking API keys...");
    if (!GEMINI_API_KEY || GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY') {
        console.warn("Warning: Gemini API key not set properly");
    }
    if (!YOUTUBE_API_KEY || YOUTUBE_API_KEY === 'YOUR_YOUTUBE_API_KEY') {
        console.warn("Warning: YouTube API key not set properly");
    }
    if (!GOOGLE_SEARCH_API_KEY || GOOGLE_SEARCH_API_KEY === 'YOUR_GOOGLE_SEARCH_API_KEY') {
        console.warn("Warning: Google Search API key not set properly");
    }
    if (!GOOGLE_SEARCH_ENGINE_ID || GOOGLE_SEARCH_ENGINE_ID === 'YOUR_GOOGLE_SEARCH_ENGINE_ID') {
        console.warn("Warning: Google Search Engine ID not set properly");
    }
}
