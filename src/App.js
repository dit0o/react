import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './App.css';

import Header from './components/Header';

function App() {
  

  const [counter, setCounter] = useState(0)
  const newFunction=useCallback((counter)=>{

  },[counter])
  return (
    <>
    <Header newFunction={newFunction}/>
      <h1>Counte:{counter}</h1>
      <button onClick={()=>{
        setCounter(prev=>prev+1)
      }}>click</button>
    </>
  );
}

export default App;
