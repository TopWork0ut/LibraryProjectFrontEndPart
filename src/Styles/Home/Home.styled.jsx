import styled, { keyframes } from "styled-components";

const moveChevron = keyframes`
    25% {
      opacity: 1;
    }
    33.3% {
      opacity: 1;
      transform: translateY(10px);
    }
    66.6% {
      opacity: 1;
      transform: translateY(20px);
    }
    100% {
      opacity: 0;
      transform: translateY(6px) scale(0.5);
    }
`;
export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /*
    #B82601 - red
    #813722 - (фіолетовий)
    #062F4F - Blue
    */

  hero {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    /* background-image: linear-gradient(to bottom right,#062F4F,#813722); */
    /* background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(69,69,237,1) 35%, rgba(0,212,255,1) 100%); */
    background: radial-gradient(
      circle,
      rgba(181, 94, 199, 1) 0%,
      rgba(10, 67, 131, 1) 100%
    );

    width: 100%;
    height: 550px;

    > * {
      width: max-content;
      margin: 5em;
    }

    > img {
      /* margin: 2em; */
      border-radius: 0 !important;
    }
  }

  .heroText {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0 1em;
    color: whitesmoke;

    p {
      max-width: 40vw;
      line-height: 1.5em;
      text-align: justify;
      margin-bottom: 2em;
    }
  }
  .CatalogHeader {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #093650;
    font-size: 30px;
    font-weight: bold;

    .container {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      margin-left: 10px;
      height: 100px; 
    }

    .firstPart {
      position: relative;
      height: 5px; 
      width: 30px;
      opacity: 0;
      transform: scale(0.3);
      margin-bottom: 20px;
      animation-fill-mode: forwards; 
      animation: ${moveChevron} 3s ease-out infinite;

      &:before,
      &:after {
        content: "";
        position: absolute;
        top: 0;
        height: 100%;
        width: 50%;
        background: #2c3e50;
        
      }

      &:before {
        left: 0;
        transform: skewY(30deg);
      }

      &:after {
        right: 0;
        width: 50%;
        transform: skewY(-30deg);
        animation-delay:6s;
      }
    }

    .secondPart {
      position: relative;
      height: 5px; 
      width: 30px;
      opacity: 0;
      transform: scale(0.3);
      margin-bottom: 20px;
      animation-fill-mode: forwards; 
      animation: ${moveChevron} 3s ease-out 1s infinite; 

      &:before,
      &:after {
        content: "";
        position: absolute;
        top: 0;
        height: 100%;
        width: 50%;
        background: #2c3e50;
      }

      &:before {
        left: 0;
        transform: skewY(30deg);
      }

      &:after {
        right: 0;
        width: 50%;
        transform: skewY(-30deg);
        animation-delay:9s;
      }
    }

    .thirdPart {
      position: relative;
      height: 5px; 
      width: 30px; 
      opacity: 0;
      transform: scale(0.3);
      margin-bottom: 20px;
      animation: ${moveChevron} 3s ease-out 2s infinite;

      &:before,
      &:after {
        content: "";
        position: absolute;
        top: 0;
        height: 100%;
        width: 50%;
        background: #2c3e50;
      }

      &:before {
        left: 0;
        transform: skewY(30deg);
      }

      &:after {
        right: 0;
        width: 50%;
        transform: skewY(-30deg);
        animation-delay:12s;
      }
    }
  }
}
`;
