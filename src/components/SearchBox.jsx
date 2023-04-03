import React from "react";

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className=" d-flex justify-content-center align-items-center">
      <input
        type="search"
        placeholder="search monsters"
        className=" mb-5 form-control form-control-lg w-auto"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
