import { NavLink, useNavigate, useParams } from "react-router-dom";
import {BookInfoWrapper, BookPageContainer, ContainerCharacteristicsStyled, FooterBook} from "../../Styles/BookPage/BookPage.styled";
import { useContext, useEffect, useState } from "react";
import { BooksContext } from "../../Elements/BookContext/BookListContext";
import ButtonGeneralStyled from "../../Elements/ButtonGeneral/ButtonGeneral.styled";


export default function BookPage() {
    let { id } = useParams();
    const [book,setBook] =useState([]);
    let booksList = useContext(BooksContext);
    const navigate = useNavigate();

    const bookFound = booksList.find(bookF => bookF.id === parseInt(id));

    useEffect(()=>{
        setBook(bookFound);
    },[]); 

      // Find the book with the matching id
    


    return (
        <BookPageContainer>
          <BookInfoWrapper>        
            <div className="classBookDescription">
                
                <img src={book.image} alt="book"/>
                <div className="info">
                    <ContainerCharacteristicsStyled>  
                        <h1>Welcome to the page of book: {book.title}</h1>
                        <h3>Author: {book.author}</h3>  
                    </ContainerCharacteristicsStyled>
                    <h3>About the book:</h3>
                    <h4>Genre of the book: {book.genre}</h4>
                    <p>{book.description}</p>
                    
                </div>
            </div>

            <FooterBook>
                <div className="buttons-footer">
                    <ButtonGeneralStyled onClick={()=>{}}>Add Book to My Account</ButtonGeneralStyled>
                    <NavLink className="view-more" to="/">Go Back</NavLink>
                    {/* <button onClick={()=>{navigate("/catalog");dispatch(addbookToCart(book))}}>Add Book to My Accound</button> */}
                </div>            
            </FooterBook>

          </BookInfoWrapper>
        </BookPageContainer>
      )
}