// cookie consent functionality on the website:
    document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptButton = document.querySelector('.accept-cookies');
    const rejectButton = document.querySelector('.reject-cookies');
    const learnMoreLink = document.getElementById('learn-more-link');
    const learnMoreContent = document.getElementById('learn-more-content');
  
    // Hide preloader after page load
    window.addEventListener('load', function() {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.style.display = 'none';
      }
      cookieConsent.style.display = 'block';
    });
  
    // Check if localStorage is available
    function localStorageAvailable() {
      try {
        const test = '__localStorage_test__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
      } catch (e) {
        return false;
      }
    }
  
    if (localStorageAvailable()) {
      // Check if the user has already made a choice
      if (localStorage.getItem('cookieConsent')) {
        cookieConsent.style.display = 'none';
      }
  
      // Function to handle cookie consent choice
      function handleConsent(choice) {
        localStorage.setItem('cookieConsent', choice);
        cookieConsent.style.display = 'none';
      }
  
      // Add event listeners to buttons
      acceptButton.addEventListener('click', function() {
        handleConsent('accepted');
      });
  
      rejectButton.addEventListener('click', function() {
        handleConsent('rejected');
      });
    } else {
      // Hide consent if localStorage is not available
      cookieConsent.style.display = 'none';
    }
  
    // Add event listener to "Learn More" link
    learnMoreLink.addEventListener('click', function(event) {
      event.preventDefault();
      learnMoreContent.style.display = 'block';
      learnMoreLink.style.display = 'none';
    });
  });




