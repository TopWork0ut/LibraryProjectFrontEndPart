import React, { useState } from "react";
import CardBook from "./CardBook/CardBook";
import {
  CatalogWrapper,
  FilterWrapper,
  SearchInput,
  CatalogContainer,
} from "../../Styles/Catalog/Catalog.styled";
import { useContext } from "react";
import { BooksContext } from "../BookContext/BookListContext";
import Image from "../../Images/General/opened-book-image.svg";

export default function Catalog() {
  let data = useContext(BooksContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [authorFilter, setAuthorFilter] = useState("");
  const [itemsToShow, setItemsToShow] = useState(4);
  const [showMorePressed, setShowMorePressed] = useState(false);

  const filteredData = data.filter((item) => {
    const titleMatches = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const genreMatches = genreFilter === "" || item.genre === genreFilter;
    const authorMatches = authorFilter === "" || item.author === authorFilter;
    return titleMatches && genreMatches && authorMatches;
  });
  const visibleData = filteredData.slice(0, itemsToShow);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenreFilter(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthorFilter(e.target.value);
  };

  const handleShowMore = () => {
    setShowMorePressed(true);
    setItemsToShow(itemsToShow + 4);
  };

  const handleShowLess = () => {
    setItemsToShow(Math.max(4, itemsToShow - 4));
    if (itemsToShow === 8) {
      setShowMorePressed(false);
    }
  };

  const getUniqueAuthors = () => {
    const uniqueAuthors = new Set();
    data.forEach((book) => uniqueAuthors.add(book.author));
    return Array.from(uniqueAuthors);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setGenreFilter("");
    setAuthorFilter("");
  };

  return (
    <CatalogContainer>
      <FilterWrapper>
        <div className="filters">
          <SearchInput
            type="text"
            placeholder="Search by title"
            value={searchQuery}
            onChange={handleSearch}
          />
          <select
            className="select-container"
            value={genreFilter}
            onChange={handleGenreChange}>
            <option value="">All Genres</option>
            <option value="Fiction">Fiction</option>
            <option value="Horror">Horror</option>
            <option value="Drama">Drama</option>
            <option value="Adventure">Adventure</option>
            <option value="Fantasy">Fantasy</option>
          </select>
          <select
            className="select-container"
            value={authorFilter}
            onChange={handleAuthorChange}>
            <option value="">All Authors</option>
            {getUniqueAuthors().map((author, index) => (
              <option key={index} value={author}>
                {author}
              </option>
            ))}
          </select>
          <button className="clearALlButoon" onClick={handleClearFilters}>
            Clear All
          </button>
        </div>
      </FilterWrapper>
      <CatalogWrapper>
        {visibleData.map((book, idx) => (
          <CardBook
            key={idx}
            id={book.id}
            title={book.title}
            description={book.description}
            image={book.image}
            author={book.author}
          />
        ))}
      </CatalogWrapper>
      <div className="booksToShowDiv">
        {showMorePressed && (
          <button className="buttonToReduceBooks" onClick={handleShowLess}>
            Show Less
          </button>
        )}
        {filteredData.length > itemsToShow && (
          <button className="buttonToAddBooks" onClick={handleShowMore}>
            Show More
          </button>
        )}
      </div>
    </CatalogContainer>
  );
}