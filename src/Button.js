import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function Button (props) {
    const { dataButton, setDataButton } = props;

    setDataButton()
    
    return (
        <div className="NASA-Button">
            <h2>Want to see more from NASA</h2>
            <a href="{dataButton}"><button>Visit NASA</button></a>
        </div>
        // <div className='container'>
        //   <h2>Details (of friend with id {friendId}):</h2>
        //   {
        //     details &&
        //     <>
        //       <p>{details.name} is {details.age}</p>
        //       <p>email is {details.email}</p>
        //       {name} likes:
        //       <ul>
        //         {
        //           details.hobbies.map((hobby) => <li key={hobby}>{hobby}</li>)
        //         }
        //       </ul>
        //     </>
        //   }
        //   <button onClick={close}>Close</button>
        // </div>
    )
}