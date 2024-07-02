function Grid({ Initial_data }) {
    return (
        <>
            <div className="row display_movie">
                
                <div className="col-3 movie_grid">
                    <img className="movie_image" src={Initial_data.poster} alt="" />
                </div>
                <div className="col-9 movie_info">
                    <h2 className="movie_title">{Initial_data.title}</h2>
                    <p className="movie_details">{Initial_data.title} • Year {Initial_data.release_year} • {Initial_data.length_in_min} min • Imdb Rating: {Initial_data.imdb_rating} • Rating Count: {Initial_data.rating_count}</p>
                    <p className="movie_details">Director: {Initial_data.directors} | Writers: {Initial_data.writers}</p>
                    <p className="movie_details">Stars (Actors): {Initial_data.stars}</p>
                    <p className="movie_details">{Initial_data.plot}</p>
                </div>
                <div className="bottam"></div>
            </div>
        
        </>
    )
}
export default Grid;