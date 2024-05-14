import styled from "styled-components";
import CardStyled from "../Card/Card.styled";

const CardBookStyled = styled(CardStyled)`
    border:2px solid rgb(192, 192, 192);
    justify-content: center;
    
    p{
        padding: 0 1em;
    }

    h3 {
        /* width: 100%; */
        align-self: center;
    }

    footer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.5em;
    }
    
    button.view-more{
        background-color: darkslategray;
        border-radius: 5px;
        text-decoration: none;
        color: white;
        border: 0;
        padding: 0.5em 1em;
        cursor: pointer;
    }
`;

export default CardBookStyled;