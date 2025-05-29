// JavaScript for Movie Details Page (details.html)

document.addEventListener('DOMContentLoaded', async () => {
  // Apply the correct theme to the body
  document.body.classList.add('movie-chill-theme');
  document.body.classList.remove('dashboard-theme');

  const params = new URLSearchParams(window.location.search);
  const movieId = params.get('id');

  if (!movieId) {
    // Handle missing movie ID, e.g., redirect or show error
    document.getElementById('movie-details-content').innerHTML = `
            <div class="error-message">
                <h2>Movie Not Found</h2>
                <p>Please go back and select a movie from the homepage.</p>
                <a href="index.html" class="back-button">Return to Home</a>
            </div>
        `;
    return;
  }

  const movieDetails = await getMovieDetails(movieId);

  if (movieDetails) {
    displayMovieDetails(movieDetails);

    // Trailer Modal Logic
    const trailerButton = document.getElementById('watch-trailer-button');
    const modal = document.getElementById('trailer-modal');
    const closeButton = modal ? modal.querySelector('.close-button') : null;

    if (trailerButton && trailerButton.dataset.youtubeKey) {
      trailerButton.addEventListener('click', () => {
        openTrailerModal(trailerButton.dataset.youtubeKey);
      });
    }

    if (closeButton) {
      closeButton.addEventListener('click', closeTrailerModal);
    }

    // Close modal if user clicks outside of it
    if (modal) {
      window.addEventListener('click', (event) => {
        if (event.target === modal) {
          closeTrailerModal();
        }
      });
    }

    // Bookmark button logic for details page
    const bookmarkButtonDetails = document.getElementById(
      'bookmark-button-details',
    );
    if (bookmarkButtonDetails) {
      bookmarkButtonDetails.addEventListener('click', () => {
        toggleBookmark(movieDetails.id);
        updateBookmarkButtonState(movieDetails.id, 'bookmark-button-details');
      });
      // Initial state update
      updateBookmarkButtonState(movieDetails.id, 'bookmark-button-details');
    }
  } else {
    const detailsContent = document.getElementById('movie-details-content');
    if (detailsContent) {
      detailsContent.innerHTML =
        '<p>Could not load movie details. Please try again later.</p>';
    }
  }
});
