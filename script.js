function animateYear() {
    const yearEl = document.getElementById('year-counter');
    let startYear = 0;
    const endYear = 1987;
    const duration = 2000; 
    const increment = endYear / (duration / 16);

    function updateCount() {
        startYear += increment;
        if (startYear < endYear) {
            yearEl.innerText = Math.floor(startYear);
            requestAnimationFrame(updateCount);
        } else {
            yearEl.innerText = endYear;
        }
    }

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            requestAnimationFrame(updateCount);
            observer.disconnect();
        }
    });
    observer.observe(yearEl);
}

window.addEventListener('DOMContentLoaded', () => {
    animateYear();
    
    const reveal = { distance: '40px', duration: 1000, easing: 'ease-out', origin: 'bottom' };
    
    ScrollReveal().reveal('.massive-title', reveal);
    ScrollReveal().reveal('.service-item', { ...reveal, interval: 150 });
    ScrollReveal().reveal('.job-card', { ...reveal, interval: 100 });
    ScrollReveal().reveal('.stat-box', { ...reveal, origin: 'right' });
});
