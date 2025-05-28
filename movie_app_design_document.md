**1. HTML Structure:**

- All HTML files (`index.html`, `details.html`, `bookmarks.html` within the `/PF_CRAFTOMECJMOVIEAPP/` directory) have been developed from the ground up.
- The semantic layout and element choices are based on the specific requirements of the MVP screens and the visual cues from the two distinct Figma designs (Figma 1 for Dashboard, Figma 2 for Details, Bookmarks, Preview Modal).

**2. CSS Styling:**

- The `style.css` file is written entirely for this project. No external CSS frameworks (like Bootstrap, Tailwind CSS) are included.
- Styling for the Dashboard screen is adapted to reflect the look and feel of Figma Design 1.
- Styling for the Details, Bookmarked, and Movie Preview Modal screens is adapted to the "MOVIE CHILL" theme of Figma Design 2, including its dark background and yellow accent colors.
- Layouts utilize modern CSS techniques such as Flexbox and CSS Grid, tailored to the Figma designs.
- The visual appearance, color schemes, typography choices (or suitable web-safe fallbacks), and component styling are based on the Figma mockups, with adjustments to suit the web platform and project needs.

**3. JavaScript Implementation:**

- **API Interaction (`api.js`):**
  - Uses the `axios` library for HTTP requests, whereas the reference code used `fetch`.
  - Communicates with The Movie Database (TMDB) API, while the reference code targeted the OMDB API. The API endpoints, request parameters, and response data structures are specific to TMDB.
  - Custom error handling for API calls is included.
- **UI Manipulation and Logic (`ui.js`, `main.js`, `details.js`, `bookmarks.js`):**
  - DOM elements are primarily created and managed using `document.createElement()`, `appendChild()`, and `element.textContent` for dynamic content. This approach is chosen for performance, security, and maintainability, in contrast to the reference code's use of `innerHTML` for rendering lists.
  - Event handling is managed using `element.addEventListener()`, supporting separation of concerns, rather than inline `onclick` handlers.
  - The logic for movie carousels (if implemented without a library), search functionality, dynamic display of movie details, bookmark management (using Local Storage), and the YouTube trailer modal (structure, opening/closing, iframe loading) is written specifically for this project.
  - The overall application flow and state management (e.g., for bookmarks) are tailored to this implementation.
- **Modularity:** The JavaScript code is organized into separate modules (`api.js`, `ui.js`, `main.js`, `details.js`, `bookmarks.js`) for clarity and maintainability, following a more structured approach than the reference example.

**4. Approach to Figma Designs:**

- The Figma designs provide visual guidance, but the translation into HTML, CSS, and JavaScript required adapting layouts, component behavior, responsiveness, and interactions for the web.
- Combining two different Figma styles for different parts of the application (Dashboard vs. other screens) required careful CSS management.

This approach ensures the project meets the assignment's requirements for creativity and independent development.
