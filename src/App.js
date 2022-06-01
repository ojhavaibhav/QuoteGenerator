import axios from "axios";
import React, { useState } from "react";
import './App.css'

const App = () => {
  const [state, setState] = useState("vaibhav");

  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((res) => {
      setState(res.data.slip.advice)
    })
    .catch((err) =>{
      console.log(err)
    })
  };

  return (
    <>
      <h1>{state}</h1><br/>
      <button onClick={fetchAdvice}>Get Advice!</button>
    </>
  );
};

export default App;
