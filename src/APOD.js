import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components"
import "./App.css";

const StyledAPOD = styled.div`
    img {
        border:2px solid black;
        border-radius: 10px;
        box-shadow: 0px 15px 25px -4px rgba(30,30,60,0.5);
    };
    h2 {
        font-size: 1.75rem;
    }
`;

export default function APOD(props) {
    console.log(props)
    const { dataAPOD, setDataAPOD } = props;
    useEffect(() => {
        const fetchAPOD = () => {
            axios.get("https://api.nasa.gov/planetary/apod?api_key=io07wwxX70UZCHzpMvr7i9IQhGug6lw2GjwiZagb")
                .then(res => {
                    // debugger
                    console.log(res)
                    setDataAPOD(res.data)
                })
                .catch(err => {
                    // debugger
                    console.log(err)
                })
        }
        fetchAPOD()
// eslint-disable-next-line
    },[])

    return (
        <StyledAPOD className="picAPOD">
            <img src={dataAPOD.url} alt="APOD"></img>
            <h2>"{dataAPOD.title}"</h2>
            <p>copyright: {dataAPOD.copyright} | date: {dataAPOD.date}</p>
            <div>
                <p>{dataAPOD.explanation}</p>
            </div>
        </StyledAPOD>
    )
}
//BASE_URL+API_KEY: https://api.nasa.gov/planetary/apod?api_key=io07wwxX70UZCHzpMvr7i9IQhGug6lw2GjwiZagb