import React from 'react';

const MovieLengthSlider = ({ movieLength, handleMovieLength }) => {
  const handleChange = (event) => {
    const selectedLength = parseInt(event.target.value);
    handleMovieLength(selectedLength);
  };

  return (
    <div className="movie-length-slider">
      <h3>Movie Length (minutes): {movieLength}</h3>
      <input
        type="range"
        min="30"
        max="120" 
        value={movieLength} 
        onChange={handleChange} 
        step="15" 
      />
      <div className="length-labels">
        {Array.from({ length: 7 }, (_, i) => (
          <span key={i}>{30 + i * 15}</span> 
        ))}
      </div>
    </div>
  );
};

export default MovieLengthSlider;
