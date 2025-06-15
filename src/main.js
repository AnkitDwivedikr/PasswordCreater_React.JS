import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator(){

    const[password, SetPassword] = useState("Ankit@587$Dwivedi");
    const[length, SetLength] = useState(10);
    const[numberChange, SetnumberChange] = useState();
    const[charChange, SetcharChange] = useState();

    const generatepassword = useCallback(()=>{
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberChange)
        str += "0123456789";
    if(charChange)
        str += "~@!#$%&^-+";

    let pass = ""

    for(let i=0; i<length; i++){
        pass += str[Math.floor(Math.random()*str.length)]
    }
    
    SetPassword(pass);
    },[length, numberChange, charChange]);
    
    useEffect(()=>{
         generatepassword();
    },[length, numberChange, charChange])

    return(
         <>
         <h1>password: {password}</h1>

          <div className="container">
          <input type = "range" min={5} max={50} value={length} onChange={(e)=>SetLength(e.target.value)} ></input>
          <label>length({length})</label>

          <input type = "checkbox" defaultChecked={numberChange} onChange={()=> SetnumberChange(!numberChange)}></input>
          <label>Number</label>

          <input type = "checkbox" defaultChecked={charChange} onChange={()=> SetcharChange(!charChange)}></input>
          <label>Special Char</label>
          <div>
          <button onClick={generatepassword}>Generate Password</button>
          </div>
          </div>
         </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);
