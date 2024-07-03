const ReleaseYear = function({ releaseYear, handleReleaseYear }) {
    return (
      <div className="year">
        <h3 className="year_name"><b>Release Year:</b></h3>
        <input
          id="year"
          type="number"
          className="input_box"
          value={releaseYear}
          onChange={(e) => handleReleaseYear(e.target.value)}
        />
      </div>
    );
  };
  
  export default ReleaseYear;