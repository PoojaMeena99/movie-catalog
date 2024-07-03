// const Genre = function({genre, handleGenre}) {
//     return (
//         <div className="genres">
//             <h3 className="genres_name"><b>Genres:</b></h3>
//             <label className="checkbox_div"><input type="checkbox" name="drama" /> Drama</label>
//             <label className="checkbox_div"><input type="checkbox" name="history" /> History</label>
//             <label className="checkbox_div"><input type="checkbox" name="romantic" /> Romantic</label>
//         </div>
//     );
// };

// export default Genre;
// Genre.js

import React from 'react';
const genres = ["Drama", "History", "Adventure", "Romance", "Drama|Thriller", "Fantasy", "Crime|Drama" ]; // Define your genres here

const Genre = ({ genre = [], handleGenre }) => {
  const handleCheckboxChange = (e) => {
    const selectedGenre = e.target.name;
    handleGenre(selectedGenre);
  };

  return (
    <div className="genres">
      <h3 className="genres_name"><b>Genres:</b></h3>
      {genres.map(genreName => (
        <label className="checkbox_div" key={genreName}>
          <input
            type="checkbox"
            name={genreName}
            checked={genre.includes(genreName)}
            onChange={handleCheckboxChange}
          /> {genreName}
        </label>
      ))}
    </div>
  );
};

export default Genre;
