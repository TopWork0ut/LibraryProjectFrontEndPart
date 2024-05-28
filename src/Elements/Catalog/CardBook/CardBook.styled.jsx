import styled from "styled-components";
import CardStyled from "../Card/Card.styled";

const CardBookStyled = styled(CardStyled)`
  border: 2px solid rgb(9, 54, 80);
  justify-content: center;
  .imageNew{
      max-height: 50%;
      object-fit: contain;
      background: radial-gradient(#093650 5%, #f5f2eb);
  }
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
    /* padding: 0.5em; */
    > p {
      font-size: x-small;
      padding: 0;
    }
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
  }
  .view-more-link {
    background-color: #e3a805;
    border-radius: 5px;
    text-decoration: none;
    color: #093650;
    border: 2px solid #093650;
    padding: 0.5em 1em;
    display: inline;
    text-align: center;
    line-height: 28px;

    cursor: pointer;
    //position: relative;
    font-weight: bold;
    transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;

    &:hover {
      color: #f5f2eb;
      background-color: #093650;
      border: 2px solid #093650;
    }
  }  
  /* .view-more-link{
    display: inline;
    cursor: pointer;
    color: #093650;
    padding: 0.5em 1em;
    height: 100%;
    text-decoration: none;
    
    &:hover {
      color: #f5f2eb;
      background-color: #093650;
      border: 2px solid #093650;
    }
  } */
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self:center;
  width: 90%;

  .rating-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`


export {TextWrapper, CardBookStyled};