// js/image-loader.js
// This file will load images on ALL pages

function loadAnimeImage(animeId) {
    // Map anime IDs to image filenames
    const imageMap = {
        'dragon-ball': 'dragon-ball.jpg',
        'bleach': 'bleach.jpg',
        'death-note': 'death-note.jpg',
        'attack-on-titan': 'attack-on-titan.jpg',
        'detective-conan': 'detective-conan.jpg',
        'naruto': 'naruto.jpg',
        'one-piece': 'one-piece.jpg',
        'hunter-x-hunter': 'hunter-x-hunter.jpg',
        'steins-gate': 'steins-gate.jpg'
    };
    
    // Check if we have an image for this anime
    const imageName = imageMap[animeId];
    if (!imageName) return;
    
    // Create the image URL
    const imageUrl = `../images/${imageName}`;
    
    // Try to load the image
    const img = new Image();
    
    img.onload = function() {
        // Image exists! Update the poster
        const posters = document.querySelectorAll('.poster-large, .poster');
        
        posters.forEach(poster => {
            if (poster.closest(`#${animeId}`) || 
                document.querySelector(`#${animeId}`) ||
                window.location.pathname.includes(animeId)) {
                
                poster.style.backgroundImage = `url('${imageUrl}')`;
                poster.style.backgroundSize = 'cover';
                poster.style.backgroundPosition = 'center';
                
                // Add overlay for better text readability
                poster.style.position = 'relative';
                
                // Keep the floating icon visible
                const floatIcon = poster.querySelector('.float-icon, .float-icon-large');
                if (floatIcon) {
                    floatIcon.style.zIndex = '20';
                }
            }
        });
        
        console.log(`✓ Image loaded for ${animeId}`);
    };
    
    img.onerror = function() {
        console.log(`✗ No image found for ${animeId}, using gradient`);
        // Keep the beautiful gradient background
    };
    
    img.src = imageUrl;
}

// Auto-detect anime from URL or page structure
function autoLoadImages() {
    // Get anime ID from URL
    const path = window.location.pathname;
    let animeId = '';
    
    // Check URL for anime name
    const animePages = [
        'dragon-ball', 'bleach', 'death-note', 
        'attack-on-titan', 'detective-conan', 'naruto',
        'one-piece', 'hunter-x-hunter', 'steins-gate'
    ];
    
    for (const anime of animePages) {
        if (path.includes(anime)) {
            animeId = anime;
            break;
        }
    }
    
    // If on detail page, load that specific image
    if (animeId) {
        loadAnimeImage(animeId);
    } else {
        // On main page, load all images
        Object.keys(imageMap).forEach(loadAnimeImage);
    }
}

// Create imageMap if not defined (for main page)
if (typeof imageMap === 'undefined') {
    var imageMap = {
        'dragon-ball': 'dragon-ball.jpg',
        'bleach': 'bleach.jpg',
        'death-note': 'death-note.jpg',
        'attack-on-titan': 'attack-on-titan.jpg',
        'detective-conan': 'detective-conan.jpg',
        'naruto': 'naruto.jpg',
        'one-piece': 'one-piece.jpg',
        'hunter-x-hunter': 'hunter-x-hunter.jpg',
        'steins-gate': 'steins-gate.jpg'
    };
}

// Run when page loads
document.addEventListener('DOMContentLoaded', autoLoadImages);