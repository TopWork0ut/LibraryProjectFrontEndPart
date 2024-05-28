import { NavLink, useNavigate, useParams } from "react-router-dom";
import {BookInfoWrapper, BookPageContainer, BookTextWrapper, ContainerCharacteristicsStyled, FooterBook} from "../../Styles/BookPage/BookPage.styled";
import { useContext, useEffect, useState } from "react";
import { BooksContext } from "../../Elements/BookContext/BookListContext";
import ButtonGeneralStyled from "../../Elements/ButtonGeneral/ButtonGeneral.styled";
import StarReview from "../../Elements/StarReview/StarReview";


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
            <img className="box-image" src={book.image} alt="book"/>        
            <BookTextWrapper>
              <div className="classBookDescription">
                  <div className="info">
                    <h1>Welcome to the Book Page :</h1>
                      <ContainerCharacteristicsStyled>        
                          <h3>{book.title}</h3>  
                          <p>Author: {book.author}</p>  
                      </ContainerCharacteristicsStyled>
                      <h4>More about this book:</h4>

                      <div className="rating-container">
                        <p>Rating:  </p>
                        <StarReview rating={book.valueRate} showRatioDesc = {true} />
                      </div>

                      <p><b>Genre:</b> {book.genre}</p>
                      <p><b>Security Deposit:</b> {book.securityDeposit}<b>$</b></p>

                  </div>
              </div>

              <FooterBook>
                  <div className="buttons-footer">
                      <ButtonGeneralStyled onClick={()=>{}}>Add Book to My Account</ButtonGeneralStyled>
                      <NavLink className="view-more" to="/">Go Back</NavLink>
                      {/* <button onClick={()=>{navigate("/catalog");dispatch(addbookToCart(book))}}>Add Book to My Accound</button> */}
                  </div>            
              </FooterBook>
            </BookTextWrapper>

          </BookInfoWrapper>
        </BookPageContainer>
      )
}