import { createContext } from "react";
import Image from "../../Images/General/opened-book-image.svg";

let data = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    description: "A classic novel by Harper Lee",
    image: Image,
    author: "Harper Lee",
    genre:"sci-fi",
  },
  {
    id: 2,
    title: "1984",
    description: "A dystopian novel by George Orwell",
    image: Image,
    author: "George Orwell",
    genre:"sci-fi",
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    description: "A romantic novel by Jane Austen",
    image: Image,
    author: "Jane Austen",
    genre:"sci-fi",
  },
  // Add more book data as needed
];

let BooksContext = createContext(data);
export {BooksContext};
