// script.js

// Scroll-to-Top Button
window.onscroll = function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Accordion Toggle
function toggleAccordion(element) {
    const content = element.nextElementSibling;
    if (content.style.display === 'block') {
        content.style.display = 'none';
        element.querySelector("span").innerHTML = "+";
    } else {
        content.style.display = 'block';
        element.querySelector("span").innerHTML = "-";
    }
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Load Theme on Page Load
window.onload = function() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
};
