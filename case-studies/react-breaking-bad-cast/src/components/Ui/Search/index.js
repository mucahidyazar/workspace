import React from "react";

const Search = ({ query, setQuery }) => {
  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          autoFocus
          value={query}
          onChange={onChange}
        />
      </form>
    </section>
  );
};

export default Search;
