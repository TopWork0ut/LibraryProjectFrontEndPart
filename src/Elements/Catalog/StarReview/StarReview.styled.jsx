import styled from "styled-components";

const StarReviewContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  
  .stars {
    display: flex;
  }
  
  .star {
    font-size: 1rem;
    color: gray;
    margin: 0 0.1rem;
  }
  
  .star.filled {
    color: gold;
  }
  
  .description {
    /* font-size: 1rem; */
  }
`
export default StarReviewContainer;