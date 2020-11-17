import React, { useState } from "react";
import Title from "./Title"
import APOD from "./APOD";
import Button from "./Button"
import "./App.css";

function App() {
  const [ dataAPOD, setDataAPOD ] = useState({})
  return (
    <div className="App">
      <Title />
      <APOD dataAPOD={dataAPOD} setDataAPOD={setDataAPOD} />
      <Button />
    </div>
  );
}

export default App;
