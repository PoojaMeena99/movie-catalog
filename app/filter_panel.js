import Search_bar from './search_bar';
import Release_year from "./release_year";
import Rating from "./rating";
import Genre from './genre';

const Filter_panel = function (handleSearchText, handleReleaseYear, handleGenre, handleRating, searchText, releaseYear, genre, rating) {
    return (
        <div className="col-3 filterbox">
            <h1 className="movie_catalog">Movie<br></br>Catalog</h1>
            <Search_bar
                handleSearchText = {handleSearchText}
                searchText = {searchText}
            />
            <div className="filters">
                <h2 className="filters_name"><b>Filters</b></h2>
                <Release_year
                    handleReleaseYear = {handleReleaseYear}
                    releaseYear = {releaseYear}
                />
                <Genre
                    handleGenre = {handleGenre}
                    genre = {genre}
                />
                <Rating
                    handleRating = {handleRating}
                    rating = {rating}
                />
            </div>
        </div>
    );
};
export default Filter_panel;
