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
  const [genre, setGenre] = useState([]);

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

  const handleGenre = (selectedGenre) => {
    const updatedGenres = [...genre];

    if (updatedGenres.includes(selectedGenre)) {
      updatedGenres.splice(updatedGenres.indexOf(selectedGenre), 1);
    } else {
      updatedGenres.push(selectedGenre);
    }

    setGenre(updatedGenres);
  };

  const handleRating = (selectedRating) => {
    setRating(selectedRating);
  };

  useEffect(() => {
    let filtered = initial_data;

    if (releaseYear) {
      filtered = filtered.filter(item => item.release_year && item.release_year.toString().includes(releaseYear));
    }

    if (searchText) {
      filtered = filtered.filter(item => typeof item.title === 'string' && item.title.toLowerCase().includes(searchText.toLowerCase()));
    }

    if (genre.length > 0) {
      filtered = filtered.filter(item => 
        item.genres && genre.some(selectedGenre => item.genres.toLowerCase().includes(selectedGenre.toLowerCase()))
      );
    }

   if (rating !== "") {
      filtered = filtered.filter(item => item.imdb_rating && parseFloat(item.imdb_rating) >= rating && parseFloat(item.imdb_rating) < (rating + 1));
    }
    setFilteredItems(filtered);
    setCurrentPage(1);
  }, [releaseYear, searchText, genre, rating]);

  return (
    <div className="container">
      <div className="row">
        <FilterPanel
          handleSearchText={handleSearchText}
          handleReleaseYear={handleReleaseYear}
          handleGenre={handleGenre}
          handleRating={handleRating}
          searchText={searchText}
          releaseYear={releaseYear}
          genre={genre}
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