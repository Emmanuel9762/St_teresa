// Mobile Navigation Toggle
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});

// FAQ Toggle
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    question.classList.toggle("active");
    const answer = question.nextElementSibling;

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// Form Submission
const admissionForm = document.getElementById("admissionForm");

admissionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(
    "Thank you for your application! Our admissions team will review your submission and contact you within 5 business days."
  );
  admissionForm.reset();
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

// Initialize all FAQs to closed state
document.addEventListener("DOMContentLoaded", () => {
  const answers = document.querySelectorAll(".faq-answer");
  answers.forEach((answer) => {
    answer.style.maxHeight = null;
  });
});
