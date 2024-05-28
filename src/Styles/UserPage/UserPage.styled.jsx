import styled from "styled-components";

export const UserPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    //justify-content: space-between; */
    align-items: center;
    font-size: large;
    /* padding: 0.5em 2em; */
    
    width: 100vw;
    //height: 70vh;

    background-image: url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
    background-size: cover;
    background-position: center;
    position: relative;
    
`

export const UserWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: small;
    overflow: hidden;
    background: #fffffff9;
    align-items: center;
    justify-content: space-between;
    margin: 0 3%;
    padding: 2em;
    height: 100%;
    width: 80%;
`

export const BooksReportWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: small;
    overflow: hidden;
    background: #fffffff9;
    align-items: center;
    justify-content: space-between;
    margin: 0 3%;
    padding: 2em;
    height: 100%;
    width: 80%;

    .report-card{
        width: 80%;
        border: 1px solid #ccc;
        margin: 10px;
        padding: 10px; 
    }

    .my-row{
        display: flex;
  justify-content: center;
    }
`
