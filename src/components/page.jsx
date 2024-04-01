import React, { useState } from 'react';
import Pagination from './Pagination';

const MyComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const pageCount = 5; // Total number of pages

  return (
    <div>
      <div className="py-4 px-20 flex md:flex-row justify-between items-center">
        <div>
          <p className="text-2xl">View of countries</p>
          <p>Page {currentPage} of {pageCount}</p>
        </div>
        <div className="text-xl">
          <select name="" id="">
            <option value="">Select continent</option>
            <option value="africa">Africa</option>
            <option value="asia">Asia</option>
            <option value="south-america">South America</option>
            <option value="north-america">North America</option>
            <option value="europe">Europe</option>
            <option value="ocean">Ocean</option>
            <option value="antarctica">Antarctica</option>
          </select>
        </div>
      </div>
      <Pagination currentPage={currentPage} totalPages={pageCount} onPageChange={handlePageChange} />
    </div>
  );
};




export default MyComponent;




