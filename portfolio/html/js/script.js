 // Mobile Menu Toggle
 const mobileMenuBtn = document.getElementById('mobileMenuBtn');
 const navLinks = document.getElementById('navLinks');

 mobileMenuBtn.addEventListener('click', () => {
     navLinks.classList.toggle('active');
     mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
     mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
 });

 // Scroll Header
 window.addEventListener('scroll', () => {
     const header = document.getElementById('header');
     if (window.scrollY > 50) {
         header.classList.add('scrolled');
     } else {
         header.classList.remove('scrolled');
     }
 });

 // Smooth Scroll for Navigation Links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         navLinks.classList.remove('active');
         mobileMenuBtn.querySelector('i').classList.add('fa-bars');
         mobileMenuBtn.querySelector('i').classList.remove('fa-times');

         const targetId = this.getAttribute('href');
         const targetElement = document.querySelector(targetId);
         
         window.scrollTo({
             top: targetElement.offsetTop - 70,
             behavior: 'smooth'
         });
     });
 });

 // Form Submission (Prevent default for demo)
 const contactForm = document.getElementById('contactForm');
 if (contactForm) {
     contactForm.addEventListener('submit', (e) => {
         e.preventDefault();
         alert('Votre message a été envoyé avec succès !');
         contactForm.reset();
     });
 }