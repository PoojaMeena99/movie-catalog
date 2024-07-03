"use client";

import React, { useState, useEffect } from 'react';
import initial_data from "./movies_data";
import MoviePanel from "./movie_panel";
import FilterPanel from "./filter_panel";
import Pagination from './pagination';

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredItems, setFilteredItems] = useState(initial_data);
  const [releaseYear, setReleaseYear] = useState("");
  const [searchText, setSearchText] = useState("");
  const [rating, setRating] = useState("");
  const [genres, setGenres] = useState([]);

  const current_page_movies = filteredItems.slice((currentPage - 1) * 10, currentPage * 10);
  const totalPages = Math.ceil(filteredItems.length / 10);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSearchText = (searchText) => {
    setSearchText(searchText);
  };

  const handleReleaseYear = (releaseYear) => {
    setReleaseYear(releaseYear);
  };

  const handleGenres = (selectedGenre) => {
    const updatedGenres = [...genres];

    if (updatedGenres.includes(selectedGenre)) {
      let index = updatedGenres.indexOf(selectedGenre);
      updatedGenres.splice(index, 1);
    } else {
      updatedGenres.push(selectedGenre);
    }
    setGenres(updatedGenres);
  };


  const handleRating = (selectedRating) => {
    setRating(selectedRating);
  };

  const applyFilter = function () {
    let filteredMovies = initial_data.filter(function (initial_movie) {
      if ((initial_movie.title.toLowerCase().includes(searchText.toLowerCase()) ||
                  initial_movie.plot.toLowerCase().includes(searchText.toLowerCase())) && 
            initial_movie.release_year.includes(releaseYear)) {
        return true;
      }
    });

    //   let filtered = initial_data;

    //   if (releaseYear) {
    //     filtered = filtered.filter(item => item.release_year && item.release_year.toString().includes(releaseYear));
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
      </div>
      <Pagination
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Page;