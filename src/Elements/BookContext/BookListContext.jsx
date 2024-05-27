import { createContext } from "react";
import Image from "../../Images/General/opened-book-image.svg";

let data = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    description: "A classic novel by Harper Lee",
    image: Image,
    author: "Harper Lee",
    genre: "Fiction",
  },
  {
    id: 2,
    title: "1984",
    description: "A dystopian novel by George Orwell",
    image: Image,
    author: "George Orwell",
    genre: "Horror",
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    description: "A romantic novel by Jane Austen",
    image: Image,
    author: "Jane Austen",
    genre: "Drama",
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    description: "A novel by J.D. Salinger",
    image: Image,
    author: "J.D. Salinger",
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "The Great Gatsby",
    description: "A novel by F. Scott Fitzgerald",
    image: Image,
    author: "F. Scott Fitzgerald",
    genre: "Adventure",
  },
  {
    id: 6,
    title: "Moby-Dick",
    description: "A novel by Herman Melville",
    image: Image,
    author: "Herman Melville",
    genre: "Horror",
  },
  {
    id: 7,
    title: "Frankenstein",
    description: "A novel by Mary Shelley",
    image: Image,
    author: "Mary Shelley",
    genre: "Fiction",
  },
  {
    id: 8,
    title: "Brave New World",
    description: "A novel by Aldous Huxley",
    image: Image,
    author: "Aldous Huxley",
    genre: "Fantasy",
  },
  {
    id: 9,
    title: "The Hobbit",
    description: "A fantasy novel by J.R.R. Tolkien",
    image: Image,
    author: "J.R.R. Tolkien",
    genre: "Adventure",
  },
  {
    id: 10,
    title: "The Lord of the Rings",
    description: "A fantasy novel by J.R.R. Tolkien",
    image: Image,
    author: "J.R.R. Tolkien",
    genre: "Drama",
  },
  {
    id: 11,
    title: "The Picture of Dorian Gray",
    description: "A novel by Oscar Wilde",
    image: Image,
    author: "Oscar Wilde",
    genre: "Fiction",
  },
  {
    id: 12,
    title: "Crime and Punishment",
    description: "A novel by Fyodor Dostoevsky",
    image: Image,
    author: "Fyodor Dostoevsky",
    genre: "Horror",
  },
];

let BooksContext = createContext(data);
export { BooksContext };