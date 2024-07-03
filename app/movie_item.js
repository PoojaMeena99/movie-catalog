import React from 'react';

function MovieItem({ movie_list }) {
    return (
        <div className="row">
            {movie_list.map((movie) => (
                <div className="row display_movie" key={movie.title}>
                    <div className="col-3 movie_grid">
                        <img className="movie_image" src={movie.poster} alt="" />
                    </div>
                    <div className="col-9 movie_info">
                        <h1 className="movie_details_title">{movie.title}</h1>
                        <p className="movie_details">{movie.genres} • Year {movie.release_year} • {movie.length_in_min} min • Imdb Rating: {movie.imdb_rating} • Rating Count: {movie.rating_count}</p>
                        <p className="movie_details">Director: {movie.directors} | Writers: {movie.writers}</p>
                        <p className="movie_details">Stars: {movie.stars}</p>
                        <p className="movie_details">{movie.plot.substring(0, 200)}</p>
                    </div>
                    <div className="bottam"></div>
                </div>
            ))}
        </div>
    );
}

export default MovieItem;
