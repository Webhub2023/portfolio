 /* ==============  sticky navbar ================= */
 let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle classes on click
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');  // Toggle the 'bx-x' class to change icon
  navbar.classList.toggle('active');  // Toggle the 'active' class to show/hide the navbar
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 130;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
             navLinks.forEach(Links => {
                Links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
             });
        };

   });  
     /* ==============  sticky navbar ================= */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

      /* ==============  remove toggle icon navbar when click navbar link (mobile) ================= */
    menuIcon.classList.remove('bx-x');
     navbar.classList.remove('active');
 };

/* ============== ScrollReveal ================= */
ScrollReveal({ 
  //  reset: true,
    distance: '80px',
     duration: 2000,
    delay: 200
   
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .services-container, .portfplio-box, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
  ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
 
  /* ============== typed js================= */
  const typed = new Typed('.multiple-text',{
  strings:['Frontend Developer', 'YouTuber', 'Blogger'],
  typeSpeed: 100,
 backSpeed: 100,
  backDelay: 1000,
  loop: true
  
 });

/* ============== Lazy Loading for Images ================= */
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
});

/* ============== Performance: Debounced Scroll ================= */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Replace the scroll event with debounced version for better performance
window.removeEventListener('scroll', window.onscroll);
window.addEventListener('scroll', debounce(window.onscroll, 10));
