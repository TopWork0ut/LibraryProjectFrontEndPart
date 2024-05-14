import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(9, 54, 80);
    box-shadow: rgb(26 31 51) 0px 0.5rem 1rem 0px;
    color: white;
    font-size: large;
    border: 1px solid whitesmoke;
    padding: 0.5em 2em;

    .logo-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        > *{
            margin-left: 0.5em;
        }
    }

    img {
        width: 5%;
        height: 5%;
    }

    ul{
        display: flex;
        flex-direction: row;
        list-style-type: none;
        
        align-self: center;
        align-items: center;
        
        li{
            margin: 0 0.5em;
        }
        .divider__sign{
            margin: 0 -0.2em;
        }

    }
     
    a {
        padding: 0.5em;
        background-color: transparent;
        
        text-decoration: none;
        color: white;
    }

    .active {
        border-radius: 5px;
        background-color: white;
        color: black;
        
    } 

    h1{
        font-size: larger;
        color : black
    }
`