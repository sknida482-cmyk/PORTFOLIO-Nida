const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".navbar nav");


// Mobile menu

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});


// Close menu after clicking a link

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });

});


// Simple scroll reveal

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

      }

    });

  },
  {
    threshold: 0.1
  }
);


sections.forEach(section => {

  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "0.7s ease";

  observer.observe(section);

});