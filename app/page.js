"use client"
import React, { useState } from 'react';
// import Register from "./ragistration/ragistration_page"
// import Filterbar from "./filterbar";
import Grid from "./grid"
import initial_data from "./movies";


function page() {
  const [year,setYear] = useState(" ")
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = initial_data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(initial_data.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // search year 

  const onSearch = (searchTerm) => {
    console.log("search year%%%",searchTerm)
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3 filterbox">
            {/* filter  */}
          <h1 className="movie_catalog">Movie <br></br>Catalog</h1>
            <div className="search">
                <label className="search_name"><b>Search:</b></label>
                <input className="input_box" type="text" id="search" />
            </div>
            <div className="filters">
                <h2 className="filters_name"><b>Filters</b></h2>
                <div className="genres">
                    <h3 className="genres_name"><b>Genres:</b></h3>
                    <label className="checkbox_div"><input type="checkbox" name="drama" /> Drama</label>
                    <label className="checkbox_div"><input type="checkbox" name="history" /> History</label>
                    <label className="checkbox_div"><input type="checkbox" name="romantic" /> Romantic</label>
                </div>
                <div className="rating">
                    <h3 className="rating_name"><b>Rating:</b></h3>
                    <input type="range" min="0" max="10" />
                    <div className="rating-labels">
                        {Array.from({ length: 11 }, (_, i) => (
                            <span key={i}>{i}</span>
                        ))}
                    </div>
                </div>

                <div className="year">
                    <h3 className="year_name"><b>Year:</b></h3>
                    <input type="text"
                    value={year} 
                    onChange={(e) => setYear(e.target.value)} id="year" />
                    <button onClick={()=>onSearch(value)}>year</button>
                </div>

            </div>
          </div>
          <div className="col-9 gridbox">
            {/* grid */}
            <div className="row">
              {currentItems.map(function (displayarticle) {
                let movie = {
                  movie_url: displayarticle.movie_url,
                  title: displayarticle.title,
                  poster: displayarticle.poster,
                  release_year: displayarticle.release_year,
                  length_in_min: displayarticle.length_in_min,
                  imdb_rating: displayarticle.imdb_rating,
                  rating_count: displayarticle.rating_count,
                  plot: displayarticle.plot.substring(0, 200),
                  directors: displayarticle.directors,
                  writers: displayarticle.writers,
                  stars: displayarticle.stars,
                  genres: displayarticle.genres

                };
                return (
                  <Grid
                    initial_data={movie}
                  />
                )
              })}
            </div>
          </div>
          <div className="pagination">
            <button className="prev" onClick={handlePrevious} disabled={currentPage === 1}>
              <span>&lt;</span> Previous
            </button>
            <span className="current-page">{currentPage}</span>
            <span className="total-pages">of {totalPages}</span>
            <button className="next" onClick={handleNext} disabled={currentPage === totalPages}>
              Next <span>&gt;</span>
            </button>
          </div>
        </div>

      </div>
    </>
  )
}
export default page;
