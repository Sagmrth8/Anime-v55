// Anime Data - Enhanced with better visuals
const animeList = [
    {
        id: "dragon-ball",
        title: "Dragon Ball",
        description: "غني عن التعريف، أقوى أنمي",
        page: "pages/dragon-ball.html",
        color: "#FF9800"
    },
    {
        id: "bleach",
        title: "Bleach",
        description: "أفضل إنمي عندي، كمية حب ❤️",
        page: "pages/bleach.html",
        color: "#4A90E2"
    },
    {
        id: "death-note",
        title: "Death Note",
        description: "مذكرة موت تقتل أي شخص ف بالك",
        page: "pages/death-note.html",
        color: "#2C3E50"
    },
    {
        id: "attack-on-titan",
        title: "Attack on Titan",
        description: "البشرية في صراع ضد العمالقة",
        page: "pages/attack-on-titan.html",
        color: "#1ABC9C"
    },
    {
        id: "detective-conan",
        title: "Detective Conan",
        description: "المحقق كونان اللي يشغله بندريتا كثير",
        page: "pages/detective-conan.html",
        color: "#3498DB"
    },
    {
        id: "naruto",
        title: "Naruto",
        description: "ناروتو، منبع كلمة سنسي",
        page: "pages/naruto.html",
        color: "#FFB74D"
    },
    {
        id: "one-piece",
        title: "One Piece",
        description: "أطول إنمي بالتاريخ، بس رهيب",
        page: "pages/one-piece.html",
        color: "#FF5722"
    },
    {
        id: "hunter-x-hunter",
        title: "Hunter X Hunter",
        description: "صياد، بس يصيد بشر مدري شلون",
        page: "pages/hunter-x-hunter.html",
        color: "#9C27B0"
    },
    {
        id: "steins-gate",
        title: "Steins;Gate",
        description: "السفر عبر الزمن وعواقبه",
        page: "pages/steins-gate.html",
        color: "#673AB7"
    }
];

// Function to create anime cards WITHOUT floating icons
function createAnimeCards() {
    const animeGrid = document.getElementById('animeGrid');
    
    animeList.forEach(anime => {
        // Create card element
        const card = document.createElement('div');
        card.className = 'anime-card';
        card.id = anime.id;
        
        // Set up click event
        card.addEventListener('click', () => {
            window.location.href = anime.page;
        });
        
        // Card content - WITHOUT floating icons
        card.innerHTML = `
            <div class="poster-container">
                <div class="poster" data-title="${anime.title}" style="--color-primary: ${anime.color}">
                    <!-- No floating icon here -->
                </div>
            </div>
            <div class="anime-title">
                <span style="
                    background: linear-gradient(90deg, ${anime.color}, #ffffff);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                ">${anime.title}</span>
                <div style="
                    font-size: 0.9rem;
                    color: #aaa;
                    margin-top: 5px;
                    font-weight: normal;
                ">${anime.description}</div>
            </div>
        `;
        
        // Add to grid
        animeGrid.appendChild(card);
    });
}

// Load real images function
function addRealImages() {
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
            }
        };
        
        img.onerror = function() {
            // Image doesn't exist, keep the beautiful gradient
            console.log(`✗ No image for: ${animeId} (using gradient instead)`);
        };
        
        img.src = imageUrl;
    });
}

