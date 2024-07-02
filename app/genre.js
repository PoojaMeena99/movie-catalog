const Genre = function({genre, handleGenre}) {
    return (
        <div className="genres">
            <h3 className="genres_name"><b>Genres:</b></h3>
            <label className="checkbox_div"><input type="checkbox" name="drama" /> Drama</label>
            <label className="checkbox_div"><input type="checkbox" name="history" /> History</label>
            <label className="checkbox_div"><input type="checkbox" name="romantic" /> Romantic</label>
        </div>
    );
};
export default Genre;
