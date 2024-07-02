import Search_bar from './search_bar';
import Year from "./year";
import Rating from "./rating";
import Genres from './genre';

const Filter_panel = function ({filtered}) {
    return (
        <div className="col-3 filterbox">
            <h1 className="movie_catalog">Movie<br></br>Catalog</h1>
            <Search_bar />
            <div className="filters">
                <h2 className="filters_name"><b>Filters</b></h2>
                <Year filtered = {filtered}
                    />
                <Genres />
                <Rating />
            </div>
      </div>
    );
};
export default Filter_panel;
