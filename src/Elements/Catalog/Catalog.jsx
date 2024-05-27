import React, { useState } from "react";
import CardBook from "./CardBook/CardBook";
import {
  CatalogWrapper,
  FilterWrapper,
  CatalogContainer,
  SearchInput,
} from "../../Styles/Catalog/Catalog.styled";
import Image from "../../Images/General/opened-book-image.svg";

const data = [
  {
    title: "To Kill a Mockingbird",
    description: "A classic novel by Harper Lee",
    image: Image,
    author: "Harper Lee",
    genre: "Fiction",
  },
  {
    title: "1984",
    description: "A dystopian novel by George Orwell",
    image: Image,
    author: "George Orwell",
    genre: "Horror",
  },
  {
    title: "Pride and Prejudice",
    description: "A romantic novel by Jane Austen",
    image: Image,
    author: "Jane Austen",
    genre: "Drama",
  },
  {
    title: "The Catcher in the Rye",
    description: "A novel by J.D. Salinger",
    image: Image,
    author: "J.D. Salinger",
    genre: "Fantasy",
  },
  {
    title: "The Great Gatsby",
    description: "A novel by F. Scott Fitzgerald",
    image: Image,
    author: "F. Scott Fitzgerald",
    genre: "Adventure",
  },
  {
    title: "Moby-Dick",
    description: "A novel by Herman Melville",
    image: Image,
    author: "Herman Melville",
    genre: "Horror",
  },
  {
    title: "Frankenstein",
    description: "A novel by Mary Shelley",
    image: Image,
    author: "Mary Shelley",
    genre: "Fiction",
  },
  {
    title: "Brave New World",
    description: "A novel by Aldous Huxley",
    image: Image,
    author: "Aldous Huxley",
    genre: "Fantasy",
  },
  {
    title: "The Hobbit",
    description: "A fantasy novel by J.R.R. Tolkien",
    image: Image,
    author: "J.R.R. Tolkien",
    genre: "Adventure",
  },
  {
    title: "The Lord of the Rings",
    description: "A fantasy novel by J.R.R. Tolkien",
    image: Image,
    author: "J.R.R. Tolkien",
    genre: "Drama",
  },
  {
    title: "The Picture of Dorian Gray",
    description: "A novel by Oscar Wilde",
    image: Image,
    author: "Oscar Wilde",
    genre: "Fiction",
  },
  {
    title: "Crime and Punishment",
    description: "A novel by Fyodor Dostoevsky",
    image: Image,
    author: "Fyodor Dostoevsky",
    genre: "Horror",
  },
];

export default function Catalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [itemsToShow, setItemsToShow] = useState(4);
  const [showMorePressed, setShowMorePressed] = useState(false);

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (genreFilter === "" || item.genre === genreFilter)
  );
  const visibleData = filteredData.slice(0, itemsToShow);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenreFilter(e.target.value);
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
        </div>
      </FilterWrapper>
      <CatalogWrapper>
        {visibleData.map((book, idx) => (
          <CardBook
            key={idx}
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
