import styled, { keyframes } from "styled-components";

// Define a keyframe animation for the rotation
const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const libraryHeadingAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1.);
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(9, 54, 80);
  box-shadow: rgb(26 31 51) 0px 0.5rem 1rem 0px;
  color: white;
  font-size: large;
  border: 0px solid whitesmoke;
  padding: 0.5em 2em;

  .logo-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    > * {
      margin-left: 0.5em;
    }
  }

  img {
    width: 5%;
    height: 5%;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    list-style-type: none;

    align-self: center;
    align-items: center;

    white-space: nowrap;
    margin: 0 0.5em;

    li {
      margin: 0 0.5em;
    }
    .divider_sign {
      margin: 0 -0.2em;
      cursor: pointer; 
      transition: transform 0.3s ease;
    }
    .divider_sign:hover {
      animation: ${rotateAnimation} 0.3s linear; 
    }
  }

  a {
    padding: 0.5em;
    background-color: transparent;
    text-decoration: none;
    color: white;
    transition: all 0.4s ease;
    position: relative;
    display: inline-block;

    &:hover,
    &:active {
      letter-spacing: 5px;
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 0%;
      height: 1px; 
      background-color: white;
      transition: all 280ms ease-in-out;
    }

    &:before {
      top: -4px; 
    }

    &:after {
      bottom: -4px;
    }

    &:hover:before,
    &:hover:after {
      width: 100%;
    }
  }

  .active {
    border-radius: 5px;
    background-color: white;
    color: black;
  }

  h1 {
    font-size: larger;
    color: black;
  }

  h2 {
    &:hover {
      animation: ${libraryHeadingAnimation} 0.5s ease;
    }
  }
  }
`;
