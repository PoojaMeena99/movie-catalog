"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import initial_data from "./movies_data";
import MoviePanel from "./movie_panel";
import FilterPanel from "./filter_panel";
import Pagination from './pagination';
import Footer from './footer'

const Page = function () {

  const sortedData = initial_data.sort((a, b) => b.release_year - a.release_year);
  
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredItems, setFilteredItems] = useState(sortedData);
  const [releaseYear, setReleaseYear] = useState("");
  const [searchText, setSearchText] = useState("");
  const [rating, setRating] = useState(0);
  const [genres, setGenres] = useState([]);

  const current_page_movies = filteredItems.slice((currentPage - 1) * 10, currentPage * 10);
  const totalPages = Math.ceil(filteredItems.length / 10);

  useEffect(() => {
    let cookies = document.cookie.split('; ');
    const loggedInCookie = cookies.find(cookie => cookie.startsWith('IfLoggedIn'));
    const isLoggedInValue = loggedInCookie ? loggedInCookie.split('=')[1] : null;

    if (isLoggedInValue === 'true') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn === false) {
      router.push('/login');
    }

  }, [isLoggedIn, router]);

  const handlePrevious = function () {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = function () {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSearchText = function (searchText) {
    setSearchText(searchText);
  };

  const handleReleaseYear = function (releaseYear) {
    setReleaseYear(releaseYear);
  };

  const handleGenres = function (selectedGenre) {
    console.log("handleGenres");
    const updatedGenres = [...genres];

    if (updatedGenres.includes(selectedGenre)) {
      let index = updatedGenres.indexOf(selectedGenre);
      updatedGenres.splice(index, 1);
    } else {
      updatedGenres.push(selectedGenre);
    }
    console.log(updatedGenres, "updateee")
    setGenres(updatedGenres);
  };

  const handleRating = function (selectedRating) {
    setRating(selectedRating);
  };

  const handleLogout = () => {
    document.cookie = 'IfLoggedIn = ; Max-Age=0; path=/';
    setIsLoggedIn(false);
  };


  const applyFilter = function() {
    let filteredMovies = initial_data.filter(function (initial_movie) {

      let initial_movie_genres = initial_movie.genres.split("|");
      if ((initial_movie.title.toString().toLowerCase().includes(searchText.toLowerCase()) ||
                    initial_movie.plot.toLowerCase().includes(searchText.toLowerCase())) &&
        initial_movie.release_year.toString().includes(releaseYear) &&
        (genres.length == 0 || genres.some(selected_genre => initial_movie_genres.includes(selected_genre))) &&
        (initial_movie.imdb_rating >= rating)
      ) {
        return true;
      }
    });

    setFilteredItems(filteredMovies);
    setCurrentPage(1);

  };

  useEffect(() => {
    applyFilter();
  }, [releaseYear, searchText, genres, rating]);

  if (isLoggedIn === null) {
    return <h2>Loading...</h2>;
  }

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
      <Footer />
      <button className="logout_btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Page;