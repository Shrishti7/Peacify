//import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import './App.css';
import DeepBreath from './components/DeepBreath';
import Home from './components/Home';


const App = () => {

  const [breath, breathDone] = useState(true);
  // const [className, setClassName] = useState('App')
  // const [ comp, setComp] = useState('DeepBreath')

  //Calling the renderBreath function on Mounting of App.js
    useEffect(() => {
      renderBreath();
    }) 
    

  var renderBreath = () =>
  {
    //Setting breathDone state to false after Interal of 4 sec
    try {
      const timer = setInterval(() => {
        breathDone(false);
      }, 4000)

      console.log(breath)
      return () => clearInterval(timer);


      // const tiner1 = setInterval(() => {
      //   var bground = document.getElementById('bg');
      //   bground.style.backgroundImage677888888888878 = (linear-gradient(to top, rgb(248, 103, 103), rgb(241, 175, 103)));
      // }, 1000)
    }
    catch(e){
      console.log("Error: " + e)
    }
  }
  

    if(!breath){
      return(
        <div><Home /></div>
      )
    }
    else {
      return(
        <div id="db"><DeepBreath/></div>
      )
    }
}

export default App;









// return ( {breath} ? <div className="App"><DeepBreath/></div> 
  // : <div className="Home"><NavBar/></div>);





// return( 
//       <div>
//             {/* /*Conditionally Rendering DeepBreath for 4 seconds 
//             while breathDone changes from true to false*/}
//             if({breath})
//             { 
              
//             }
//             else 
//             {
             
//             }
            
//       </div>
//   )
  
//}
