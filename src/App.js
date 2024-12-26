import React, { useEffect, useLayoutEffect } from 'react'
import './App.css';



function App() {
  useEffect(()=>{
    console.log("useEffect")
  },[])
  useLayoutEffect(()=>{
    console.log("useLayoutEffect")
  },[])
 
  return (
    <>
    <h2>Test message</h2>
    {Array(400).fill('').map((item,index)=>(
<li key={index}>
  {Math.pow(Math.random,10)}</li>
    ))}
    </>
  );
}

export default App;
