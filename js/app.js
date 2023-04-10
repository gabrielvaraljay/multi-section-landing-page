/**
 * Global Variables
 */
const sections = document.querySelectorAll("section");
const navList = document.getElementById("navbar__list");

/**
 * Helper Functions
 */
const isInViewport = (section) => {
  const rect = section.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Main Functions
 */

// Build the navigation menu dynamically based on the sections
const buildNav = () => {
  for (const section of sections) {
    const navItem = document.createElement("li");
    const navLink = document.createElement("a");

    navLink.textContent = section.getAttribute("data-nav");
    navLink.setAttribute("href", `#${section.id}`);
    navLink.classList.add("menu__link");

    navItem.appendChild(navLink);
    navList.appendChild(navItem);
  }
};
buildNav();

// Add functionality to distinguish the section in view, changing the CSS as needed
const setActiveSection = () => {
  for (const section of sections) {
    if (isInViewport(section)) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  }
};

// Add functionality to scroll to sections when clicking on navigation items
navList.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName === "A") {
    const targetSection = document.querySelector(event.target.getAttribute("href"));
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
});

/**
 * Events
 */

// Set sections as active while scrolling
document.addEventListener("scroll", setActiveSection);

