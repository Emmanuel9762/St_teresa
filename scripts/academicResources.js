// Mobile Navigation Toggle
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});

// Subject Filter Tabs
const subjectBtns = document.querySelectorAll(".subject-btn");
const subjectContents = document.querySelectorAll(".subject-content");

subjectBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    subjectBtns.forEach((b) => b.classList.remove("active"));
    // Add active class to clicked button
    btn.classList.add("active");

    // Hide all subject contents
    subjectContents.forEach((content) => content.classList.remove("active"));
    // Show the corresponding subject content
    const subjectId = btn.getAttribute("data-subject");
    document.getElementById(`${subjectId}-content`).classList.add("active");
  });
});

// Filter buttons
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Search functionality
const searchBox = document.querySelector(".search-box input");
searchBox.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    alert(
      `Searching for: "${searchBox.value}" - This functionality would display relevant resources in a real implementation.`
    );
  }
});

// Resource card hover effects
const resourceCards = document.querySelectorAll(".resource-card");
resourceCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-7px)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});
