import React from 'react'
import './styles/Meditate.css';
import forest from './images/forest.jpg';
import rain from './images/rain.jpg';
import waterfall from './images/waterfall.jpg';
import om from './images/om.png';
import astral_traveller from './images/astral-traveller.jpg';
import moon from './images/moon.jpg';
import spring_time from './images/spring-time.jpg';
import starry_night from './images/starry-night.jpg';
import starry_night2 from './images/starry-night2.jpg';
import fields from './images/fields.jpg';
import Rain from './Rain';
// import { Card } from 'react-bootstrap';



function Meditate() {

    // const [card, cardSelector] = useState('meditate');
    // const [close, closeClicked] = useState(false);

    // useEffect(() => {
    //     closeClicked(false)
    //     console.log("Close state in Meditate: " + close);
    // }, [close])


    const buttonClicked = (select) => {

        // var med = document.getElementById('meditate');
        // var selector = document.getElementById(select);

        // cardSelector(select);
        console.log("Selected ID value " + select);
        var med = document.getElementById('meditate');
        var selector = document.getElementById(select);
        // console.log("Selector value " + selector);
        // // console.log(selector.id);
        if(selector.style.display === "none"){
           med.style.display = "none";
            selector.style.display = "flex";
            console.log("It's raining" );
        }
    }

    // const changeCloseState = (closeState) => {
    //     closeClicked(closeState)
    // }

    return (
        <div>
             <div id="meditate" className="meditate">
            
                <div className="mhead">
                    <p id="head">Meditate</p>
                </div>
                
                 <div className="cardHolder" id="cardHolder">

                    <div class="card text-white mb-3" style={{width: "18rem"}}>
                        <img src={rain} class="card-img-top" alt="..." />
                        <button id="r" class="card-body"
                        onClick = {() => buttonClicked("rain")}>
                            <p class="card-text">Rain</p>
                        </button>
                    </div>

                    <div class="card text-white mb-3" style={{width: "18rem"}}>
                        <img src={forest} class="card-img-top" alt="..." />
                        <button id="f" class="card-body">
                            <p class="card-text">Forest</p>
                        </button>
                    </div>

                    <div class="card text-white mb-3" style={{width: "18rem"}}>
                        <img  src={waterfall} class="card-img-top" alt="..." />
                        <button id="w" class="card-body">
                            <p class="card-text">Waterfall</p>
                        </button>
                    </div>

                    <div class="card text-white mb-3" style={{width: "18rem"}}>
                        <img src={om} class="card-img-top" alt="..." />
                        <button id="o" class="card-body">
                            <p class="card-text">Om</p>
                        </button>
                    </div>

                    <div class="card text-white mb-3" style={{width: "18rem"}}>
                        <img src={astral_traveller} class="card-img-top" alt="..." />
                        <button id="a" class="card-body">
                            <p class="card-text">Astral Travel</p>
                        </button>
                    </div>
                    
                    <div class="card text-white mb-3" style={{width: "18rem"}}>
                        <img src={moon} class="card-img-top" alt="..." />
                        <button id="m" class="card-body">
                            <p class="card-text">Deep Sleep</p>
                        </button>
                    </div>

                    <div class="card text-white mb-3" style={{width: "18rem"}}>
                        <img src={spring_time} class="card-img-top" alt="..." />
                        <button id="spring" class="card-body">
                            <p class="card-text">Spring Stuff</p>
                        </button>
                    </div>

                    <div class="card text-white mb-3" style={{width: "18rem"}}>
                        <img src={starry_night} class="card-img-top" alt="..." />
                        <button id="stars" class="card-body">
                            <p class="card-text">Restful Sleep</p>
                        </button>
                    </div>

                    <div class="card text-white mb-3" style={{width: "18rem"}}>
                        <img src={fields} class="card-img-top" alt="..." />
                        <button id="fields" class="card-body">
                            <p class="card-text">Farms and Fields</p>
                        </button>
                    </div>

                    <div class="card text-white mb-3" style={{width: "18rem"}}>
                        <img src={starry_night2} class="card-img-top" alt="..." />
                        <button id="stars2" class="card-body">
                            <p class="card-text">Drifting Off with Gratitude</p>
                        </button>
                    </div>
           </div>
        </div>

       
        <div id="rain" style={{display:"none"}}> <Rain/> </div>
      
        </div>
        
    )
}

export default Meditate
