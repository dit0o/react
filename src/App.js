import React, { useEffect, useMemo, useRef, useState } from 'react'
import './App.css';



function App() {
  const [number, setNumber] = useState(0)

  const [counter, setCounter] = useState(0)
  function cubeNum(num) {
    console.log("calculation done")
    return Math.pow(num, 3)
  }
  const result = useMemo(()=>{return cubeNum(number)},[number])
  return (
    <>
      <input type='number' value={number} onChange={(e) => { setNumber(e.target.value) }} />
      <h1>Cube Of the number:{result}</h1>
      <button onClick={() => {
        setCounter(counter + 1)
      }}>countet++</button>
      <h1>Counte:{counter}</h1>
    </>
  );
}

export default App;
