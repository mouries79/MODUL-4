import React, { useEffect, useState } from 'react';
import "./Movies.css";
import MovieItem from "../Movieltem/Movieltem";

function Movies(props) {
    const [defaultMovies, setDefaultMovies] = useState([]);

    useEffect(() => {
        fetch("https://www.omdbapi.com/?i=tt3896198&apikey=7fbe6f8&s=star wars")
            .then(res => res.json())
            .then(data => setDefaultMovies(data.Search.slice(0, 9)));
    }, []);
    
    return (
        <ul className="movies">
            {
                props.movies.length > 0 ? props.movies.map(movie => (
                    <MovieItem {...movie} key={movie.imdbID} />
                )) : defaultMovies.length > 0 && defaultMovies.map(movie => (
                    <MovieItem {...movie} key={movie.imdbID} />
                ))
            }
        </ul>
    );
}

export default Movies;

