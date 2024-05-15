import styled from "styled-components";

export const HomeContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /*
    #B82601 - red
    #813722 - (фіолетовий)
    #062F4F - Blue
    */
    

    hero{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        /* background-image: linear-gradient(to bottom right,#062F4F,#813722); */
        /* background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(69,69,237,1) 35%, rgba(0,212,255,1) 100%); */
        background: radial-gradient(circle, rgba(181,94,199,1) 0%, rgba(10,67,131,1) 100%);
        
        width: 100%;
        height: 100vh;
        
        > *{
            width: max-content;
            margin: 5em;
        }

        > img {
            /* margin: 2em; */
            border-radius: 0 !important;
        }
    }
    
    .heroText {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin: 0 1em;
        
        //text-shadow: 0.5px black;
        color: whitesmoke;

        p {
            max-width: 40vw;
            line-height: 1.5em;
            text-align: justify;
            margin-bottom: 2em;
        }
    }
`;
