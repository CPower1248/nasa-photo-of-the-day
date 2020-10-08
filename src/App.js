import React, { useState } from "react";
// import Axios from "axios";
import APOD from "./APOD";
import "./App.css";

function App() {
  const [ dataAPOD, setDataAPOD ] = useState({})
  // const [ dataButton, setDataButton ] = useState({})
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <h1>NASA APOD App</h1>
      <APOD dataAPOD={dataAPOD} setDataAPOD={setDataAPOD} />
      <p>{dataAPOD.explanation}</p>
      {/* <Button dataButton={dataButton} setDataButton={setDataButton} /> */}
      <a href="https://www.nasa.gov/" rel="noopener noreferrer" target="_blank"><button>Visit NASA</button></a>
    </div>
  );
}

export default App;
