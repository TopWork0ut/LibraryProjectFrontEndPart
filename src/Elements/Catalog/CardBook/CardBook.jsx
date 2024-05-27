import React from 'react';
import CardBookStyled from './CardBook.styled';
import { NavLink } from 'react-router-dom';

const CardBook = (props) => {
    return(
    <CardBookStyled>
        <img src={props.image} alt="book"/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <footer>
            <p><b>{props.author}</b></p>
            {/* <button><NavLink key={props.id} className="view-more-link" to={`/book/${props.id}`}>View more</NavLink></button> */}
            {/* <button className="view-more"><NavLink key={props.id} className="view-more-link" to={`/book/${props.id}`}>View more</NavLink></button> */}
            <NavLink key={props.id} className="view-more-link" to={`/book/${props.id}`}>View more</NavLink>
            {/* <button className="view-more">View more</button> */}
        </footer>
    </CardBookStyled>
);  
};

export default CardBook;

