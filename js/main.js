// Main JavaScript for Dashboard (index.html)

document.addEventListener('DOMContentLoaded', () => {
  const movieListingsContainer = document.getElementById('movie-listings');
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const heroBackdrop = document.getElementById('hero-backdrop');
  const heroTitle = document.querySelector('.hero-text h2');
  const heroDesc = document.querySelector('.hero-text p');
  const heroBtn = document.querySelector('.hero-btn');
  const heroYear = document.getElementById('hero-year');
  const heroRating = document.getElementById('hero-rating');
  const heroRuntime = document.getElementById('hero-runtime');
  const heroGenres = document.getElementById('hero-genres');

  // Function to load popular movies on page load
  async function loadPopularMovies() {
    if (!movieListingsContainer) return;
    movieListingsContainer.innerHTML = '<p>Loading popular movies...</p>';
    const data = await getPopularMovies();
    if (data && data.results) {
      // Set hero section with the first movie
      const featured = data.results[0];
      if (featured) {
        const backdropPath = featured.backdrop_path
          ? `${BACKDROP_BASE_URL}${featured.backdrop_path}`
          : 'assets/images/backdrop_placeholder.png';
        heroBackdrop.src = backdropPath;
        heroBackdrop.alt = `${featured.title} backdrop`;
        heroTitle.textContent = featured.title;
        heroDesc.textContent = featured.overview || 'No description available.';
        heroBtn.onclick = () => {
          window.location.href = `details.html?id=${featured.id}`;
        };

        // Set year and rating from popular movie data
        heroYear.textContent = featured.release_date
          ? `Year: ${featured.release_date.substring(0, 4)} |`
          : 'Year: N/A |';
        heroRating.textContent = featured.vote_average
          ? `Rating: ${featured.vote_average.toFixed(1)} |`
          : 'Rating: N/A |';

        // Fetch full details for runtime and genres
        try {
          const details = await getMovieDetails(featured.id);
          if (details.runtime && !isNaN(details.runtime)) {
            const hours = Math.floor(details.runtime / 60);
            const minutes = details.runtime % 60;
            heroRuntime.textContent =
              hours > 0
                ? `Runtime: ${hours}hr${minutes > 0 ? ` ${minutes}min |` : ''}`
                : `Runtime: ${minutes}min |`;
          } else {
            heroRuntime.textContent = 'Runtime: N/A |';
          }
          if (details.genres && details.genres.length > 0) {
            heroGenres.textContent =
              'Genres: ' + details.genres.map((g) => g.name).join(', ');
          } else {
            heroGenres.textContent = 'Genres: N/A';
          }
        } catch (e) {
          heroRuntime.textContent = 'Runtime: N/A';
          heroGenres.textContent = 'Genres: N/A';
        }
      }
      displayMovies(data.results, movieListingsContainer);
    } else {
      movieListingsContainer.innerHTML =
        '<p>Could not load popular movies. Check your API key or network.</p>';
    }
  }

  // Function to handle movie search
  async function handleSearch() {
    if (!movieListingsContainer || !searchInput) return;
    const query = searchInput.value.trim();
    if (!query) {
      alert('Please enter a movie title to search.');
      return;
    }
    movieListingsContainer.innerHTML = `<p>Searching for "${query}"...</p>`;
    const data = await searchMovies(query);
    if (data && data.results) {
      displayMovies(data.results, movieListingsContainer);
      if (data.results.length === 0) {
        movieListingsContainer.innerHTML = `<p>No movies found for "${query}".</p>`;
      }
    } else {
      movieListingsContainer.innerHTML = `<p>No movies found for "${query}", or an error occurred.</p>`;
    }
  }

  // Add event listeners
  if (searchButton) {
    searchButton.addEventListener('click', handleSearch);
  }
  if (searchInput) {
    searchInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        handleSearch();
      }
    });
  }

  // Initial load
  if (
    document.body.classList.contains('dashboard-theme') ||
    window.location.pathname.endsWith('index.html') ||
    window.location.pathname === '/'
  ) {
    document.body.classList.add('dashboard-theme');
    document.body.classList.remove('movie-chill-theme');
    loadPopularMovies();
  }
});