// Function to handle scroll events and toggle header visibility based on scroll direction.
  let lastScrollTop = 0;

  function onScroll() {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      const header = document.querySelector('.header');

      if (currentScroll > lastScrollTop) {
          header.classList.add('hidden');
      } else {
          header.classList.remove('hidden');
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  }

  window.addEventListener("scroll", onScroll);




// Functions for validating book title, author, and price inputs,
// displaying error messages, and managing form submission button state.


  function validateBookTitle() {
    const bookTitleInput = document.getElementById('bookTitle');
    const bookTitleValue = bookTitleInput.value.trim();
    let isValid = true;

    for (let i = 0; i < bookTitleValue.length; i++) {
      const char = bookTitleValue.charCodeAt(i);
      if (!((char >= 65 && char <= 90) || (char >= 97 && char <= 122) || char === 32)) {
        isValid = false;
        break;
      }
    }

    if (bookTitleValue.length === 0) {
      isValid = false;
    }
    const bookTitleError = document.getElementById('bookTitle-error');
    if (!isValid) {
      bookTitleError.textContent = "Please enter a valid title (alphabets and spaces only).";
      bookTitleInput.style.borderColor = 'red';
    } else {
      bookTitleError.textContent = "";
      bookTitleInput.style.borderColor = '';
    }

    return isValid;
  }

  function validateBookAuthor() {
    const bookAuthorInput = document.getElementById('bookAuthor');
    const bookAuthorValue = bookAuthorInput.value.trim();
    let isValid = true;

    for (let i = 0; i < bookAuthorValue.length; i++) {
      const char = bookAuthorValue.charCodeAt(i);
      if (!((char >= 65 && char <= 90) || (char >= 97 && char <= 122) || char === 32)) {
        isValid = false;
        break;
      }
    }

    if (bookAuthorValue.length === 0) {
      isValid = false;
    }

    const bookAuthorError = document.getElementById('bookAuthor-error');
    if (!isValid) {
      bookAuthorError.textContent = "Please enter a valid author name (alphabets and spaces only).";
      bookAuthorInput.style.borderColor = 'red';
    } else {
      bookAuthorError.textContent = "";
      bookAuthorInput.style.borderColor = '';
    }

    return isValid;
  }

  function validatePriceInput() {
    const yourPriceInput = document.getElementById('yourPrice');
    const yourPriceValue = parseFloat(yourPriceInput.value.trim());
    let isValid = true;

    if (isNaN(yourPriceValue) || yourPriceValue < 1) {
      isValid = false;
      document.getElementById('yourPrice-error').textContent = "Please enter a valid number greater than or equal to 1.";
      yourPriceInput.style.borderColor = 'red';
    } else {
      document.getElementById('yourPrice-error').textContent = "";
      yourPriceInput.style.borderColor = '';
    }

    return isValid;
  }

  function validateAndConnect() {
    const isTitleValid = validateBookTitle();
    const isAuthorValid = validateBookAuthor();
    const isPriceValid = validatePriceInput();

    if (isTitleValid && isAuthorValid && isPriceValid) {
      alert("Form submitted successfully!");
    } else {
      alert("Please correct the errors in the form before submitting.");
    }
  }

  function checkAllValidations() {
    const isTitleValid = validateBookTitle();
    const isAuthorValid = validateBookAuthor();
    const isPriceValid = validatePriceInput();

    const connectReaderBtn = document.getElementById('connectReaderBtn');
    if (isTitleValid && isAuthorValid && isPriceValid) {
      connectReaderBtn.disabled = false;
    } else {
      connectReaderBtn.disabled = true;
    }
  }

  document.getElementById('bookTitle').addEventListener('blur', function() {
    validateBookTitle();
    checkAllValidations();
  });

  document.getElementById('bookAuthor').addEventListener('blur', function() {
    validateBookAuthor();
    checkAllValidations();
  });

  document.getElementById('yourPrice').addEventListener('blur', function() {
    validatePriceInput();
    checkAllValidations();
  });






// Ensure the contact form message meets the minimum character requirement before submission.
   document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contact-form');
    var message = document.getElementById('message');

    form.addEventListener('submit', function(event) {
    if (message.value.length < 50) {
    alert("Message length can't be less than 50 characters.");
    event.preventDefault(); // Prevent the form from being submitted
  }});});



  // Get the modal elements
  var copyrightModal = document.getElementById("copyrightPolicyModal");
  var privacyModal = document.getElementById("privacyNoticeModal");

  // Get the link elements
  var copyrightLink = document.getElementById("copyrightPolicyLink");
  var privacyLink = document.getElementById("privacyNoticeLink");

  // Get the <span> elements that close the modals
  var closeCopyright = document.getElementById("closeCopyright");
  var closePrivacy = document.getElementById("closePrivacy");

  // When the user clicks the link, open the modal 
  copyrightLink.onclick = function() {
    copyrightModal.style.display = "block";
  }
  privacyLink.onclick = function() {
    privacyModal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  closeCopyright.onclick = function() {
    copyrightModal.style.display = "none";
  }
  closePrivacy.onclick = function() {
    privacyModal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == copyrightModal) {
      copyrightModal.style.display = "none";
    }
    if (event.target == privacyModal) {
      privacyModal.style.display = "none";
    }
  }




  document.addEventListener('DOMContentLoaded', (event) => {
    let subject_full= document.getElementById("subject-full");
    let subject_count= document.getElementById("subject-count");
    let subject= document.getElementById("subject");
    subject.addEventListener('input', (e)=>{
      let length= e.target.value.length;
      subject_count.innerText= `${length}/100`;
      if(length==100){
        subject_full.style.display= "block";
        }
        else{
          subject_full.style.display= "none";
          }
    })
    let message_count= document.getElementById("message-count");
    let message= document.getElementById("message");
    let message_full= document.getElementById("message-full");
    message.addEventListener('input', (e)=>{
      let length= e.target.value.length;
      message_count.innerText= `${length}/250`;
      if(length==250){
        message_full.style.display= "block";
      }
      else{
        message_full.style.display= "none";
      }
    })
  })
  
  document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

  
    var email = document.getElementById("email").value;

    document.getElementById("confirmationMessage").style.display = "block";


    document.getElementById("email").value = '';
});



