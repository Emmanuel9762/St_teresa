// Mobile Navigation Toggle
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});

// Curriculum Tabs
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    tabBtns.forEach((b) => b.classList.remove("active"));
    // Add active class to clicked button
    btn.classList.add("active");

    // Hide all tab contents
    tabContents.forEach((content) => content.classList.remove("active"));
    // Show the corresponding tab content
    const tabId = btn.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

// Resource Tabs
const resourceTabs = document.querySelectorAll(".resource-tab");

resourceTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs
    resourceTabs.forEach((t) => t.classList.remove("active"));
    // Add active class to clicked tab
    tab.classList.add("active");
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

// Animation for matric chart bars
document.addEventListener("DOMContentLoaded", () => {
  const chartFills = document.querySelectorAll(".chart-fill");
  chartFills.forEach((fill) => {
    const width = fill.style.width;
    fill.style.width = "0";
    setTimeout(() => {
      fill.style.width = width;
    }, 500);
  });
});
