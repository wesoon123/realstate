document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
  
    // Toggle dropdown menu on hamburger click
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("open");
      hamburger.classList.toggle("active");
    });
  
    // Close menu if clicking outside of it
    document.addEventListener("click", (event) => {
      if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove("open");
        hamburger.classList.remove("active");
      }
    });
  });
  