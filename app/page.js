"use client";

import React, { useState, useEffect } from 'react';
import initial_data from "./movies_data";
import MoviePanel from "./movie_panel";
import FilterPanel from "./filter_panel";
import Pagination from './pagination'; 

const Page = function() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredItems, setFilteredItems] = useState(initial_data);
  const [releaseYear, setReleaseYear] = useState("");
  const [searchText, setSearchText] = useState("");
  const [rating, setRating] = useState("");
  const [genres, setGenres] = useState([]);

  const current_page_movies = filteredItems.slice((currentPage - 1) * 10, currentPage * 10);
  const totalPages = Math.ceil(filteredItems.length / 10);

  const handlePrevious = function() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = function() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSearchText = function(searchText) {
    setSearchText(searchText);
  };

  const handleReleaseYear = function(releaseYear) {
    setReleaseYear(releaseYear);
  };

  const handleGenres = function(selectedGenre) {
    console.log("handleGenres");
    const updatedGenres = [...genres];

    if (updatedGenres.includes(selectedGenre)) {
      let index = updatedGenres.indexOf(selectedGenre);
      updatedGenres.splice(index, 1);
    } else {
      updatedGenres.push(selectedGenre);
    }
    console.log(updatedGenres,"updateee")
    setGenres(updatedGenres);
  };


  const handleRating = function(selectedRating) {
    setRating(selectedRating);
  };

  const applyFilter = function () {
    let filteredMovies = initial_data.filter(function (initial_movie) {
  
      let initial_movie_genres = initial_movie.genres.split("|");
      if ((initial_movie.title.toString().toLowerCase().includes(searchText.toLowerCase()) ||
                  initial_movie.plot.toLowerCase().includes(searchText.toLowerCase())) && 
            initial_movie.release_year.toString().includes(releaseYear) && 
            (genres.length == 0 || genres.some(selected_genre => initial_movie_genres.includes(selected_genre)))
          ) 
            {
        return true;
      }
    });

      //   let filtered = initial_data;

    //   if (releaseYear) {
    //     filtered = filtered.filter(item => item.release_year && item.release_year.updatedGenres.indexOf(selectedGenre).includes(releaseYear));
    //   }

    //   if (searchText) {
    //     filtered = filtered.filter(item => typeof item.title === 'string' && item.title.toLowerCase().includes(searchText.toLowerCase()));
    //   }

    //   if (genre.length > 0) {
    //     filtered = filtered.filter(item => 
    //       item.genres && genre.some(selectedGenre => item.genres.toLowerCase().includes(selectedGenre.toLowerCase()))
    //     );
    //   }

    //  if (rating !== "") {
    //     filtered = filtered.filter(item => item.imdb_rating && parseFloat(item.imdb_rating) >= rating && parseFloat(item.imdb_rating) < (rating + 1));
    //   }

    setFilteredItems(filteredMovies);
    setCurrentPage(1);

  };


  useEffect(() => {
    applyFilter();
  }, [releaseYear, searchText, genres, rating]);

  return (
    <div className="container">
      <div className="row">
       
        
        <FilterPanel
          handleSearchText={handleSearchText}
          handleReleaseYear={handleReleaseYear}
          handleGenres={handleGenres}
          handleRating={handleRating}
          searchText={searchText}
          releaseYear={releaseYear}
          genres={genres}
          rating={rating}
        />
        <MoviePanel movie_list={current_page_movies} />

      <Pagination
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      </div>
    </div>
  );
};

export default Page;