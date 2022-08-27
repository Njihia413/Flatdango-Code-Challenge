// Your code here

const filmsUrl = " http://localhost:3000/films";

//Fetch fist movie details
function fetchFirstMovie (id) {
    fetch(`${filmsUrl}/${id}`)
    .then(response => response.json())
    .then(movie => {
        document.getElementById("poster").src = movie.poster;
    })
}

//Fetch movie titles
function fetchMovieTitles () {
    return fetch(`${filmsUrl}`)
    .then(response => response.json())
    //.then(data => console.log(data));
}

//Display movie titles
function renderMovieTitles (movieTitles) {
    const movieList = document.getElementById("films");
    const movies = document.createElement("li");
    movies.innerHTML = movieTitles.title.toUpperCase();

    movieList.appendChild(movies);
}

fetchMovieTitles().then(movies => {
    movies.forEach(movie => {
        renderMovieTitles(movie);
    })
})

document.addEventListener("DOMContentLoaded", function () {
    fetchFirstMovie(1);
    fetchMovieTitles();
})