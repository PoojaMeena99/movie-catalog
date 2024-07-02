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
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const current_page_movies = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

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

  useEffect(() => {
    const filtered = initial_data.filter(item =>
      item.release_year.toString().includes(year.toString())
    );
    setFilteredItems(filtered);
    setCurrentPage(1);
}, [filtered]);

  return (
    <div className="container">
      <div className="row">
        <Filter_panel 
        filtered = {filtered }
        />
        <Movie_panel movie_list = {current_page_movies}/>
      </div>
      <Pagination 
        handlePrevious = {handlePrevious}
        handleNext = {handleNext}
        currentPage = {currentPage}
        totalPages = {totalPages}
       />
    </div>
  );
};

export default page;
