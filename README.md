# Movie Web Application

## Description

This is a responsive movie web application that allows users to browse popular movies, search for specific titles, view detailed information about movies, bookmark their favorite films, and watch movie trailers. The application is built using HTML5, CSS3, and vanilla JavaScript, with Axios for API calls. It is designed to be adhering to the provided Figma design for visual inspiration.

**Live GitHub Page URL:** [https://github.com/CraftomeCJ/PF_craftomeCJMovieApp]

**Figma Design Link:** [https://www.figma.com/design/crV63Pog9pFPubaG9EE8NR/New-Movie---Header-Website--Community-?node-id=113-120&t=KQdYNyk1u29COwJr-0](https://www.figma.com/design/crV63Pog9pFPubaG9EE8NR/New-Movie---Header-Website--Community-?node-id=113-120&t=KQdYNyk1u29COwJr-0)

** My Website URL: ** [https://craftomecj.github.io/PF_craftomeCJMovieApp/]

## Features

- **Browse Popular Movies:** View a list of currently popular movies on the homepage.
- **Featured Movie Hero Section:** A prominent display of a featured movie on the homepage.
- **Search Movies:** Search for movies by title using the search bar in the navigation.
- **View Movie Details:** Click on any movie to see a detailed page with its poster, title, synopsis, rating, release date, runtime, genres, and a trailer option.
- **Bookmark Movies:** Add or remove movies from a personal bookmark list. Bookmarks are saved in the browser's Local Storage.
- **Watch Movie Trailers:** Play movie trailers directly within the application via an embedded YouTube player (modal).
- **Responsive Design:** The application is designed to work seamlessly across desktop, tablet, and mobile devices.

## Technologies Used

- **HTML5:** For the structure and content of the web pages.
- **CSS3:** For styling, layout (Flexbox, CSS Grid), and responsiveness. All CSS is custom-written.
- **JavaScript (ES6+):** For all client-side logic, DOM manipulation, event handling, and application flow.
- **Axios:** For making asynchronous HTTP requests to The Movie Database (TMDB) API.
- **The Movie Database (TMDB) API:** Used as the source for all movie data, including popular movies, search results, movie details, and trailer links.
- **Local Storage:** For persisting user bookmarks in the browser.

## How to Run Locally

1.  **Clone the repository (or download the source code ZIP).**
    ```bash
    # If you have git installed
    # git clone <repository_url>
    # cd <repository_folder>
    ```
2.  **Obtain a TMDB API Key:**
    - Visit [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api) and register for a free API key.
3.  **Configure the API Key:**
    - Open the file `/js/api.js`.
    - Find the line `const API_KEY = "YOUR_TMDB_API_KEY";`.
    - Replace `"YOUR_TMDB_API_KEY"` with your actual TMDB API key.
    ```javascript
    // Example in js/api.js
    const API_KEY = 'your_actual_api_key_here';
    ```
4.  **Open `index.html` in your web browser:**

    - Navigate to the project directory in your file explorer.
    - Double-click the `index.html` file, or right-click and choose "Open with" your preferred web browser (e.g., Google Chrome, Firefox).

    _Alternatively, you can use a simple live server if you have one installed (e.g., Live Server extension for VS Code)._

## API Used

This project utilizes **The Movie Database (TMDB) API** for fetching all movie-related data.

- **Website:** [https://www.themoviedb.org/](https://www.themoviedb.org/)
- **API Documentation:** [https://developer.themoviedb.org/docs](https://developer.themoviedb.org/docs)

Proper attribution to TMDB is required as per their terms of use if this application were to be publicly distributed beyond academic purposes.

## Design Choices and Uniqueness

The primary goal was to create a unique and original web application based on the provided Figma design inspiration, without using any external CSS frameworks or directly copying code from the user's previous mobile application project or other online sources.

- **Custom HTML and CSS:** All HTML markup and CSS styles were written from scratch. The CSS implements a dark theme, responsive layouts using Flexbox and CSS Grid, and custom styling for all components to match the Figma aesthetic.
- **Vanilla JavaScript:** All interactivity and application logic are implemented using vanilla JavaScript (ES6+). This includes DOM manipulation, event handling, API calls via Axios, and managing application state (like bookmarks in Local Storage).
- **Modular JavaScript:** The JavaScript code is organized into three main files: `api.js` for TMDB API interactions, `ui.js` for functions that update the DOM and create UI elements, and `main.js` for orchestrating the application flow and handling events.
- **No Frameworks (Frontend):** To ensure uniqueness and meet the constraints, no JavaScript frameworks (like React, Vue, Angular) or CSS frameworks (like Bootstrap, Tailwind) were used.
- **Figma as Inspiration:** The Figma design provided a strong visual direction. The implementation involved translating these visual concepts into functional HTML, CSS, and JavaScript, requiring original problem-solving for layout, component behavior, and responsiveness.

For a detailed breakdown of the design and architecture, please refer to the `movie_app_design_document.md` included in the project files.

## Project Structure

```
/
|-- index.html             # Main HTML file for the application
|-- style.css              # Main CSS file for all styling
|-- /js
|   |-- api.js             # Handles all API interactions with TMDB
|   |-- ui.js              # Contains functions for DOM manipulation and UI updates
|   |-- main.js            # Main JavaScript file for application logic and event handling
|-- movie_app_design_document.md # Detailed design and architecture of the app
|-- README.md              # This file: Project overview and documentation
```
