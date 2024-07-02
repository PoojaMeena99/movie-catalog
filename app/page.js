// import {dammay} from "./dammay"
import Filterbar from "./filterbar";
import Grid from "./grid"
import Footer from "./footer";
import Initial_data from "./initial_data";
import  Register from "./ragistration/ragistration_page" 
// console.log(Initial_data, "data")


function page() {
  return (
    <>
      <div className="container">
        <div className="row">
        <Register />
          <div className="col-3 filterbox">
            <Filterbar />
          </div>
          <div className="col-9 gridbox">
            <div className="row">
              {Initial_data.map(function (displayarticle) {
                let movie = {
                  movie_url: displayarticle.movie_url,
                  title: displayarticle.title,
                  poster: displayarticle.poster,
                  release_year: displayarticle.release_year,
                  length_in_min: displayarticle.length_in_min,
                  imdb_rating:displayarticle.imdb_rating,
                  rating_count:displayarticle.rating_count,
                  plot:displayarticle.plot.substring(0, 200),
                  directors:displayarticle.directors,
                  writers: displayarticle.writers,
                  stars:displayarticle.stars,
                  genres:displayarticle.genres
          
                };
                return (
                  <Grid
                    Initial_data={movie}
                  />
                )
              })}
            </div>
          </div>
          <div className="pagination">
                    <button className="prev" disabled={true}>
                        <span>&lt;</span> Previous
                    </button>
                    <span className="current-page">1</span>
                    <span className="total-pages">of 2</span>
                    <button className="next">
                        Next <span>&gt;</span>
                    </button>
                </div>
        </div>
        
      </div>
    </>
  )
}
export default page;

