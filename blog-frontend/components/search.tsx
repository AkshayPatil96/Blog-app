import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="search">
        <input
          type="text"
          className="form-control me-2"
          value={search}
          placeholder="Enter your search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  );
};

export default Search;
