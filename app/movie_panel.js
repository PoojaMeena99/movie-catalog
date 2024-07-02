import Movie_item from "./movie_item";

const Movie_panel = function ({ movie_list }) {
    return (
        <div className="col-9 gridbox">
            <Movie_item movie_list = {movie_list} />
        </div>
    );
};

export default Movie_panel;


