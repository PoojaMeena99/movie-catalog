
import SearchBar from './search_bar';
import ReleaseYear from "./release_year";
import Rating from "./rating";
import Genre from './genre';

const FilterPanel = function ({ handleSearchText, handleReleaseYear, handleGenres, handleRating, searchText, releaseYear, genres, rating }) {
  return (
    <div className="col-3 filterbox">
      <h1 className="movie_catalog">Movie<br />Catalog</h1>
      <SearchBar
        handleSearchText={handleSearchText}
        searchText={searchText}
      />
      <div className="filters">
        <h2 className="filters_name"><b>Filters</b></h2>
        <ReleaseYear
          handleReleaseYear={handleReleaseYear}
          releaseYear={releaseYear}
        />
        <Genre
          handleGenres={handleGenres}
          genres={genres}
        />
        <Rating
          handleRating={handleRating}
          rating={rating}
        />
    
      </div>
    </div>
  );
};

export default FilterPanel;
