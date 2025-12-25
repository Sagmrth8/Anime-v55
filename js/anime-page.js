// Anime Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Make download buttons interactive
    const downloadBtns = document.querySelectorAll('.download-btn');
    
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the service name
            const service = this.closest('.link-card').querySelector('h3').textContent;
            
            // Show a message (in a real site, this would link to the actual download)
            alert(`سيتم توجيهك إلى صفحة التحميل على ${service}. في الموقع النهائي، ستكون هذه رواقع حقيقية.`);
            
            // Simulate loading
            const originalText = this.textContent;
            this.textContent = 'جاري التوجيه...';
            this.style.opacity = '0.7';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.opacity = '1';
            }, 1500);
        });
    });
    
    // Add animation to tip cards on scroll
    const tipCards = document.querySelectorAll('.tip-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    tipCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

// ============================================
// ADD YOUR OWN IMAGES HERE - SIMPLE VERSION
// ============================================

function addRealImages() {
    // List of your image files (update these with your actual filenames)
    const imageFiles = {
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
    
    // Try to load each image
    Object.keys(imageFiles).forEach(animeId => {
        const imageUrl = `images/${imageFiles[animeId]}`;
        const img = new Image();
        
        img.onload = function() {
            // Image exists! Replace the gradient with the real image
            const poster = document.querySelector(`#${animeId} .poster`);
            if (poster) {
                poster.style.backgroundImage = `url('${imageUrl}')`;
                poster.style.backgroundSize = 'cover';
                poster.style.backgroundPosition = 'center';
                
                // Keep the floating icon visible
                const floatIcon = poster.querySelector('.float-icon');
                if (floatIcon) {
                    floatIcon.style.zIndex = '10';
                }
                
                console.log(`✓ Loaded: ${animeId}`);
            }
        };
        
        img.onerror = function() {
            // Image doesn't exist, keep the beautiful gradient
            console.log(`✗ No image for: ${animeId} (using gradient instead)`);
        };
        
        img.src = imageUrl;
    });
}

// Call the function when page loads
document.addEventListener('DOMContentLoaded', function() {
    // ... your existing code stays here ...
    
    // Add this line at the end of the DOMContentLoaded function:
    addRealImages();  // <-- ADD THIS LINE
    
    // The sweeping character and other interactions remain unchanged
});