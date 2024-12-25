import React, { useEffect, useRef, useState } from 'react'
import './App.css';



function App() {
 const inputElement=useRef();
const btnclicked=()=>{
  
  inputElement.current.style.background="red"
}
 
  return (
    <>
    <input type='text' ref={inputElement}/>
    <button onClick={btnclicked}>click here</button>
    </>
  );
}

export default App;
