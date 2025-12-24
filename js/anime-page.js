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