document.addEventListener('DOMContentLoaded', function() {
    console.log(document.documentElement.clientWidth);
    if (document.documentElement.clientWidth <= '600'){
      console.log("Hi");
      const cvButton = document.getElementById('cvbutton');
      cvButton.innerHTML = '<i class="fas fa-download"></i>'
    }

    else if(document.documentElement.clientWidth > '600'){
      const cvButton = document.getElementById('cvbutton');
      cvButton.innerHTML = 'Download CV'

    }
});


document.addEventListener('DOMContentLoaded', function() {
const hamburgerBtn = document.getElementById('hamburger-btn');
const nav = document.querySelector('header nav');

hamburgerBtn.addEventListener('click', function() {
  nav.classList.toggle('active');
});
});

// Function to set the active class based on current section
function setActiveLink() {
// Get the current section of the page
const currentSection = window.location.hash;

// Remove active class from all links
document.querySelectorAll('header nav a').forEach(link => {
link.classList.remove('active');
});

// Add active class to the corresponding link
document.querySelector(`header nav a[href="${currentSection}"]`).classList.add('active');
}

// Call setActiveLink initially to set the active class based on page load
setActiveLink();

// Add event listener for hashchange event to update active link when hash changes
window.addEventListener('hashchange', setActiveLink);