import React from 'react'
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';



function App() {
  const[name,setName]=useLocalStorage('username','')
  const[Id,setId]=useLocalStorage('useid','')
// const[name,setName]=useState(
//   localStorage.getItem('username')?
//   localStorage.getItem('username'):''
// )
//  useEffect(()=>{
//   localStorage.setItem('username',name)
//  },[name])
  return (
    <>
   <input type='text' placeholder='Enter yout name' value={name} onChange={(e)=>setName(e.target.value)}/>
   <h2>Hello,{name}!</h2>
   <input type='text' placeholder='Enter yout id' value={Id} onChange={(e)=>setId(e.target.value)}/>
   <h2>Hello,{Id}!</h2>

   
    </>
  );
}

export default App;
