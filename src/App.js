import React, { useState } from 'react'
import './App.css';



function App() {
// const [car,setCar]=useState({
//   brand:"Benz",
//   model:"Roma",
//   year:"2025",
//   color:"red"
// });

// const changeColor=()=>{
//   setCar((prev)=>{
// return {...prev,color:"blue"}
//   })
 //}
 const [count,setCount]=useState(0)
 const increaseCount=(()=>{
  setCount(count+1)
 })
  return (
    <div className="app">
     {/* <h1>My {car.brand}</h1> 
     <p>It is a {car.color} {car.model} from {car.year}</p>
     <button onClick={changeColor}>
      Blue
     </button> */}
     <h1>Count:0</h1>
     <button onClick={increaseCount}>Increase</button>
    </div>
  );
}

export default App;
