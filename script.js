// Smooth scroll for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});

// Contact form alert
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    form.reset();
});

// Dark/Light mode toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Animate skill bars on scroll
window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.progress');
    const triggerBottom = window.innerHeight * 0.8;

    skills.forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;
        if(skillTop < triggerBottom){
            skill.style.width = skill.style.width;
        }
    });
});
