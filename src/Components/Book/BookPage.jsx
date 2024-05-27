import { NavLink, useNavigate, useParams } from "react-router-dom";
import {BookInfoWrapper, BookPageContainer, ContainerCharacteristicsStyled, FooterBook} from "../../Styles/BookPage/BookPage.styled";
import { useContext, useEffect, useState } from "react";
import { BooksContext } from "../../Elements/BookContext/BookListContext";
import ButtonGeneralStyled from "../../Elements/ButtonGeneral/ButtonGeneral.styled";
import { HttpMethods } from "../../requests/HttpMethods";
import Request from "../../requests/Request";
import Image from "../../Images/General/opened-book-image.svg";
import { LoginStatus } from "../../requests/LoginStatus";



export default function BookPage() {
    let { id } = useParams();
    const [book, setBook] = useState({});
    let booksList = useContext(BooksContext);
    const navigate = useNavigate();

    const bookFound = booksList.find(bookF => bookF.id === parseInt(id));

    useEffect(()=>{

      async function init(){
        // setBook(bookFound);
        let res = await Request.sendRequest(`/book/${id}`, HttpMethods.GET)
        setBook(res)
        console.log(res)
        console.log(book)
      }
      
      init()
    }, []); 

    
    function borrowBook() {
      const loggedUser = LoginStatus.getLoginStatus()

      async function a() {
        const book1 = await Request.sendRequest(`/book/${id}`, HttpMethods.GET)
        if(book1.bookStatus == "IS_AVAILABLE"){
          const dbUser = await Request.sendRequest(`/user/byEmail/${loggedUser.email}`, HttpMethods.GET)
          await Request.sendRequest("/user-borrow/", HttpMethods.POST, {
            user: {
              id: dbUser.id
            },
            book: {
              id: id
            },
            issueDate: Date.now(),
            deadlineDate: new Date(Date.now() + 10)
          })
        }
      };

      a()

      navigate(`/user/${loggedUser.email}`)
    };
    


    return (
        <BookPageContainer>
          <BookInfoWrapper>        
            <div className="classBookDescription">
                
                <img src={Image} alt="book"/>
                <div className="info">
                    <ContainerCharacteristicsStyled>  
                        <h1>Welcome to the page of book: {book.title}</h1>
                        <h3>Author: {
                            typeof book.authors !== 'undefined' ? 
                            book.authors[0].firstName + " " + book.authors[0].lastName : 
                            "null"
                          }</h3>  
                    </ContainerCharacteristicsStyled>
                    <h3>About the book:</h3>
                    <h4>Genre of the book: {book.genre}</h4>
                    <p>{book.description}</p>
                    
                </div>
            </div>

            <FooterBook>
                <div className="buttons-footer">
                    <ButtonGeneralStyled onClick={borrowBook}>Add Book to My Account</ButtonGeneralStyled>
                    <NavLink className="view-more" to="/">Go Back</NavLink>
                    {/* <button onClick={()=>{navigate("/catalog");dispatch(addbookToCart(book))}}>Add Book to My Accound</button> */}
                </div>            
            </FooterBook>

          </BookInfoWrapper>
        </BookPageContainer>
      )
}