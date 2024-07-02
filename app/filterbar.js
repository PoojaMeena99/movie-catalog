function Filterbar() {
    return (
        <>
            <h1 className="movie_catalog">Movie <br></br>Catalog</h1>
            <div className="search">
                <label className="search_name"><b>Search:</b></label>
                <input className="input_box" type="text" id="search" />
            </div>
            <div className="filters">
                <h2 className="filters_name"><b>Filters</b></h2>
                <div className="genres">
                    <h3 className="genres_name"><b>Genres:</b></h3>
                    <label className="checkbox_div"><input type="checkbox" name="drama" /> Drama</label>
                    <label className="checkbox_div"><input type="checkbox" name="history" /> History</label>
                    <label className="checkbox_div"><input type="checkbox" name="romantic" /> Romantic</label>
                </div>
                <div className="rating">
                    <h3 className="rating_name"><b>Rating:</b></h3>
                    <input type="range" min="0" max="10" />
                    <div className="rating-labels">
                        {Array.from({ length: 11 }, (_, i) => (
                            <span key={i}>{i}</span>
                        ))}
                    </div>
                </div>
                <div className="year">
                    <h3 className="year_name"><b>Year:</b></h3>
                    <input type="text"  id="year" />
                </div>
            </div>
        </>

    )

}
export default Filterbar;


