import React, { useState } from "react";

function Search({ searchTextFunction }) {
  const [search, setSearch] = useState("");
  const searchButtonClick = () => {
    searchTextFunction(search);
  };
  return (
    <div className="search_header d-flex">
      <input className="form-control me-3"
        type="search"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchButtonClick} className='btn btn-success'>Search</button>
    </div>
  );
}

export default Search;
