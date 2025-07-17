// Mobile Navigation Toggle
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});

// Gallery hover effect
const galleryItems = document.querySelectorAll(".gallery-item");
galleryItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.querySelector(".gallery-overlay").style.transform = "translateY(0)";
  });

  item.addEventListener("mouseleave", () => {
    item.querySelector(".gallery-overlay").style.transform = "translateY(100%)";
  });
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

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll("nav ul li a:not(:has(.dropdown)");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      mainNav.classList.remove("active");
    }
  });
});

// Calendar date highlighting
const calendarDates = document.querySelectorAll(".calendar-date");
calendarDates.forEach((date) => {
  date.addEventListener("click", () => {
    calendarDates.forEach((d) => d.classList.remove("selected"));
    date.classList.add("selected");
  });
});

// Today's date highlighting
const today = new Date().getDate();
calendarDates.forEach((date) => {
  if (parseInt(date.textContent) === today) {
    date.classList.add("today");
  }
});

// Form submission
const involvementForm = document.querySelector(".involved-form form");
involvementForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(
    "Thank you for your interest! Our community coordinator will contact you within 2 business days."
  );
  involvementForm.reset();
});