//   function sendMail(){
    //         let params={
    //             name:document.getElementById('name').value,
    //             email:document.getElementById('email').value,
    //             subject:document.getElementById('subject').value,
    //             message:document.getElementById('message').value,
    //             subscribe:document.getElementById('newsletter-email').value
    //         }
    //         EmailJSResponseStatus.send("service_lktb68z","template_w79vd94",params,"o6kveYmOSDrs0l1Mg")
    //         .then(alert('Email sent successfully'))
    //       }


    // document.querySelector('subscribe-btn').addEventListener('submit', sendMail());
    // Function to toggle dark mode
    function toggleDarkMode() {
        const isDarkMode = isDarkModePreferred();
        setDarkModePreference(!isDarkMode);
        applyDarkModePreference();
      }
  
      // Function to apply dark mode preference
      function applyDarkModePreference() {
        const isDarkMode = isDarkModePreferred();
        if (isDarkMode) {
          document.body.classList.add('dark-mode');
          document.getElementById('theme-icon').src = './assets/images/icons8-sun.svg';
        } else {
          document.body.classList.remove('dark-mode');
          document.getElementById('theme-icon').src = './assets/images/moon_solid.svg';
        }
      }
  
      // Function to set dark mode preference
      document.addEventListener('DOMContentLoaded', () => {
        const currentTheme = localStorage.getItem('theme');
        const switchCheckbox = document.getElementById('switch'); // Define switchCheckbox here
        const starRating = document.querySelector('.star_rating');
        const thankYouMessage = document.querySelector(".thank_you_message");
        if (switchCheckbox) { // Check if switchCheckbox is not null
          function applyDarkModeStyles() {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            starRating.style.backgroundColor = '#2d2828';
            thankYouMessage.style.backgroundColor = '#2d2828';
          }
  
          function applyLightModeStyles() {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            starRating.style.backgroundColor = 'white';
            thankYouMessage.style.backgroundColor = 'white';
          }
  
          if (currentTheme) {
            if (currentTheme === 'dark-mode') {
              applyDarkModeStyles();
              switchCheckbox.checked = true;
            } else {
              applyLightModeStyles();
            }
          }
  
          switchCheckbox.addEventListener('change', () => {
            if (switchCheckbox.checked) {
              applyDarkModeStyles();
              localStorage.setItem('theme', 'dark-mode');
            } else {
              applyLightModeStyles();
              localStorage.setItem('theme', 'light-mode');
            }
          });
        } else {
          console.error("Switch checkbox not found!"); // Log an error if switchCheckbox is null
        }
      });




      document.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
  
        // Get the top position of each section on the page
        var homeSection = document.getElementById("home").offsetTop;
        var benefitsSection = document.getElementById("benefits").offsetTop;
        var genreSection = document.getElementById("genre").offsetTop;
        var chaptersSection = document.getElementById("chapters").offsetTop;
        var pricingSection = document.getElementById("pricing").offsetTop;
        var contactSection = document.getElementById("contact").offsetTop;
  
        // Check which section the user has scrolled to and add the active class accordingly
        if (scrollPosition < benefitsSection) {
          setActiveLink("home");
        } else if (scrollPosition >= benefitsSection && scrollPosition < genreSection) {
          setActiveLink("benefits");
        } else if (scrollPosition >= genreSection && scrollPosition < chaptersSection) {
          setActiveLink("genre");
        } else if (scrollPosition >= chaptersSection && scrollPosition < pricingSection) {
          setActiveLink("chapters");
        } else if (scrollPosition >= pricingSection && scrollPosition < contactSection) {
          setActiveLink("pricing");
        } else {
          setActiveLink("contact");
        }
      });
  
      function setActiveLink(sectionId) {
        // Remove active class from all navbar links
        var navbarLinks = document.querySelectorAll(".navbar-link");
        navbarLinks.forEach(function (link) {
          link.classList.remove("active");
        });
  
        // Add active class to the navbar link corresponding to the current section
        var activeLink = document.querySelector('a[href="#' + sectionId + '"]');
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
  
      const lenis = new Lenis({
        duration: 1.8,
        easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
      });
  
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
  
      requestAnimationFrame(raf);
      // JavaScript function to load more content when user scrolls to bottom
      function loadMoreContent() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var windowHeight = window.innerHeight;
        var documentHeight = document.documentElement.scrollHeight;
  
        // Check if user has scrolled to the bottom of the page
        if (scrollTop + windowHeight >= documentHeight) {
          // Make an AJAX request to fetch more content
          // Replace 'more-content-url' with the actual URL to fetch more content
          fetch('/index.html')
            .then(response => response.text())
            .then(data => {
              // Append the fetched content to the page
              document.getElementById('content-container').insertAdjacentHTML('beforeend', data);
            })
            .catch(error => console.error('Error fetching more content:', error));
        }
      }
  
      // Event listener to trigger loadMoreContent function when user scrolls
      window.addEventListener('scroll', loadMoreContent);

      document.addEventListener("DOMContentLoaded", function () {
        const backToTopButton = document.getElementById('back-to-top-container');
  
        function checkButtonVisibility() {
          if (window.innerWidth > 100 && window.scrollY > 100) {
            backToTopButton.style.display = 'block';
          } else {
            backToTopButton.style.display = 'none';
          }
        }
  
        window.addEventListener('scroll', checkButtonVisibility);
        window.addEventListener('resize', checkButtonVisibility);
  
        backToTopButton.addEventListener('click', function () {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
  
        checkButtonVisibility();
      });
  



      document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        var successMessage = document.getElementById("success-message");
        successMessage.style.display = "block";
        document.getElementById("contact-form").reset();
        setTimeout(function() {
          successMessage.style.display = "none";
        }, 3000);
      });