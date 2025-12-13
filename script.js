// Form Search Functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.querySelector('.btn');
    const searchInput = document.querySelector('.input input');

    if (searchBtn && searchInput) {
        // Handle button click
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            performSearch();
        });

        // Handle Enter key press
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
        });
    }
});

// Perform search function
function performSearch() {
    const searchInput = document.querySelector('.input input');
    const searchQuery = searchInput.value.trim();

    if (searchQuery === '') {
        alert('Please enter a search term');
        return;
    }

    // Navigate to world news page or search results
    // You can customize this URL based on your needs
    window.location.href = './world news.html';

    // Or uncomment below to show search results on current page:
    // console.log('Searching for: ' + searchQuery);
    // alert('Searching for: ' + searchQuery);
}

// Mobile menu toggle (for future use)
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
}

// Clear search input on page load
window.addEventListener('load', function() {
    const searchInput = document.querySelector('.input input');
    if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
    }
});