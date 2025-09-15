const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  toggleBtn.innerHTML = '<i class="bx bx-sun"></i>';
} else {
  toggleBtn.innerHTML = '<i class="bx bx-moon"></i>';
}

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

document.querySelectorAll("#navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuIcon.innerHTML = '<i class="bx bx-menu"></i>';
  });
});

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

let testimonials = document.querySelectorAll(".testimonial");
let currentIndex = 0;

function showNextTestimonial() {
  testimonials[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % testimonials.length;
  testimonials[currentIndex].classList.add("active");
}

setInterval(showNextTestimonial, 5000);

const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const speed = 50; 
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 50);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

// FAQ Accordion
// document.querySelectorAll('.faq-item').forEach(item => {
//   item.addEventListener('click', () => {
//     item.classList.toggle('active');
//   });
// });

// ===== FAQ Accordion =====
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ===== Scroll Animations (Fade In) =====
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
