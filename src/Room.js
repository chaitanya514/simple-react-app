import React, { useState } from "react";
import "./index.css";

const Room = () => {
  const [isLit, setLit] = useState(true);
  const [isOn, setOn] = useState("");
  const [temp,setTemp]= useState(22)
  
  

  const brightness = isLit ? "lit" : "dark";
  

  return (
    <div className={`${brightness}`}>

      <h1> The room is {brightness}</h1>
      {isOn ? <h1>The light is {isOn}</h1> : null}
      <h2>Temperature is {temp}</h2>
      <h1>it's {temp>22 ? "hot":"cool"}</h1>
      

      <button onClick={() => setLit(!isLit)}>Flip</button>
      <button onClick={() => setOn("on")}>ON</button>
      <button onClick={() => setOn("off")}>OFF</button><br />
      <button onClick={()=>setTemp(temp+1)}>+</button>
      <button onClick={()=>setTemp(temp-1)}>-</button>
      
    </div>
  );
};
export default Room;
