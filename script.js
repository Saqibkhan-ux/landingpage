// Simple form submission alert
const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    form.reset();
});
