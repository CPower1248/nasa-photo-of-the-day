import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

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
        <div className="picAPOD">
            <img src={dataAPOD.url} alt="APOD"></img>
        </div>
    )
}
//BASE_URL+API_KEY: https://api.nasa.gov/planetary/apod?api_key=io07wwxX70UZCHzpMvr7i9IQhGug6lw2GjwiZagb