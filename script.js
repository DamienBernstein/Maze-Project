// Smooth scrolling to section on navigation click
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const section = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  
  // Add click event listener to "Go to App" button
  document.querySelector('.button').addEventListener('click', function () {
    // Perform actions when the button is clicked
    // For example, you can add code to track the click or perform a redirect
  });

  