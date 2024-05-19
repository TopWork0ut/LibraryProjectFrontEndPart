import CardBook from "./CardBook/CardBook";
import { CatalogWrapper, FilterWrapper, CatalogContainer} from "../../Styles/Catalog/Catalog.styled";
import Image from "../../Images/General/opened-book-image.svg";

const data = [
  {
    title: "To Kill a Mockingbird",
    description: "A classic novel by Harper Lee",
    image: Image,
    author: "Harper Lee",
  },
  {
    title: "1984",
    description: "A dystopian novel by George Orwell",
    image: Image,
    author: "George Orwell",
  },
  {
    title: "Pride and Prejudice",
    description: "A romantic novel by Jane Austen",
    image: Image,
    author: "Jane Austen",
  },
  // Add more book data as needed
];

export default function Catalog() {
  return (
    <CatalogContainer>
      <FilterWrapper>
        <div className="filters">
          <select name="author" className="filter">
            <option value="book1">Filter1</option>
            <option value="book1">Book1</option>
            <option value="book2">Book2</option>
            <option value="book3">Book3</option>
            <option value="book4">Book4</option>
          </select>
          <input className="search_by_name" placeholder="Search by name" type="text" />
        </div>
        <button>Apply</button>
      </FilterWrapper>
      <CatalogWrapper>
        {data.map(({ title, description, image, author }, idx) => (
          <CardBook
            key={idx}
            title={title}
            description={description}
            image={image}
            author={author}
          />
        ))}
      </CatalogWrapper>
    </CatalogContainer>
  );
};