import React from 'react';
import {CardBookStyled,TextWrapper} from './CardBook.styled';
import { NavLink } from 'react-router-dom';
import StarReview from '../StarReview/StarReview';

const CardBook = (props) => {
    return(
    <CardBookStyled>
        <img className="imageNew" src={props.image} alt="book"/>
        <TextWrapper>
            <h3>{props.title}</h3>
            
            <div className="rating-container">
                <h4>Rating: </h4>
                <StarReview rating={props.valueRate} showRatioDesc = {false} />
                <h4>{props.valueRate}/5</h4>
            </div>

            <footer>
                <p>Author: <br/><b>{props.author}</b></p>
                <NavLink key={props.id} className="view-more-link" to={`/book/${props.id}`}>View more</NavLink>
            </footer>
        </TextWrapper>
    </CardBookStyled>
);  
};

export default CardBook;