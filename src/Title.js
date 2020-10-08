import React from "react";
import styled from "styled-components"
import "./App.css";

const StyledTitle = styled.div`
    color: royalblue;
    font-weight: bold;
    font-size: 2rem;
    text-decoration: underline;
`;

export default function Title() {
        
    return (
        <StyledTitle className="title">
            <h1>NASA APOD APP <span role="img" aria-label='Rocket'>🚀</span></h1>
        </StyledTitle>
    )
}