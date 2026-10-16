document.addEventListener('DOMContentLoaded', () => {

  'use strict';



  
  // --- Element Selectors ---

  const themeToggleBtn = document.getElementById('themeToggle');

  const mobileToggleBtn = document.getElementById('mobileToggle');

  const navMenu = document.getElementById('navMenu');

  const navLinks = document.querySelectorAll('.nav-link');

  const contactForm = document.getElementById('contactForm');

  const formFeedback = document.getElementById('formFeedback');



  // Avatar Switcher Selectors

  const profileImage = document.getElementById('profileImage');

  const btnAvatarPro = document.getElementById('btnAvatarPro');

  const btnAvatarCasual = document.getElementById('btnAvatarCasual');



  /**

   * --------------------------------------------------------------------------

   * 2. Mandatory Feature: Interactive Theme Switcher

   * Complete Event Lifecycle:

   * Action (Click) -> Event ('click') -> Callback -> DOM/CSS Mutation

   * --------------------------------------------------------------------------

   */

  if (themeToggleBtn) {

    const savedTheme = localStorage.getItem('portfolio-theme');

    if (savedTheme === 'light') {

      document.body.classList.remove('dark-theme');

      document.body.classList.add('light-theme');

    }



    themeToggleBtn.addEventListener('click', () => {

      const isLight = document.body.classList.toggle('light-theme');

      document.body.classList.toggle('dark-theme', !isLight);

      const activeTheme = isLight ? 'light' : 'dark';

      localStorage.setItem('portfolio-theme', activeTheme);

      console.log(`[Event Lifecycle - Theme] Action: Click -> Event: 'click' -> Callback: ThemeHandler -> Mutation: Body class changed to ${activeTheme}-theme`);

    });

  }



  /**

   * --------------------------------------------------------------------------

   * 3. Dynamic Profile Photo Switcher

   * Updates element.src and element.alt dynamically without page reload.

   * --------------------------------------------------------------------------

   */

  const avatarModes = {

    pro: {

      src: 'assets/avatar-professional.svg',

      alt: 'Rozon Momani - Professional Developer Profile Photo'

    },

    casual: {

      src: 'assets/avatar-casual.svg',

      alt: 'Rozon Momani - Creative Casual Developer Profile Photo'

    }

  };



  let currentAvatarMode = 'pro';



  function switchProfilePhoto(mode) {

    if (!profileImage || !avatarModes[mode] || currentAvatarMode === mode) {

      return;

    }



    // 1. Smooth fade/scale-out transition

    profileImage.classList.add('is-switching');



    setTimeout(() => {

      // 2. Direct DOM mutation of .src and .alt

      profileImage.src = avatarModes[mode].src;

      profileImage.alt = avatarModes[mode].alt;

      currentAvatarMode = mode;



      // 3. Update button active states

      if (mode === 'pro') {

        btnAvatarPro.classList.add('active');

        btnAvatarCasual.classList.remove('active');

      } else {

        btnAvatarCasual.classList.add('active');

        btnAvatarPro.classList.remove('active');

      }



      profileImage.onload = () => {

        profileImage.classList.remove('is-switching');

      };

      setTimeout(() => {

        profileImage.classList.remove('is-switching');

      }, 50);



      console.log(`[Event Lifecycle - Avatar] Action: Click -> Event: 'click' -> Callback: switchProfilePhoto -> Mutation: src="${profileImage.src}" (No page reload)`);

    }, 200);

  }



  if (btnAvatarPro && btnAvatarCasual) {

    btnAvatarPro.addEventListener('click', (e) => {

      e.preventDefault();

      switchProfilePhoto('pro');

    });



    btnAvatarCasual.addEventListener('click', (e) => {

      e.preventDefault();

      switchProfilePhoto('casual');

    });

  }



  /**

   * --------------------------------------------------------------------------

   * 4. Mobile Menu Navigation

   * --------------------------------------------------------------------------

   */

  if (mobileToggleBtn && navMenu) {

    mobileToggleBtn.addEventListener('click', () => {

      const isExpanded = navMenu.classList.toggle('active');

      mobileToggleBtn.setAttribute('aria-expanded', isExpanded.toString());

    });



    navLinks.forEach((link) => {

      link.addEventListener('click', () => {

        navMenu.classList.remove('active');

        mobileToggleBtn.setAttribute('aria-expanded', 'false');

      });

    });

  }



  /**

   * --------------------------------------------------------------------------

   * 5. Interactive Contact Form with Validation & Direct WhatsApp / Email

   * --------------------------------------------------------------------------

   */

  if (contactForm) {

    contactForm.addEventListener('submit', (e) => {

      e.preventDefault();



      const nameInput = document.getElementById('contactName');

      const emailInput = document.getElementById('contactEmail');

      const subjectInput = document.getElementById('contactSubject');

      const messageInput = document.getElementById('contactMessage');



      const nameError = document.getElementById('nameError');

      const emailError = document.getElementById('emailError');

      const subjectError = document.getElementById('subjectError');

      const messageError = document.getElementById('messageError');



      [nameError, emailError, subjectError, messageError].forEach(err => {

        if (err) err.textContent = '';

      });

      formFeedback.className = 'form-feedback';

      formFeedback.textContent = '';



      let isValid = true;
      if (!nameInput.value.trim()) {

        nameError.textContent = 'Please enter your name.';

        isValid = false;

      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {

        emailError.textContent = 'Please provide a valid email address.';

        isValid = false;

      }

      if (!subjectInput.value.trim()) {

        subjectError.textContent = 'Please provide a subject.';

        isValid = false;

      }

      if (!messageInput.value.trim()) {

        messageError.textContent = 'Please write your message.';

        isValid = false;

      }



      if (!isValid) return;



      const userName = encodeURIComponent(nameInput.value.trim());

      const userSubject = encodeURIComponent(subjectInput.value.trim());

      const userMessage = encodeURIComponent(messageInput.value.trim());



      formFeedback.className = 'form-feedback success';

      formFeedback.innerHTML = `

        <strong>Thank you, ${nameInput.value.trim()}!</strong> Your message has been prepared.<br>

        Opening your direct communication channel now...

      `;



      // Open an email with the form details

      const mailtoUrl = `mailto:r0z0nmomani19@gmail.com?subject=${userSubject}&body=From:%20${userName}%0A%0A${userMessage}`;

      setTimeout(() => {

        window.location.href = mailtoUrl;

      }, 1000);



      contactForm.reset();

    });

  }



  // Active navigation link highlight during scroll

  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {

    const scrollY = window.pageYOffset;

    sections.forEach((current) => {

      const sectionHeight = current.offsetHeight;

      const sectionTop = current.offsetTop - 120;

      const sectionId = current.getAttribute('id');

      const matchingLink = document.querySelector(`.nav-links a[href*='${sectionId}']`);



      if (matchingLink) {

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

          matchingLink.classList.add('active-link');

        } else {

          matchingLink.classList.remove('active-link');

        }

      }

    });

  });

});
