import styled from "styled-components";

// Styled component for the ClassicButton
export const ClassicButton = styled.button`
  padding: 1em;
  border: 2px solid white;
  border-radius: 5px;
  background-color: #e3a805;
  text-decoration: none;
  color: #093650;
  font-size: large;
  padding: 0.5em 2em;
  cursor: pointer;
  position: relative;
  transition: background 0.3s ease;
  font-weight: bold;
  border-color: #093650;

  &:hover {
    color: #f5f2eb;
    background-color: #093650;
    border-color: #f5f2eb;
  }
`;
