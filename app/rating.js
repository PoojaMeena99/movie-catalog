import React from 'react';

const RatingSlider = function ({ rating, handleRating }) {
  const handleChange = function (event) {
    const selectedRating = parseInt(event.target.value);
    handleRating(selectedRating);
  };

  return (
    <div className="rating">
      <h3 className="rating_name"><b>Rating:</b></h3>
      <input
        type="range"
        min="0"
        max="10"
        value={rating}
        onChange={handleChange}
        step="1"
      />
      <div className="rating-labels">
        <span>0</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
      </div>
    </div>
  );
};

export default RatingSlider;
