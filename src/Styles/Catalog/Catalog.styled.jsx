import styled from "styled-components";

export const CatalogContainer = styled.div`
    display: flex;
    flex-direction: column;
    //justify-content: space-between; */
    /* align-items: center; */
    font-size: large;
    /* padding: 0.5em 2em; */
    width: 100vw;
    background-image: url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
    background-size: cover;
    background-position: center;
    position: relative;
`
export const CatalogWrapper = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: large;
    padding: 0.5em 2em;
`
export const FilterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1em 5em;
    background: linear-gradient(to bottom, #240fe4e1, #5566ffe1);

    .search_by_name{
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill-rule='evenodd'%3E%3Cpath d='M16.036 18.455l2.404-2.405 5.586 5.587-2.404 2.404zM8.5 2C12.1 2 15 4.9 15 8.5S12.1 15 8.5 15 2 12.1 2 8.5 4.9 2 8.5 2zm0-2C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zM15 16a1 1 0 1 1 2 0 1 1 0 1 1-2 0'%3E%3C/path%3E%3C/svg%3E") 4% / 6% no-repeat, white;
        padding-left:2em;
        border-radius: 1em;
        /* color: #fff; */
    }
    
    .filters{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    select {
        padding: 0.5em 4em 0.5em 0;
        margin: 0.5em;
    }

    button {
        padding: 0.5em 2em;
        border: 1px solid darkgrey;
        border-radius: 1em;
    }
`