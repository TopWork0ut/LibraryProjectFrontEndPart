import styled from "styled-components";
import CardStyled from "../Card/Card.styled";

const CardBookStyled = styled(CardStyled)`
  border: 2px solid rgb(192, 192, 192);
  justify-content: center;

  p {
    padding: 0 1em;
  }

  h3 {
    /* width: 100%; */
    align-self: center;
  }

  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5em;
  }

  button.view-more {
    background-color: #e3a805;
    border-radius: 5px;
    text-decoration: none;
    color: #093650;
    border: 2px solid #093650;
    padding: 0.5em 1em;
    cursor: pointer;
    position: relative;
    font-weight: bold;
    transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;

    &:hover {
      color: #f5f2eb;
      background-color: #093650;
      border: 2px solid #093650;
    }
`;

export default CardBookStyled;
