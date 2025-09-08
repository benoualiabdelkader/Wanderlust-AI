// Explore page functionality
function renderExplorePage() {
    console.log("Rendering explore page...");
    
    // Setup explore page tabs
    const tabLabels = document.querySelectorAll('.explore-tab-label');
    const tabContents = document.querySelectorAll('.explore-tab-content');
    
    if (tabLabels && tabContents) {
        tabLabels.forEach(label => {
            label.addEventListener('click', function() {
                const target = this.getAttribute('data-target');
                
                // Update active tab
                tabLabels.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                // Show content
                tabContents.forEach(content => {
                    content.style.display = content.id === target ? 'block' : 'none';
                });
            });
        });
        
        // Activate first tab by default
        if (tabLabels.length > 0) {
            tabLabels[0].click();
        }
    }
    
    // Setup search functionality
    const searchInput = document.getElementById('explore-search');
    const searchBtn = document.getElementById('explore-search-btn');
    
    if (searchInput && searchBtn) {
        const performSearch = () => {
            const query = searchInput.value.trim();
            if (query) {
                userState.addRecentSearch(query);
                searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
                
                // Simulate search delay
                setTimeout(() => {
                    searchBtn.innerHTML = '<i class="fas fa-search"></i>';
                    showNotification(`Search completed for "${query}"`);
                }, 1500);
            }
        };
        
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // Setup destination filters
    const filterBtns = document.querySelectorAll('.destination-filter');
    if (filterBtns) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                filterBtns.forEach(b => b.classList.remove('bg-purple-600', 'text-white'));
                this.classList.add('bg-purple-600', 'text-white');
                
                const filter = this.getAttribute('data-filter');
                console.log(`Filter selected: ${filter}`);
                // Here you would normally filter the destinations
            });
        });
    }
}
