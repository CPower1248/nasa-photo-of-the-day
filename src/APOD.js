import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function APOD(props) {
    console.log(props)
    const { dataAPOD, setDataAPOD } = props;
    useEffect(() => {
        const fetchAPOD = () => {
            axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
                .then(res => {
                    debugger
                    setDataAPOD(res.data)
                    console.log(res)
                })
                .catch(err => {
                    debugger
                    console.log(err)
                })
        }
        fetchAPOD()
    },[])

    return (
        <div className="picAPOD">
            <img src={dataAPOD.url} alt="APOD"></img>
        </div>
    )
}