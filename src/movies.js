const insertMovies = (data) => {
  const list = document.querySelector('#results');
  data.Search.forEach((result) => {
    const movie = `
    <li>
      <img class='movie-poster' src="${result.Poster}" alt="" />
      <p>${result.Title}</p>
    </li>`;
    list.insertAdjacentHTML('beforeend', movie);
  });
};

const fetchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then(insertMovies);
};

const callTheAPI = (event) => {
  const list = document.querySelector('#results');
  event.preventDefault();
  list.innerHTML = '';
  const input = document.querySelector('#search-input');
  fetchMovies(input.value);
}

export { fetchMovies, callTheAPI };
