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

    header.classList.toggle('*sticky', window.scrollY> 100);

      /* ==============  sticky navbar ================= */
    menuIcon.classList.remove('bx-x');
     navbar.classList.remove('active');
 };
/* ============== square-xmark Scrollreveal================= */

ScrollReveal({ 
  //  reset: true,
    distance: '80px',
     duration: 2000,
    delay: 200
   
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .services-container, .portfplio-box, .contact form', { origin: 'bottom' });
  rollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
   rollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
 
  /* ============== typed js================= */
  const typed = new typed('.multiple-text',{
  strings:['Frontend DEveloper', 'YouTuber', 'Bloger'],
  typeSpeed: 100,
 backSpeed: 100,
  backDelay: 1000,
  loop: true
  
 });

