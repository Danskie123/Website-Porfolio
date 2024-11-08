//Hamburger icon
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");

    // Toggle visibility and animation
    if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");

        // Delay hiding to allow animation to finish
        setTimeout(() => {
            navLinks.style.display = "none";
        }, 300); // Match the CSS transition duration
    } else {
        navLinks.style.display = "flex"; // Set display before animation
        setTimeout(() => navLinks.classList.add("active"), 10); // Small delay to trigger animation
    }
}
//View Work button
const viewWorkButton = document.querySelector('.view-work');

viewWorkButton.addEventListener('click', () => {
  const projectsSection = document.querySelector('.projects');
  projectsSection.scrollIntoView({ behavior: 'smooth' });
}); 

//Contact link
const contactLink = document.querySelector('.contact');

// Add an event listener for when the link is clicked
contactLink.addEventListener('click', function() {
  // Scroll to the footer element
  const footer = document.querySelector('.footer');
  footer.scrollIntoView({ behavior: 'smooth' }); 
});
// Wait for the DOM and AOS to fully load
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        easing: 'ease', // Easing function
        once: true // Whether animation should happen only once
    });
});

// script.js

document.querySelectorAll('.resume').forEach(link => {
    link.addEventListener('click', () => {
      window.open('./Files/Professional Resume - Jeliel S. Go.pdf', '_blank');
    });
  });
  
  document.querySelector('.resume-btn').addEventListener('click', () => {
    window.open('./Files/Professional Resume - Jeliel S. Go.pdf', '_blank');
  });

// Get the "About" link element
const aboutLink = document.querySelector('.about');

// Add an event listener to the "About" link
aboutLink.addEventListener('click', function() {
  // Redirect the user to about.html
  window.location.href = './Pages/about.html';
});

document.addEventListener('DOMContentLoaded', function() {
  const facebookIcon = document.querySelector('.facebook');
  const linkedinIcon = document.querySelector('.linkin');
  const instagramIcon = document.querySelector('.instagram');

  facebookIcon.addEventListener('click', function() {
    window.open('https://www.facebook.com/jeliel.go/', '_blank');
  });

  linkedinIcon.addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/jeliel-go-8b760932a/', '_blank');
  });

  instagramIcon.addEventListener('click', function() {
    window.open('https://www.instagram.com/danskie123456/', '_blank');
  });
});

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // Determine the project URL based on the image source (replace with actual URLs)
    const imageUrl = card.querySelector('img').src;
    let projectUrl;
    if (imageUrl.includes('line-follower.jpg')) {
      projectUrl = './Pages/projects/project1.html'; 
    } else if (imageUrl.includes('mini-cooler.jpg')) {
      projectUrl = './Pages/projects/project2.html';
    } else if (imageUrl.includes('Asclepius.png')) {
      projectUrl = './Pages/projects/project3.html'; // Replace with actual project URLs
    } else {
      // Handle cases where the image doesn't match any known projects
      console.error('Unknown project image:', imageUrl); 
      return; // Exit the function
    }

    window.location.href = projectUrl;
  });
});
