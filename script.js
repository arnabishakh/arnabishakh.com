function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function toggleDarkMode() {
  const elements = document.querySelectorAll('body, a, nav, .nav-links, .logo, #hamburger-nav, .hamburger-icon span, .menu-links, section, #profile .section__text p, #profile .title, .about-containers, .about-details-container, .details-container, .arrow, .btn, .Skills-sub-title, .details-container.color-container, .contact-info-container');
  elements.forEach(element => {
    element.classList.toggle('dark-mode');
  });
}

// Add event listener for a dark mode toggle button
document.querySelector('#dark-mode-toggle').addEventListener('click', toggleDarkMode);

