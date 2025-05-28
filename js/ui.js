// UI Helper Functions

// Function to create a movie card (common for dashboard, search results, bookmarks)
function createMovieCard(movie) {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    movieCard.dataset.movieId = movie.id;

    const posterPath = movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : "assets/images/poster_placeholder.png";

    movieCard.innerHTML = `
        <img src="${posterPath}" alt="${movie.title}">
        <div class="movie-info">
            <h3>${movie.title}</h3>
            <p>Year: ${movie.release_date ? movie.release_date.substring(0, 4) : "N/A"}</p>
            <p>Rating: ${movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}</p>
            <!-- Add a button or link to details page -->
        </div>
    `;

    // Add event listener to navigate to details page (or open details view)
    movieCard.addEventListener("click", () => {
        window.location.href = `details.html?id=${movie.id}`;
    });

    return movieCard;
}

// Function to display movies in a grid container
function displayMovies(movies, containerElement) {
    containerElement.innerHTML = ""; // Clear previous movies
    if (!movies || movies.length === 0) {
        containerElement.innerHTML = "<p>No movies found.</p>";
        return;
    }
    movies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        containerElement.appendChild(movieCard);
    });
}

// Function to display movie details on the details page
function displayMovieDetails(movie) {
    document.getElementById("details-title").textContent = movie.title || "Title N/A";
    document.getElementById("details-year").textContent = movie.release_date ? movie.release_date.substring(0, 4) : "Year N/A";
    document.getElementById("details-runtime").textContent = movie.runtime ? `${movie.runtime} min` : "Runtime N/A";
    document.getElementById("details-rating").textContent = movie.vote_average ? `Rating: ${movie.vote_average.toFixed(1)}/10` : "Rating N/A";
    document.getElementById("details-overview").textContent = movie.overview || "Overview not available.";

    const posterPath = movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : "assets/images/poster_placeholder.png";
    document.getElementById("details-poster").src = posterPath;
    document.getElementById("details-poster").alt = movie.title;

    const backdropPath = movie.backdrop_path ? `${BACKDROP_BASE_URL}${movie.backdrop_path}` : "assets/images/backdrop_placeholder.png";
    document.getElementById("details-backdrop").src = backdropPath;
    document.getElementById("details-backdrop").alt = `${movie.title} backdrop`;

    const genresContainer = document.getElementById("details-genres");
    genresContainer.innerHTML = "";
    if (movie.genres && movie.genres.length > 0) {
        movie.genres.forEach(genre => {
            const genreTag = document.createElement("span");
            genreTag.textContent = genre.name;
            genresContainer.appendChild(genreTag);
        });
    } else {
        genresContainer.textContent = "Genres not available.";
    }

    // Handle trailer button
    const trailerButton = document.getElementById("watch-trailer-button");
    const youtubeVideo = movie.videos?.results?.find(video => video.site === "YouTube" && video.type === "Trailer");
    if (youtubeVideo) {
        trailerButton.dataset.youtubeKey = youtubeVideo.key;
        trailerButton.style.display = "inline-block";
    } else {
        trailerButton.style.display = "none";
    }

    // Handle bookmark button state
    updateBookmarkButtonState(movie.id, "bookmark-button-details");
}

// Function to open the trailer modal
function openTrailerModal(youtubeKey) {
    const modal = document.getElementById("trailer-modal");
    const player = document.getElementById("youtube-trailer-player");
    player.src = `https://www.youtube.com/embed/${youtubeKey}?autoplay=1`;
    modal.style.display = "block";
}

// Function to close the trailer modal
function closeTrailerModal() {
    const modal = document.getElementById("trailer-modal");
    const player = document.getElementById("youtube-trailer-player");
    player.src = ""; // Stop the video
    modal.style.display = "none";
}

// --- Bookmark Functions ---
function getBookmarkedMovies() {
    return JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
}

function isMovieBookmarked(movieId) {
    const bookmarks = getBookmarkedMovies();
    return bookmarks.includes(movieId);
}

function toggleBookmark(movieId) {
    let bookmarks = getBookmarkedMovies();
    if (bookmarks.includes(movieId)) {
        bookmarks = bookmarks.filter(id => id !== movieId);
    } else {
        bookmarks.push(movieId);
    }
    localStorage.setItem("bookmarkedMovies", JSON.stringify(bookmarks));
    return bookmarks.includes(movieId); // Return new state
}

function updateBookmarkButtonState(movieId, buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
        if (isMovieBookmarked(movieId)) {
            button.textContent = "❤️"; // Bookmarked (filled heart)
            button.classList.add("bookmarked");
        } else {
            button.textContent = "♡"; // Not bookmarked (empty heart)
            button.classList.remove("bookmarked");
        }
    }
}
