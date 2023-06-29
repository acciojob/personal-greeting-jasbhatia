
import React ,{useState}from "react";
import './../styles/App.css';

const App = () => {
 const [state,setState]=useState("")
  return (
    <div>
        <p>Enter your name</p>
        <input type="text" placeholder="name" value={state} onChange={(e)=>(setState(e.target.value))} />
        <p>{state}</p>

    </div>
  )
}

export default App
