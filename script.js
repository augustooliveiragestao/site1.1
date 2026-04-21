function animateYear() {
    const yearEl = document.getElementById('year-counter');
    let startYear = 0;
    const endYear = 1987;
    const duration = 2500; 
    const increment = endYear / (duration / 16);

    function updateCount() {
        startYear += increment;
        if (startYear < endYear) {
            yearEl.innerText = Math.floor(startYear);
            requestAnimationFrame(updateCount);
        } else {
            yearEl.innerText = endYear;
            yearEl.classList.add('year-boom');
        }
    }
    requestAnimationFrame(updateCount);
}

window.addEventListener('DOMContentLoaded', () => {
    animateYear();
    
    const reveal = { distance: '50px', duration: 1000, easing: 'cubic-bezier(0.5, 0, 0, 1)', origin: 'bottom' };
    
    ScrollReveal().reveal('.massive-title', reveal);
    ScrollReveal().reveal('.service-item', { ...reveal, interval: 200 });
    ScrollReveal().reveal('.stat-box', { ...reveal, origin: 'right' });
    ScrollReveal().reveal('.budget-card', reveal);
});