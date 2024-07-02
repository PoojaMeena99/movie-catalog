function Grid({ initial_data }) {
    return (
        <>
            <div className="row display_movie">
                
                <div className="col-3 movie_grid">
                    <img className="movie_image" src={initial_data.poster} alt="" />
                </div>
                <div className="col-9 movie_info">
                    <h1 className="movie_details_title">{initial_data.title}</h1>
                    <p className="movie_details">{initial_data.details} • Year {initial_data.release_year} • {initial_data.length_in_min} min • Imdb Rating: {initial_data.imdb_rating} • Rating Count: {initial_data.rating_count}</p>
                    <p className="movie_details">Director: {initial_data.directors} | Writers: {initial_data.writers}</p>
                    <p className="movie_details">Stars (Actors): {initial_data.stars}</p>
                    <p className="movie_details">{initial_data.plot}</p>
                </div>
                <div className="bottam"></div>
            </div>
        
        </>
    )
}
export default Grid;