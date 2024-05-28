import Home from "./Components/Home/Home";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import OuterHeader from "./Components/Home/OuterHeader";
import Footer from "./Components/Home/Footer";
import Details from "./Components/Home/Details";
import GetAccessToken from "./requests/GetAccessToken";
import Logout from "./requests/Logout";
import BookPage from "./Components/Book/BookPage";
import UserPage from "./Components/User/UserPage";
import UserReports from "./Elements/UserReports/UserReports";

function App() {
  return (
    <Router>
      <OuterHeader/>
        <div className = "PageWrapper">
          <Routes> 
            <Route path="/" element={<Home />}/>
            <Route path="/details" element={<Details />}/>
            <Route path="/get-access-token-by-code" element={<GetAccessToken />}/> 
            <Route path="/logout" element={<Logout />}/> 
            <Route path= "/book/:id" element ={<BookPage/>} />
            <Route path= "/user/:id" element ={<UserPage/>} />
            <Route path= "/report/:id" element ={<UserReports/>} />
            {/*<Route path="/login" element={<SignIn />}/> 
            <Route path="/sign-up" element={<SignUp />}/>  */}
            {/* <Route path="/user" element={
                <Provider store ={store}>
                  <User />
                </Provider>}
            />  */}
          </Routes>
        </div>
      <Footer/>
    </Router>
  );
  //<Home />;
}



export default App;
