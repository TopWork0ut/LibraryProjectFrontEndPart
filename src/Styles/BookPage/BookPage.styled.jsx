import styled from "styled-components";

export const BookPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    //justify-content: space-between; */
    align-items: center;
    font-size: large;
    /* padding: 0.5em 2em; */
    
    width: 100vw;
    height: 70vh;

    background-image: url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
    background-size: cover;
    background-position: center;
    position: relative;
    
`

export const BookInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;    
    align-items: center;
    align-self: center;
    justify-content: center;

    height: 100%;
    max-width: 80vw;
    padding: 2em;

    overflow: hidden;
    background: #fffffff9;
    font-size: small;

    .box-image{
        border: 2px solid #000;
        /* height: 20em; */
    }
    img{
        max-width: 90%;
        max-height: 90%;
        margin-right: 3em;
        
        object-fit: contain;
    }
`

export const BookTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 3em;
    border-left: 1px solid #093650 ;
    width: max-content;
    
    .classBookDescription{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
        padding-bottom: 1em;
        border-bottom: 1px solid #093650 ;
    }

    .info{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .rating-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }    

    p{
        text-align: justify;
    }

    
    .view-more {
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
    font-weight: bold;
    transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;

    &:hover {
      color: #f5f2eb;
      background-color: #093650;
      border: 2px solid #093650;
    }
  }

`
  
export const ContainerCharacteristicsStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-self: center;
    
    padding: 0.5em;
    width: 80%;

    border: 2px solid gray;
    /* border-radius: 2em; */
    background-color: #121024;

    color: whitesmoke;

    h2{
        align-self: left;
    }
`

export const FooterBook = styled.div`
    margin-top: 5em;
    margin-bottom: 1em;
    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    
    .buttons-footer{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        /* width: 90%; */

        > button{
        margin:0 0.5em;
        padding: 0.5em;
    }
    }
`