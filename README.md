# Dynamic Landing Page

This project is a dynamic landing page that demonstrates the manipulation of DOM elements using JavaScript. The page includes a fixed navigation menu that is built dynamically based on the sections present in the HTML. The navigation menu allows users to scroll to different sections of the page, and the section currently in the viewport is highlighted with an active state.

The landing page has been pre-filled with example content about AWS Load Balancers, including Classic Load Balancer, Application Load Balancer, and Network Load Balancer.

## Features

- Dynamically built navigation menu based on the sections in the HTML
- Active state for navigation items corresponding to the section in the viewport
- Smooth scrolling to sections when clicking on navigation items
- Additional features such as hiding the fixed navigation bar while not scrolling, a scroll-to-top button, collapsible sections, and a responsive layout
- Proper commenting throughout the project
- Best practices, DRY principles, and ES6 features followed in the JavaScript implementation

## How to use

1. Clone the repository or download the source code.
2. Open `index.html` in your browser to see the landing page.
3. Use the navigation menu to scroll to different sections of the page.
4. Observe the active state applied to the navigation items and the sections as you scroll through the page.

## Project Structure

- `index.html`: The main HTML file containing the content and structure of the landing page, pre-filled with example content about AWS Load Balancers
- `app.js`: The JavaScript file responsible for dynamically building the navigation menu, applying active states to sections and navigation items, and implementing other functionalities
- `styles.css`: The CSS file containing the styling for the landing page

## Development

1. Linked the `app.js` file and built out the HTML with at least 4 content sections.
2. Understood the HTML elements, their attributes, and the data attribute.
3. Chose a data structure to store sections and decided how to iterate over it.
4. Created an unordered list from the data structure and determined where to place it.
5. Determined how to test if a section is in the viewport.
6. Built the navigation menu dynamically based on the sections.
7. Added functionality to distinguish the section in view, changing the CSS as needed.
8. Added functionality to scroll to sections when clicking on navigation items.
9. Refactored the code, making sure it follows best practices, is DRY, and uses ES6 features.
10. Tested the performance of the page and the impact of the JavaScript implementation.
11. Added active state to navigation items when a section is in the viewport using `.getBoundingClientRect()` function.
12. Implemented additional features like hiding the fixed navigation bar while not scrolling, adding a scroll-to-top button, making sections collapsible, and creating a responsive layout.
13. Ensured proper commenting throughout the project.
14. Updated the README file with project-specific information.

## License

This project is open source and available under the [MIT License](LICENSE).
