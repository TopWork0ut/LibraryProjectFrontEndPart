import CardBook from "./CardBook/CardBook";
import { CatalogWrapper, FilterWrapper, CatalogContainer} from "../../Styles/Catalog/Catalog.styled";
import { useContext } from "react";
import { BooksContext } from "../BookContext/BookListContext";

export default function Catalog() {
  let data = useContext(BooksContext)
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
        {data.map(({ title, description, image, author, id }, idx) => (
          <CardBook
            key={idx}
            id = {id}
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