import styled from "styled-components";

export const DetailsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 5em;
    /*
    #B82601 - red
    #813722 - (фіолетовий)
    #062F4F - Blue
    */

    background-image: url(https://images.unsplash.com/photo-1536965764833-5971e0abed7c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
    background-size: cover;
    background-position: center;
    position: relative;
	height: 140vh;
	

    
    .container{
    	padding: 2em;
    	border-radius: 1em;
        border: 2px solid;
    	box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
    	/* background-color: rgba(0, 0, 0, 0.80);  */
        /* background-color: rgba(0, f, f, 0.8);   */
        //background-color: rgb(255, 255, 255);
        background: linear-gradient(270deg,rgba(238,174,181,1) 0%, rgba(148,187,233,1) 100%);

    }

    .infoWrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin: 0 1em;
        
//        text-shadow: 1px 1px black;
        //color: whitesmoke;
        color: #1c232b;

        p {
            max-width: 40vw;
            line-height: 1.5em;
            text-align: justify;
            margin-bottom: 2em;
        }
    }
`;
