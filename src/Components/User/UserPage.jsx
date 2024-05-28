import { NavLink, useNavigate, useParams } from 'react-router-dom'; // Assuming you are using react-router for routing
import { BooksContext } from '../../Elements/BookContext/BookListContext';
import { LinkViewMore } from '../../Styles/NavLinkViewMore/NavLinkViewMore.styled';
import { BooksReportWrapper, UserPageContainer, UserWrapper } from '../../Styles/UserPage/UserPage.styled';
import { useContext, useEffect, useState } from 'react';
import Loader from '../../Elements/Loader/Loader.styled';
import ButtonGeneralStyled from '../../Elements/ButtonGeneral/ButtonGeneral.styled';
import { LoginStatus } from '../../requests/LoginStatus';
import { HttpMethods } from '../../requests/HttpMethods';
import Request from '../../requests/Request';

// const fetchUserById = async (id) => {
//     // Replace with your actual API endpoint
//     const response = await fetch(`https://api.example.com/users/${id}`);
//     if (!response.ok) {
//       throw new Error('Network response was not ok - couldnt connect to source');
//     }
//     return response.json();
// };



export default function UserPage() {
    const navigate = useNavigate()


    const { userId } = useParams();
    // const books  = useContext(BooksContext);
    const [books, setBooks] = useState([]);
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function init(){
      let rendered = []
      let seenBooks = []
      const loggedUser = LoginStatus.getLoginStatus()
      
      
      const dbUser = await Request.sendRequest(`/user/byEmail/${loggedUser.email}`, HttpMethods.GET)

      let allBooks
      try{
        allBooks = await Request.sendRequest(`/user-borrow/user/${dbUser.id}`, HttpMethods.GET)
      } catch (error){
        allBooks = []
      }
    
      allBooks = allBooks.map(element => {
        return element.book
      })
      .filter(el => el.bookStatus == "IS_BORROWED")
      .map(el => {
        console.log("START  ")
        if (!(seenBooks.includes(el.title))) {
          console.log(el)
          seenBooks.push(el.title)
          rendered.push(el)
        } 
      });
    
      console.log(rendered)

      setUser(loggedUser)
      setBooks(rendered)

    
    }
    
  
    useEffect(() => {
        init()
      // if(!loading){
        // window.location.reload()
        // setLoading(true)
      // }

      // setBooks(f)

    }, []);
  
    // if (error) {
    //   return <div>Error: {error}</div>;
    // }
  
    // if (!user) {
    //   return <div>User not found</div>;
    // }
  
    // Get the list of books for this user
    //const userBooks = books.filter(book => user.books.includes(book.id));
    let userBooks = books;

    async function returnBook(id) {
      let rendered = []
      let seenBooks = []
      const loggedUser = LoginStatus.getLoginStatus()
      
      
      const dbUser = await Request.sendRequest(`/user/byEmail/${loggedUser.email}`, HttpMethods.GET)

      
      try{
        await Request.sendRequest(`/user-return/`, HttpMethods.POST, {
          user: {
            id: dbUser.id
          },
          book: {
            id: id
          }
        })
      } catch (error){
        
      }

      let allBooks
      try{
        allBooks = await Request.sendRequest(`/user-borrow/user/${dbUser.id}`, HttpMethods.GET)
      } catch (error){
        allBooks = []
      }
    
      allBooks = allBooks.map(element => {
        return element.book
      })
      .filter(el => el.bookStatus == "IS_BORROWED")
      .map(el => {
        console.log("START")
        if (!(seenBooks.includes(el.title))) {
          console.log(el)
          seenBooks.push(el.title)
          rendered.push(el)
        } 
      });
    
      console.log(rendered)

      setUser(loggedUser)
      setBooks(rendered)
    };

    if (loading){
      return (
        <UserPageContainer>
          <Loader/>
          <h2 style={{ color: 'white'}}> Loading...</h2>
        </UserPageContainer>)
    }
    else{
      return (
        <UserPageContainer>
          <UserWrapper>
            <h1>User Profile</h1>
            <h2>Welcome to your profile, {user.firstName}</h2>
            <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                <h2>User Details</h2>
                <p><strong>Name:</strong> {user.firstName + " " + user.lastName}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <LinkViewMore>
                    <NavLink className="view-more" to="/">Go Back</NavLink>
                </LinkViewMore>
              {/* Place for more user details*/}
            </div>
          </UserWrapper>
          <BooksReportWrapper>
            <h2>{user.firstName}'s Book List</h2>
            {books.map((book) => 
            (
                <div className="report-card" key={book.id} hidden={book.bookStatus === "IS_AVAILABLE"}>
                    {/* <img src={book.image} alt={book.title} style={{ width: '150px', height: '150px' }} /> */}
                    <h2>{book.title}</h2>
                    <p>{book.description}</p>
                    <p><strong>Author:</strong> {book.authors[0].firstName + " " + book.authors[0].lastName}</p>
                    <p><strong>Genre:</strong> {"book.bookGenres[0]"}</p>
                    <ButtonGeneralStyled onClick={() => {returnBook(book.id)}}>Return book</ButtonGeneralStyled>
                </div>
            ))}
            
            
          </BooksReportWrapper>
        </UserPageContainer>
       );
    }
}
