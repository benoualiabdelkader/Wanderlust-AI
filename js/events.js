// Event listeners initialization
function initEventListeners() {
    // Event listeners for navigation
    window.addEventListener('DOMContentLoaded', () => {
        console.log('DOM loaded, initial hash:', window.location.hash);
        navigateTo(window.location.hash);
    });
    
    window.addEventListener('hashchange', (e) => {
        console.log('Hash changed to:', window.location.hash);
        navigateTo(window.location.hash);
    });
    
    document.getElementById('nav-menu').addEventListener('click', (e) => {
        const link = e.target.closest('.nav-link');
        if (link) {
            e.preventDefault();
            const newHash = new URL(link.href).hash;
            console.log('Navigation link clicked, new hash:', newHash);
            
            if(window.location.hash !== newHash) {
                window.location.hash = newHash;
            } else {
                // Force navigation even if hash is the same
                navigateTo(newHash);
            }
            
            if(window.innerWidth < 1024) {
                document.querySelector('.sidebar').classList.remove('sidebar-open');
            }
        }
    });

    document.getElementById('menu-toggle').addEventListener('click', () => {
        document.querySelector('.sidebar').classList.toggle('sidebar-open');
    });
}

// Call when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    checkAPIKeys();
    initEventListeners();
});
