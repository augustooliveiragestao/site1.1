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
    requestAnimationFrame(updateCount);
}

window.addEventListener('DOMContentLoaded', () => {
    animateYear();
    
    const reveal = { distance: '40px', duration: 1000, easing: 'ease-out', origin: 'bottom' };
    
    ScrollReveal().reveal('.massive-title', reveal);
    ScrollReveal().reveal('.service-item', { ...reveal, interval: 150 });
    ScrollReveal().reveal('.job-card', { ...reveal, interval: 100 });
});
