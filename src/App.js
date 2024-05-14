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

function App() {
  return (
    <Router>
      <OuterHeader/>
        <div className = "PageWrapper">
          <Routes> 
            <Route path="/" element={<Home />}/> 
            <Route path="/details" element={<Details />}/> 
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
