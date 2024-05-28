import { createContext } from "react";
import Image from "../../Images/General/opened-book-image.svg";
import getRandomImage from "../BookCover/BookCoverContext";


// Mock book statuses
const bookStatuses = ["IS_AVAILABLE", "NOT_AVAILABLE"];

// Mock book genres
const bookGenres = ["Fiction", "Horror", "Drama", "Fantasy", "Adventure"];

// Function to get a random item from an array
const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

// export { discounts, bookStatuses, bookGenres, getRandomItem };

const getRandomDate = () => {
  const start = new Date();
  const end = new Date();
  start.setFullYear(start.getFullYear() - 1);
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const discounts = [
  { amount: 5, type: "percentage" },
  { amount: 10, type: "percentage" },
  { amount: 15, type: "fixed" }
];

let data = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    image: getRandomImage(),
    author: "Harper Lee",
    genre: getRandomItem(bookGenres),
    securityDeposit: Math.random() * 100,
    valueRate: Math.floor(Math.random() * 4) + 1,
    creationDate: getRandomDate(),
    lastModifiedDate: getRandomDate(),
    discount: getRandomItem(discounts),
    bookStatus: getRandomItem(bookStatuses),
  },
  {
    id: 2,
    title: "1984",
    image: getRandomImage(),
    author: "George Orwell",
    genre: getRandomItem(bookGenres),
    securityDeposit: Math.random() * 100,
    valueRate: Math.floor(Math.random() * 4) + 1,
    creationDate: getRandomDate(),
    lastModifiedDate: getRandomDate(),
    discount: getRandomItem(discounts),
    bookStatus: getRandomItem(bookStatuses),
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    image: getRandomImage(),
    author: "Jane Austen",
    genre: getRandomItem(bookGenres),
    securityDeposit: Math.random() * 100,
    valueRate: Math.floor(Math.random() * 4) + 1,
    creationDate: getRandomDate(),
    lastModifiedDate: getRandomDate(),
    discount: getRandomItem(discounts),
    bookStatus: getRandomItem(bookStatuses),
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    image: getRandomImage(),
    author: "J.D. Salinger",
    genre: getRandomItem(bookGenres),
    securityDeposit: Math.random() * 100,
    valueRate: Math.floor(Math.random() * 4) + 1,
    creationDate: getRandomDate(),
    lastModifiedDate: getRandomDate(),
    discount: getRandomItem(discounts),
    bookStatus: getRandomItem(bookStatuses),
  },
  {
    id: 5,
    title: "The Great Gatsby",
    image: getRandomImage(),
    author: "F. Scott Fitzgerald",
    genre: getRandomItem(bookGenres),
    securityDeposit: Math.random() * 100,
    valueRate: Math.floor(Math.random() * 4) + 1,
    creationDate: getRandomDate(),
    lastModifiedDate: getRandomDate(),
    discount: getRandomItem(discounts),
    bookStatus: getRandomItem(bookStatuses),
  },
  {
    id: 6,
    title: "Moby-Dick",
    image: getRandomImage(),
    author: "Herman Melville",
    genre: getRandomItem(bookGenres),
    securityDeposit: Math.random() * 100,
    valueRate: Math.floor(Math.random() * 4) + 1,
    creationDate: getRandomDate(),
    lastModifiedDate: getRandomDate(),
    discount: getRandomItem(discounts),
    bookStatus: getRandomItem(bookStatuses),
  },
  {
    id: 7,
    title: "Frankenstein",
    image: getRandomImage(),
    author: "Mary Shelley",
    genre: getRandomItem(bookGenres),
    securityDeposit: Math.random() * 100,
    valueRate: Math.floor(Math.random() * 4) + 1,
    creationDate: getRandomDate(),
    lastModifiedDate: getRandomDate(),
    discount: getRandomItem(discounts),
    bookStatus: getRandomItem(bookStatuses),
  },
  {
    id: 8,
    title: "Brave New World",
    image: getRandomImage(),
    author: "Aldous Huxley",
    genre: getRandomItem(bookGenres),
    securityDeposit: Math.random() * 100,
    valueRate: Math.floor(Math.random() * 4) + 1,
    creationDate: getRandomDate(),
    lastModifiedDate: getRandomDate(),
    discount: getRandomItem(discounts),
    bookStatus: getRandomItem(bookStatuses),
  },
  {
    id: 9,
    title: "The Hobbit",
    image: getRandomImage(),
    author: "J.R.R. Tolkien",
    genre: getRandomItem(bookGenres),
    securityDeposit: Math.random() * 100,
    valueRate: Math.floor(Math.random() * 4) + 1,
    creationDate: getRandomDate(),
    lastModifiedDate: getRandomDate(),
    discount: getRandomItem(discounts),
    bookStatus: getRandomItem(bookStatuses),
  },
  {
    id: 10,
    title: "The Lord of the Rings",
    image: getRandomImage(),
    author: "J.R.R. Tolkien",
    genre: getRandomItem(bookGenres),
    securityDeposit: Math.random() * 100,
    valueRate: Math.floor(Math.random() * 4) + 1,
    creationDate: getRandomDate(),
    lastModifiedDate: getRandomDate(),
    discount: getRandomItem(discounts),
    bookStatus: getRandomItem(bookStatuses),
  },
  {
    id: 11,
    title: "The Picture of Dorian Gray",
    image: getRandomImage(),
    author: "Oscar Wilde",
    genre: getRandomItem(bookGenres),
    securityDeposit: Math.random() * 100,
    valueRate: Math.floor(Math.random() * 4) + 1,
    creationDate: getRandomDate(),
    lastModifiedDate: getRandomDate(),
    discount: getRandomItem(discounts),
    bookStatus: getRandomItem(bookStatuses),
  },
  {
    id: 12,
    title: "Crime and Punishment",
    image: getRandomImage(),
    author: "Fyodor Dostoevsky",
    genre: getRandomItem(bookGenres),
    securityDeposit: Math.random() * 100,
    valueRate: Math.floor(Math.random() * 4) + 1,
    creationDate: getRandomDate(),
    lastModifiedDate: getRandomDate(),
    discount: getRandomItem(discounts),
    bookStatus: getRandomItem(bookStatuses),
  },
];

let BooksContext = createContext(data);
export { BooksContext };
