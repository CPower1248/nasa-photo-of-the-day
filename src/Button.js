import React from "react";
import styled from "styled-components"
import "./App.css";

const StyledButton = styled.div`
    h3 {
        color: royalblue;
        font-size: 1.3rem;
        text-decoration: underline;
    }
    button {
        font-size: 1rem;
        margin-bottom: 2%;
        box-shadow: 0px 15px 25px -4px rgba(30,30,60,0.25);
        border-radius: 5px;
        &:hover {
            background-color: royalblue;
            color: white;
            transform: scale(1.25);
            transition: all 0.5s ease-in-out;
        }
        transition: all 0.5s ease-in-out;
    }
`;

export default function Button() {
        
    return (
        <StyledButton className="button-NASA">
            <h3>Want to see more from NASA</h3>
            <a href="https://www.nasa.gov/" rel="noopener noreferrer" target="_blank"><button>Visit NASA</button></a>
        </StyledButton>
    )
}