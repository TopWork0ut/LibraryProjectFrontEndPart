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
    flex-direction: column;
    font-size: small;
    overflow: hidden;
    background: #fffffff9;
    align-items: center;
    justify-content: space-between;
    margin: 0 3%;
    padding: 2em;
    height: 100%;
    width: 80%;
    .classBookDescription{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
        border-bottom: 1px solid #093650 ;
    }
    .info{
        display: flex;
        flex-direction: column;
        align-items: flex-start;

    }
    img{
        width: 30%;
        margin-right: 3em;
    }
    

    h2{
        align-self: left;
        margin-top: 2em;
        margin-bottom: 2em;
        line-height: 0.25em;
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
    
    p{
        color: #000;
        margin: 0.5em;
        span {
            background: lightcoral;
            border-radius: 0.5em;
            color: white;
            border: 0;
            padding: 0.5em 1em;
        }
    }
`

export const FooterBook = styled.div`
    margin-top: 7em;
    margin-bottom: 1em;
    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    
    .buttons-footer{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 80%;

        > button{
        margin:0 0.5em;
        padding: 0.5em;
    }
    }


`