import { NavLink, useParams } from 'react-router-dom'; // Assuming you are using react-router for routing
import { BooksContext } from '../../Elements/BookContext/BookListContext';
import { LinkViewMore } from '../../Styles/NavLinkViewMore/NavLinkViewMore.styled';
import { BooksReportWrapper, UserPageContainer, UserWrapper } from '../../Styles/UserPage/UserPage.styled';
import { useContext, useEffect, useState } from 'react';
import Loader from '../../Elements/Loader/Loader.styled';
import ButtonGeneralStyled from '../../Elements/ButtonGeneral/ButtonGeneral.styled';

// const fetchUserById = async (id) => {
//     // Replace with your actual API endpoint
//     const response = await fetch(`https://api.example.com/users/${id}`);
//     if (!response.ok) {
//       throw new Error('Network response was not ok - couldnt connect to source');
//     }
//     return response.json();
// };

export default function UserPage() {
    const { userId } = useParams();
    const books  = useContext(BooksContext);
    // const [book,setBook] =useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const getUser = async () => {
        try {
        //   const userData = await fetchUserById(userId); 
        let userData = {
            "name":"John",
            "email":"johnmail@mail.com",
        }
          setUser(userData);
        } catch (err) {
            setError(err.message);
        } finally {
            setTimeout(() => {
                setLoading(false);
              }, 2000);            
        }
      };
      getUser();
    }, [userId]);
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    if (!user) {
      return <div>User not found</div>;
    }
  
    // Get the list of books for this user
    //const userBooks = books.filter(book => user.books.includes(book.id));
    let userBooks = books;

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
            <h2>Welcome to your profile, {user.name}</h2>
            <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                <h2>User Details</h2>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <LinkViewMore>
                    <NavLink className="view-more" to="/">Go Back</NavLink>
                </LinkViewMore>
              {/* Place for more user details*/}
            </div>
          </UserWrapper>
          <BooksReportWrapper>
            <h2>{user.name}'s Book List</h2>
            {userBooks.map((book) => (
                <div className="report-card" key={book.id} >
                    {/* <img src={book.image} alt={book.title} style={{ width: '150px', height: '150px' }} /> */}
                    <h2>{book.title}</h2>
                    <p>{book.description}</p>
                    <p><strong>Author:</strong> {book.author}</p>
                    <p><strong>Genre:</strong> {book.genre}</p>
                    <ButtonGeneralStyled>Change the status</ButtonGeneralStyled>
                </div>
            ))}
          </BooksReportWrapper>
        </UserPageContainer>
       );
    }
}