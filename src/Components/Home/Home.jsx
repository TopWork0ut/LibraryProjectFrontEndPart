import HeroMenu from "./HeroMenu";
import Header from "./OuterHeader";
import BookListing from "./BookListing";
import Footer from "./Footer";
import { ClassicButton } from "../../Elements/General/ClassicButton.styled";
import ImageLibrary from "../../Images/General//library-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
import { HomeContainer } from "../../Styles/Home/Home.styled";
import Catalog from "../../Elements/Catalog/Catalog";
import { useEffect } from "react";
import { LoginStatus } from "../../requests/LoginStatus";
import { HttpMethods } from "../../requests/HttpMethods";
import Request from "../../requests/Request";



export default function Home(){
  const navigate = useNavigate()

  useEffect(() => {
    const loggedUser = LoginStatus.getLoginStatus()

    if(loggedUser.email != null){
      async function init(){
        try{
          let user = await Request.sendRequest(`/user/byEmail/${loggedUser.email}`, HttpMethods.GET)
          console.log(user)
        } catch (error){
          // if(error.response.status === 500){
            let registeredUser = await Request.sendRequest(`/user/`, HttpMethods.POST, {
              firstName: loggedUser.firstName,
              lastName: loggedUser.lastName,
              email: loggedUser.email,
              userCategory: {
                id: 1
              },
              middleName: "",
              phoneNumber: "",
              balance: 1000.0
          // })

          
          })
          
        }
        
      }
  
      init()
    }
    
  });

  return (
      <HomeContainer>
          <hero>
            <img src={ImageLibrary} alt="Image Library" style={{borderRadius:"50%",width:"20em"}}/>
              <div className="heroText" >
                  <h1>Welcome to the Library Project official page!</h1>
                  <p> 
                  Explore our digital catalog featuring a diverse range of genres, 
                  from timeless classics to the latest bestsellers. Dive into topics spanning literature, 
                  science, history, technology, and more, curated to satisfy every intellectual curiosity.

                  Experience the convenience of our user-friendly interface,
                  designed to streamline your search for the perfect read.
                  With advanced search options and personalized recommendations, 
                  finding your next literary adventure has never been easier.
                  </p> 
                  <ClassicButton onClick={()=>navigate("/details")}>Get Started</ClassicButton>
              </div>
          </hero>
          <Catalog/>
      </HomeContainer>  
  );
};
