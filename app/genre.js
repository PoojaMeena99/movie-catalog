import React from 'react';

const Genre = function({ genres = [], handleGenres }) {
  const genresNames = ["Drama", "History", "Adventure", "Romance", "Thriller", "Fantasy", "Crime"];

  const handleCheckboxChange = function(e) {
    const selectedGenre = e.target.name;
    handleGenres(selectedGenre);
  };

  return (
    <div className="genres">
      <h3 className="genres_name"><b>Genres:</b></h3>
      {genresNames.map(function (genreName) {
        return (
          <label className="checkbox_div" key={genreName}>
            <input
              type="checkbox"
              name={genreName}
              checked={genres.includes(genreName)}
              onChange={handleCheckboxChange}
            /> {genreName}
          </label>
        );
      })}
    </div>
  );
};

export default Genre;
