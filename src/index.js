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

document.addEventListener("DOMContentLoaded", function () {
    fetchFirstMovie(1);
})