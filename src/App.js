import React, { useState } from "react";
import Title from "./Title"
import APOD from "./APOD";
import Button from "./Button"
import "./App.css";

function App() {
  const [ dataAPOD, setDataAPOD ] = useState({})
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Title />
      <APOD dataAPOD={dataAPOD} setDataAPOD={setDataAPOD} />
      <Button />
    </div>
  );
}

export default App;
