// 🌙 Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  toggleBtn.innerHTML = '<i class="bx bx-sun"></i>';
} else {
  toggleBtn.innerHTML = '<i class="bx bx-moon"></i>';
}

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    toggleBtn.innerHTML = '<i class="bx bx-sun"></i>';
    localStorage.setItem("theme", "light");
  } else {
    toggleBtn.innerHTML = '<i class="bx bx-moon"></i>';
    localStorage.setItem("theme", "dark");
  }
});

// 🍔 Mobile Menu Toggle
const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");

  if (navbar.classList.contains("active")) {
    menuIcon.innerHTML = '<i class="bx bx-x"></i>';
  } else {
    menuIcon.innerHTML = '<i class="bx bx-menu"></i>';
  }
});

// Close menu when clicking a link
document.querySelectorAll("#navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuIcon.innerHTML = '<i class="bx bx-menu"></i>';
  });
});

// 🔥 Highlight Active Nav Link on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; 
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ===== SCROLL REVEAL EFFECT =====
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
});
