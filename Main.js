 // Toggle menu
const menuBtn = document.getElementById("hamburgerMenu");
const overlayMenu = document.getElementById("overlayMenu");

menuBtn.addEventListener("click", () => {
  overlayMenu.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".overlay-menu a").forEach(link => {
  link.addEventListener("click", () => {
    overlayMenu.classList.remove("active");
  });
});

 
 const tabs = document.querySelectorAll('.tab');
      const contents = document.querySelectorAll('.tab-content');

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          contents.forEach(c => c.classList.remove('active'));

          tab.classList.add('active');
          document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
        });
      });

      
