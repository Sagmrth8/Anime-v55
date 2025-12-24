// Anime Data - This will be used to generate the anime cards
const animeList = [
    {
        id: "dragon-ball",
        title: "Dragon Ball",
        description: "مغامرات غوكو في البحث عن كرات التنين",
        page: "pages/dragon-ball.html",
        floatIcon: "icons/kamehameha.png", // You'll add this PNG later
        floatPosition: {top: "20px", right: "10px"},
        color: "#FF9800"
    },
    {
        id: "bleach",
        title: "Bleach",
        description: "إيتشيغو كوروساكي وحارسة الموت",
        page: "pages/bleach.html",
        floatIcon: "icons/zanpakuto.png",
        floatPosition: {top: "15px", left: "10px"},
        color: "#4A90E2"
    },
    {
        id: "death-note",
        title: "Death Note",
        description: "مذكرة الموت التي تمكنك من قتل أي شخص",
        page: "pages/death-note.html",
        floatIcon: "icons/death-note.png",
        floatPosition: {top: "30px", left: "50px"},
        color: "#2C3E50"
    },
    {
        id: "attack-on-titan",
        title: "Attack on Titan",
        description: "البشرية في صراع ضد العمالقة",
        page: "pages/attack-on-titan.html",
        floatIcon: "icons/survey-corps.png",
        floatPosition: {top: "10px", right: "20px"},
        color: "#1ABC9C"
    },
    {
        id: "detective-conan",
        title: "Detective Conan",
        description: "المحقق الشاب الذي تحول إلى طفل",
        page: "pages/detective-conan.html",
        floatIcon: "icons/conan-glasses.png",
        floatPosition: {top: "40px", right: "30px"},
        color: "#3498DB"
    },
    {
        id: "naruto",
        title: "Naruto",
        description: "قصة النينجا ناروتو أوزوماكي",
        page: "pages/naruto.html",
        floatIcon: "icons/ninja-star.png",
        floatPosition: {top: "25px", left: "25px"},
        color: "#FFB74D"
    },
    {
        id: "one-piece",
        title: "One Piece",
        description: "لوفي وصيد كنز الون بيس",
        page: "pages/one-piece.html",
        floatIcon: "icons/straw-hat.png",
        floatPosition: {top: "15px", right: "40px"},
        color: "#FF5722"
    },
    {
        id: "hunter-x-hunter",
        title: "Hunter X Hunter",
        description: "مغامرات غون في امتحان الصياد",
        page: "pages/hunter-x-hunter.html",
        floatIcon: "icons/hunter-license.png",
        floatPosition: {top: "35px", left: "15px"},
        color: "#9C27B0"
    },
    {
        id: "steins-gate",
        title: "Steins;Gate",
        description: "السفر عبر الزمن وعواقبه",
        page: "pages/steins-gate.html",
        floatIcon: "icons/divergence-meter.png",
        floatPosition: {top: "20px", right: "25px"},
        color: "#673AB7"
    }
];

// Function to create anime cards
function createAnimeCards() {
    const animeGrid = document.getElementById('animeGrid');
    
    animeList.forEach(anime => {
        // Create card element
        const card = document.createElement('div');
        card.className = 'anime-card';
        card.id = anime.id;
        
        // Set up click event to navigate to anime page
        card.addEventListener('click', () => {
            window.location.href = anime.page;
        });
        
        // Card content
        card.innerHTML = `
            <div class="poster-container">
                <div class="poster" style="background: linear-gradient(135deg, ${anime.color}40, #1a1630);"></div>
                <div class="float-icon" style="background-image: url('${anime.floatIcon}'); ${anime.floatPosition.top ? `top: ${anime.floatPosition.top};` : ''} ${anime.floatPosition.right ? `right: ${anime.floatPosition.right};` : ''} ${anime.floatPosition.left ? `left: ${anime.floatPosition.left};` : ''} ${anime.floatPosition.bottom ? `bottom: ${anime.floatPosition.bottom};` : ''}"></div>
            </div>
            <div class="anime-title">${anime.title}</div>
        `;
        
        // Add to grid
        animeGrid.appendChild(card);
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    createAnimeCards();
    
    // Add click effect to cards
    const cards = document.querySelectorAll('.anime-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // Make sweeping character interactive
    const sweeper = document.querySelector('.sweeper');
    sweeper.addEventListener('click', function() {
        const texts = [
            "أنا أنظف هنا!",
            "الموقع نظيف جداً!",
            "هل تريد المساعدة؟",
            "تعلم الإنجليزية ممتع!",
            "شاهد الأنمي وتعلم!"
        ];
        const randomText = texts[Math.floor(Math.random() * texts.length)];
        this.querySelector('.sweeper-text').textContent = randomText;
        
        // Add bounce effect
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'sweepMove 20s linear infinite';
        }, 10);
    });
});