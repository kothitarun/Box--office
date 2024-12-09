const movies = [
    { title: "Avatar", releaseDate: "2009-12-18", earnings: "$2.847 billion" },
    { title: "Titanic", releaseDate: "1997-12-19", earnings: "$2.195 billion" },
    { title: "Star Wars: The Force Awakens", releaseDate: "2015-12-18", earnings: "$2.068 billion" },
    { title: "Avengers: Endgame", releaseDate: "2019-04-26", earnings: "$2.798 billion" },
    { title: "Jurassic World", releaseDate: "2015-06-12", earnings: "$1.671 billion" },
    // Add more movies as needed
];

function displayMovies(filter = '') {
    const moviesBody = document.getElementById('movies-body');
    moviesBody.innerHTML = '';

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(filter.toLowerCase())
    );

    filteredMovies.forEach(movie => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${movie.title}</td>
            <td>${movie.releaseDate}</td>
            <td>${movie.earnings}</td>
        `;
        moviesBody.appendChild(row);
    });
}

document.getElementById('search').addEventListener('input', (event) => {
    displayMovies(event.target.value);
});

// Initial display of movies
displayMovies();