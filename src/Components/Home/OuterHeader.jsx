import {HeaderContainer} from "../../Styles/Header/Header.styled";
import logo from "../../Images/General/library-book-svgrepo-com.svg";
import {
    NavLink,
  } from "react-router-dom";
import { LoginStatus } from "../../requests/LoginStatus";
import { useState } from "react";


export default function OuterHeader(){
    let value_start = LoginStatus.getLoginStatus();
    const [value, setValue] = useState(value_start);

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
                    { value.email == null ? (
                        <div className="user-info-container" style={{display:"flex",flexDirection:"row",alignItems: "center"}}>
                            <li>
                                <NavLink end exact to="http://localhost:8080"  className={({ isActive }) => (isActive ? "active" : "link")}>Log In</NavLink>
                            </li>
                            <li className="divider_sign">/</li>
                            <li>
                                <NavLink end exact to="http://localhost:8080" className={({ isActive }) => (isActive ? "active" : "link")}>Sign Up</NavLink>
                            </li>
                        </div>) : (
                        <div className="user-info-container">
                            <li>
                                <NavLink end exact to={`/user/${value.email}`} className={({ isActive }) => (isActive ? "active" : "link")}>Profile</NavLink>
                            </li>
                        </div>)
                    }

                </ul>
            </HeaderContainer> 
    );
};
