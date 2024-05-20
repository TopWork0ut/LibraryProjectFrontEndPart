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


// const Home = () => {
//   return (
//     <div>
//       {/* <HeroMenu />
//       <Header />
//       <BookListing />
//       <Footer /> */}
//     </div>
//   );
// };
// export default Home;

export default function Home(){
  const navigate = useNavigate()
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
                  <ClassicButton onClick={()=>navigate("/sign-up")}>Get Started</ClassicButton>
              </div>
          </hero>
          <Catalog/>
      </HomeContainer>  
  );
};