import React from 'react';
import CardBookStyled from './CardBook.styled';

const CardBook = (props) => {
    return(
    <CardBookStyled>
        <img src={props.image} alt="book"/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <footer>
            <p><b>{props.author}</b></p>
            <button className="view-more">View more</button>
        </footer>
    </CardBookStyled>
);  
};

export default CardBook;