// Sweeping character with GIF
function setupSweeper() {
    const sweeper = document.querySelector('.sweeper');
    const sweeperText = document.querySelector('.sweeper-text');
    
    const texts = [
        "أنا أنظف هنا! ✨",
        "الموقع نظيف جداً! 🎉",
        "هل تريد المساعدة؟ 🤔",
        "تعلم الإنجليزية ممتع! 📚",
        "شاهد الأنمي وتعلم! 🎬",
        "جرب النقر على الأنمي! 👆",
        "ألوان جميلة، أليس كذلك؟ 🌈",
        "استمتع بالتجربة! 😊"
    ];
    
    if (sweeper && sweeperText) {
        sweeper.addEventListener('click', function() {
            const randomText = texts[Math.floor(Math.random() * texts.length)];
            sweeperText.textContent = randomText;
            
            // Add bounce effect
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
        
        // Auto-change sweeper text every 10 seconds
        setInterval(() => {
            const randomText = texts[Math.floor(Math.random() * texts.length)];
            sweeperText.textContent = randomText;
        }, 10000);
    }
}

// ============================================
// MUSIC PLAYER FUNCTIONALITY
// ============================================

function setupMusicPlayer() {
    // Audio element and player elements
    const audio = document.getElementById('background-music');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const muteBtn = document.getElementById('mute-btn');
    const volumeSlider = document.getElementById('volume-slider');
    const volumeText = document.querySelector('.volume-text');
    const trackName = document.getElementById('track-name');
    const playerGif = document.getElementById('player-gif');
    
    // Set initial volume to 30%
    audio.volume = 0.3;
    volumeSlider.value = 30;
    volumeText.textContent = '30%';
    
    // Auto-play with user interaction
    let hasInteracted = false;
    
    document.addEventListener('click', function() {
        if (!hasInteracted) {
            audio.play().catch(e => console.log("Auto-play was prevented"));
            hasInteracted = true;
            updatePlayerUI();
        }
    }, { once: true });
    
    // Play button
    playBtn.addEventListener('click', function() {
        audio.play();
        updatePlayerUI();
        this.classList.add('active');
        pauseBtn.classList.remove('active');
    });
    
    // Pause button
    pauseBtn.addEventListener('click', function() {
        audio.pause();
        updatePlayerUI();
        this.classList.add('active');
        playBtn.classList.remove('active');
    });
    
    // Mute button
    muteBtn.addEventListener('click', function() {
        audio.muted = !audio.muted;
        updatePlayerUI();
        this.classList.toggle('active', audio.muted);
    });
    
    // Volume slider
    volumeSlider.addEventListener('input', function() {
        const volume = parseInt(this.value) / 100;
        audio.volume = volume;
        volumeText.textContent = `${this.value}%`;
        updatePlayerUI();
    });
    
    // Update player UI based on audio state
    function updatePlayerUI() {
        // Update mute button icon
        muteBtn.innerHTML = audio.muted ? 
            '<i class="fas fa-volume-mute"></i>' : 
            '<i class="fas fa-volume-up"></i>';
        
        // Update player GIF based on playback state
        updatePlayerGif();
        
        // Update button states
        playBtn.classList.toggle('active', !audio.paused);
        pauseBtn.classList.toggle('active', audio.paused);
        muteBtn.classList.toggle('active', audio.muted);
    }
    
    // Update player GIF based on anime page
    function updatePlayerGif() {
        const path = window.location.pathname;
        let animeGif = 'player-default.gif';
        
        // Determine which anime page we're on
        if (path.includes('dragon-ball')) animeGif = 'dragon-ball.gif';
        else if (path.includes('bleach')) animeGif = 'bleach.gif';
        else if (path.includes('death-note')) animeGif = 'death-note.gif';
        else if (path.includes('attack-on-titan')) animeGif = 'attack-on-titan.gif';
        else if (path.includes('detective-conan')) animeGif = 'detective-conan.gif';
        else if (path.includes('naruto')) animeGif = 'naruto.gif';
        else if (path.includes('one-piece')) animeGif = 'one-piece.gif';
        else if (path.includes('hunter-x-hunter')) animeGif = 'hunter-x-hunter.gif';
        else if (path.includes('steins-gate')) animeGif = 'steins-gate.gif';
        
        // Update track name
        trackName.textContent = getTrackName(animeGif);
        
        // Update GIF
        playerGif.style.backgroundImage = `url('audio/${animeGif}')`;
        
        // Add pulse animation if playing
        if (!audio.paused && !audio.muted) {
            playerGif.style.animation = 'pulse 1s ease-in-out infinite';
        } else {
            playerGif.style.animation = 'none';
        }
    }
    
    // Get track name based on anime
    function getTrackName(gifName) {
        const trackNames = {
            'dragon-ball.gif': 'Dragon Ball Theme',
            'bleach.gif': 'Bleach OST',
            'death-note.gif': 'Death Note Theme',
            'attack-on-titan.gif': 'Attack on Titan OST',
            'detective-conan.gif': 'Detective Conan Theme',
            'naruto.gif': 'Naruto Shippuden',
            'one-piece.gif': 'One Piece Opening',
            'hunter-x-hunter.gif': 'Hunter x Hunter OST',
            'steins-gate.gif': 'Steins;Gate Theme',
            'player-default.gif': 'روق يا عزيزي'
        };
        return trackNames[gifName] || 'Anime Music';
    }
    
    // Auto-play when page loads (with user interaction)
    document.addEventListener('click', function initAudio() {
        if (audio.paused) {
            audio.play().catch(e => console.log("Audio play prevented"));
        }
        document.removeEventListener('click', initAudio);
    });
    
    // Initialize player UI
    updatePlayerUI();
}

// Add pulse animation for player GIF
const musicPlayerStyle = document.createElement('style');
musicPlayerStyle.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;
document.head.appendChild(musicPlayerStyle);

// Initialize when page loads
// In your existing DOMContentLoaded function, add:
document.addEventListener('DOMContentLoaded', function() {
    createAnimeCards();
    addRealImages();
    setupSweeper();
    setupMusicPlayer();  // <-- ADD THIS LINE
    
    // ... rest of your existing code ...
});
document.addEventListener('DOMContentLoaded', function() {
    createAnimeCards();
    addRealImages();
    setupSweeper();
    
    // Add click effect to cards
    const cards = document.querySelectorAll('.anime-card');
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size/2;
            const y = e.clientY - rect.top - size/2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(0, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                top: ${y}px;
                left: ${x}px;
                pointer-events: none;
                z-index: 1;
            `;
            
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);