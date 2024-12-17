
  let isArabic = false;

  function toggleLanguage() {
    const toggleCircle = document.querySelector('.toggle-circle');
    const toggle = document.getElementById('languageToggle');
  
    // Toggle the position of the circle
    if (isArabic) {
      toggleCircle.style.transform = 'translateX(0)'; // Move circle back to left
      isArabic = false;
      console.log('Language switched to French (FR)');
    } else {
      toggleCircle.style.transform = 'translateX(60px)'; // Move circle to the right
      isArabic = true;
      console.log('Language switched to Arabic (AR)');
    }
  }



  let slideIndex = 0;
  showSlides();

  function showSlides() {
      const slides = document.querySelectorAll(".slides");
      const dots = document.querySelectorAll(".dot");

      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }

      slideIndex++;
      if (slideIndex > slides.length) {
          slideIndex = 1;
      }

      for (let i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }

      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      setTimeout(showSlides, 3000); // Change slide every 3 seconds
  }

  function changeSlide(n) {
      slideIndex += n - 1;
      showSlides();
  }

  function setCurrentSlide(n) {
      slideIndex = n - 1;
      showSlides();
  }
    