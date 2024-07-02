const release_year = function(releaseYear, releaseYear) {
    const [year, setYear] = useState("");
    console.log(year, "year")
    return (
        <div className="year">
            <h3 className="year_name"><b>Year:</b></h3>
            <input
                id="year"
                type="number"
                className="input_box"
                value={year}
                onBlur={(e) => setYear(e.target.value)}
            />
            filtered(year)
        </div>

    )

}
export default release_year;