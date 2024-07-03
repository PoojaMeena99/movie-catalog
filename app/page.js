"use client"

import React, { useState, useEffect } from 'react';
// import Registration from "./registration/registration_form"
import initial_data from "./movies_data";
import Movie_panel from "./movie_panel";
import Filter_panel from "./filter_panel";
import Pagination from './pagination';

function page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredItems, setFilteredItems] = useState(initial_data);
  const [releaseYear, setReleaseYear] = useState("");
  const [searchText, setSearchText] = useState("");
  const [rating, setRating] = useState("");
  const [genre, setGenre] = useState("");


  const current_page_movies = filteredItems.slice((currentPage - 1) * 10, currentPage * 10);
  const totalPages = Math.ceil(filteredItems.length / 10);

  function handlePrevious() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNext() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function handleSearchText(searchText) {
    setSearchText(searchText);
  }

  function handleReleaseYear(releaseYear) {
    setReleaseYear(releaseYear);
  }

  function handleGenre(genre) {
    setGenre(genre);
  }

  function handleRating(movieLength) {
    setRating();
  }

  useEffect(() => {
    setFilteredItems(filtered);
    setCurrentPage(1);
  }, [filtered]);

  const applyFunction = function () {
    const filtered = initial_data.filter(item =>
      item.release_year.toString().includes(year.toString())
    );
  }

  return (
    <div className="container">
      <div className="row">
        <Filter_panel
          handleSearchText={handleSearchText}
          handleReleaseYear={handleReleaseYear}
          handleGenre={handleGenre}
          handleRating={handleRating}
          searchText={searchText}
          releaseYear={releaseYear}
          genre={genre}
          rating={rating}
        />

        <Movie_panel movie_list={current_page_movies} />
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

export default page;


