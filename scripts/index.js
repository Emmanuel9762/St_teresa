// Mobile Navigation Toggle
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});

// Accordion Functionality
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");
    const content = header.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// Modal Functionality
const virtualTourBtn = document.getElementById("virtualTourBtn");
const virtualTourModal = document.getElementById("virtualTourModal");
const closeModal = document.getElementById("closeModal");

virtualTourBtn.addEventListener("click", (e) => {
  e.preventDefault();
  virtualTourModal.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeModal.addEventListener("click", () => {
  virtualTourModal.classList.remove("active");
  document.body.style.overflow = "";
});

// Close modal when clicking outside
virtualTourModal.addEventListener("click", (e) => {
  if (e.target === virtualTourModal) {
    virtualTourModal.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// Dropdown menus for mobile
const dropdownParents = document.querySelectorAll("nav ul li:has(.dropdown)");

dropdownParents.forEach((parent) => {
  const dropdownToggle = parent.querySelector("a");

  dropdownToggle.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const dropdown = parent.querySelector(".dropdown");
      dropdown.classList.toggle("active");
    }
  });
});

// Animation on scroll for stats
const statCards = document.querySelectorAll(".stat-card");

const animateStats = () => {
  statCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("animate");
    }, 200 * index);
  });
};

// Animate chart bars
const animateCharts = () => {
  const chartFills = document.querySelectorAll(".chart-fill");

  chartFills.forEach((fill) => {
    const width = fill.getAttribute("data-width");
    fill.style.width = width + "%";
  });
};

// Initialize animations when in viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateStats();
        animateCharts();
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

observer.observe(document.querySelector(".stats-section"));
observer.observe(document.querySelector(".academic-section"));

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll("nav ul li a:not(:has(.dropdown)");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      mainNav.classList.remove("active");
    }
  });
});
