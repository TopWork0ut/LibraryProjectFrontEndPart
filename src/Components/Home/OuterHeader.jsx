import {HeaderContainer} from "../../Styles/Header/Header.styled";
import logo from "../../Images/General/library-book-svgrepo-com.svg";
import {
    NavLink,
  } from "react-router-dom";


export default function OuterHeader(){
    return (
            <HeaderContainer>
                <div className="logo-container">
                    <img src={logo} alt="Logo"/>
                    <h2>Library</h2>
                </div>
                <ul>
                    <li>
                        <NavLink end exact to="/" className={({ isActive }) => (isActive ? 'active' : "link")}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink end exact to="/details" className={({ isActive }) => (isActive ? "active" : "link")}>About Us</NavLink>
                    </li>
                    <li>
                    <NavLink end exact to="/login"  className={({ isActive }) => (isActive ? "active" : "link")}>Log In</NavLink>
                    </li>
                    <li className="divider_sign">/</li>
                    <li>
                    <NavLink end exact to="/sign-up" className={({ isActive }) => (isActive ? "active" : "link")}>Sign Up</NavLink>
                    </li>
                </ul>
            </HeaderContainer> 
    );
};

