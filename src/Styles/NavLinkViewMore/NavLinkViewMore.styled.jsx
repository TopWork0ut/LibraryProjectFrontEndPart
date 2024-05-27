
import styled from "styled-components";

export const LinkViewMore = styled.div`
    .view-more {
        background-color: #e3a805;
        border-radius: 5px;
        text-decoration: none;
        color: #093650;
        border: 2px solid #093650;
        padding: 0.5em 1em;
        display: inline;
        text-align: center;
        line-height: 28px;

        cursor: pointer;
        font-weight: bold;
        transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;

        &:hover {
          color: #f5f2eb;
          background-color: #093650;
          border: 2px solid #093650;
        }
      }
`