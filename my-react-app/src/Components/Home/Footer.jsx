import {FooterContainer,FooterSocailMedia,FooterText} from "../../Styles/Footer/Footer.styled";
import logo from "../../Images/General/library-book-svgrepo-com.svg";
import facebook from "../../Images/General/facebook.svg"
import twitter from "../../Images/General/twitter.svg"
import linkedIn from "../../Images/General/linkedIn.svg"
import instagram from "../../Images/General/instagram.svg"


export default function Footer (){
    return (
        <FooterContainer>
            <div className="container-footer-inner">
            <FooterText>
                <h2>This is a Library project app</h2>
                <p> Here you can find the book to your liking.
                </p>
            </FooterText>
            <img src={logo} alt="logo"/>
            <FooterSocailMedia>
                <a href="https://www.facebook.com/">
                    <img src={facebook} alt="Facebook"/>
                </a>
                <a href="https://twitter.com/">
                    <img src={twitter} alt="Twitter"/>
                </a>
                <a href="https://www.linkedin.com/">
                    <img src={linkedIn} alt="LinkedIn"/>
                </a>
                <a href="https://www.instagram.com/">
                    <img src={instagram} alt="Instagram"/>
                </a>
            </FooterSocailMedia>
            </div>
            <hr/>
            <p>2024 IoT © Copyright all rights reserved, NASYP&Co</p>
        </FooterContainer>  
    );
};