import React, {  useState, useEffect } from 'react'
import Meditate from './Meditate';
import './styles/Rain.css';

function Rain() {

    const [close, closeClicked] = useState("false");
    console.log("close value in Rain: "+close)

    useEffect(() => {
        if(close === "true") {
            // const closeTimer = setInterval(() => {
            //     closeClicked("false");
            //   }, 2000);
        
            //   console.log("Close in useEffect: " + close)
            //   return () => clearInterval(closeTimer);   
        var r = document.getElementById("rain");
        var m = document.getElementById("meditate");
        r.style.display = "none";
        m.style.display = "flex";
        console.log("Close state when close is clicked: " + close) 
        }
    }, [close]);

    const buttonClick = () => {
        closeClicked("true");
    }

if(close === "false") {
    return (
        <div>
          <div id = "rain">           
              <div><button id="close" onClick={buttonClick}>x</button></div>
              <h1>It's Raining</h1>
          </div>                      
      </div>
  )
}
   else {
       try {
        // var r = document.getElementById("rain");
        // r.style.display = "none";
        // console.log("Close state when close is clicked: " + props.close)
        return ( 
            <div id="meditate" className="meditate"><Meditate/></div> 
            ) 
       }
       catch (e) {
           console.log("Caught error: " + e);
       }
       
        
    }
}

export default Rain
