const Release_year = function({releaseYear, handleReleaseYear}) {
    console.log(year, "year")
    return (
        <div className="year">
            <h3 className="year_name"><b>Release_year:</b></h3>
            <input
                id="year"
                type="number"
                className="input_box"
                value={releaseYear}
                onBlur={(e) => handleReleaseYear(e.target.value)}
            />
            filtered(year)
        </div>

    );
};
export default Release_year;