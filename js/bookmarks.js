// JavaScript for Bookmarks Page (bookmarks.html)

document.addEventListener('DOMContentLoaded', async () => {
  // Apply the correct theme to the body
  document.body.classList.add('movie-chill-theme');
  document.body.classList.remove('dashboard-theme');

  const bookmarkedListingsContainer = document.getElementById(
    'bookmarked-movie-listings',
  );
  const noBookmarksMessage = document.getElementById('no-bookmarks-message');

  if (!bookmarkedListingsContainer || !noBookmarksMessage) {
    console.error('Required elements for bookmarks page not found.');
    return;
  }

  const bookmarkedMovieIds = getBookmarkedMovies();

  if (bookmarkedMovieIds.length === 0) {
    bookmarkedListingsContainer.innerHTML = ''; // Clear any loading message
    noBookmarksMessage.style.display = 'block';
    return;
  }

  noBookmarksMessage.style.display = 'none';
  bookmarkedListingsContainer.innerHTML = '<p>Loading bookmarked movies...</p>';

  const bookmarkedMoviesData = [];
  for (const movieId of bookmarkedMovieIds) {
    const movieDetails = await getMovieDetails(movieId);
    if (movieDetails) {
      bookmarkedMoviesData.push(movieDetails);
    }
  }

  if (bookmarkedMoviesData.length > 0) {
    displayMovies(bookmarkedMoviesData, bookmarkedListingsContainer);
  } else if (
    bookmarkedMovieIds.length > 0 &&
    bookmarkedMoviesData.length === 0
  ) {
    // This case means IDs were in bookmarks, but fetching details failed for all
    bookmarkedListingsContainer.innerHTML =
      '<p>Could not load details for bookmarked movies. Please try again later.</p>';
  } else {
    // Should be caught by the initial check, but as a fallback
    noBookmarksMessage.style.display = 'block';
    bookmarkedListingsContainer.innerHTML = '';
  }
});
