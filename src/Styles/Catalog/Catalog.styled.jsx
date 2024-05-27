import styled from "styled-components";

export const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: space-between; */
  /* align-items: center; */
  font-size: large;
  /* padding: 0.5em 2em; */
  width: 100vw;
  background-image: url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-size: cover;
  background-position: center;
  position: relative;

  .booksToShowDiv {
    display: flex;
    flex-direction: raw;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }

  && button.buttonToReduceBooks,
  && button.buttonToAddBooks {
    width: 160px;
    height: 50px;
    font-size: 16px;
    background-color: #e3a805;
    border-radius: 5px;
    text-decoration: none;
    color: #093650;
    border: 2px solid #093650;
    padding: 0.5em 1em;
    cursor: pointer;
    position: relative;
    font-weight: bold;
    margin-left: 40px;
    margin-right: 40px;
    transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  }

  /* Hover styles for both buttons */
  && button.buttonToReduceBooks:hover,
  && button.buttonToAddBooks:hover {
    color: #f5f2eb;
    background-color: #093650;
    border: 2px solid #093650;
  }
`;
export const CatalogWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start; /* Align items at the start of the container */
  font-size: large;
  padding: 0.5em 2em;

  //   @media (max-width: 768px) {
  //     flex-direction: column;
  //     align-items: center;
  //   }
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 36px;
  margin-left: 60px;

  .search_by_name {
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill-rule='evenodd'%3E%3Cpath d='M16.036 18.455l2.404-2.405 5.586 5.587-2.404 2.404zM8.5 2C12.1 2 15 4.9 15 8.5S12.1 15 8.5 15 2 12.1 2 8.5 4.9 2 8.5 2zm0-2C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zM15 16a1 1 0 1 1 2 0 1 1 0 1 1-2 0'%3E%3C/path%3E%3C/svg%3E")
        4% / 6% no-repeat,
      white;
    padding-left: 2em;
    border-radius: 1em;
    /* color: #fff; */
  }

  .filters {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  select {
    margin-left: 80px;
    width: 250px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    font-size: 16px;
    appearance: none;
    padding: 10px 25px;
    border: 2px solid #093650;
    border-radius: 20px;
    font-size: 18px;
    outline: none;
    transition: border-color 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  button {
    padding: 0.5em 2em;
    border: 1px solid darkgrey;
    border-radius: 1em;
  }
`;

export const SearchInput = styled.input`
  padding: 10px 25px;
  border: 2px solid #093650; /* Updated border color */
  border-radius: 20px;
  font-size: 18px;
  outline: none;
  transition: border-color 0.3s ease;

  /* Box Shadow for a slight depth effect */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  /* Hover effect */
  &:hover {
    border-color: #e3a805; /* Lighter color */
  }

  /* Focus effect */
  &:focus {
    border-color: #e3a805; /* Lighter color */
    box-shadow: 0 0 8px rgba(227, 168, 5, 0.6); /* Lighter shadow */
  }

  /* Placeholder style */
  &::placeholder {
    color: #999; /* Light gray */
  }

  /* Styling for caret */
  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 1em;
    width: 1em;
    background: url("path/to/your-cancel-icon.svg") center/contain no-repeat;
    cursor: pointer;
  }
`;
