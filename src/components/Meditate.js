import React from 'react'
import './styles/Meditate.css';
import forest from './images/forest.jpg';
import rain from './images/rain.jpg';
import waterfall from './images/waterfall.jpg';
import om from './images/om.png';

function Meditate() {
    return (
        <div>
           <div className="cardHolder">

                <div class="card text-white bg-dark mb-3" style={{width: "18rem"}}>
                    <img src={forest} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">Rain</p>
                    </div>
                </div>

                <div class="card text-white bg-dark mb-3" style={{width: "18rem"}}>
                    <img src={rain} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">Forest</p>
                    </div>
                </div>

                <div class="card text-white bg-dark mb-3" style={{width: "18rem"}}>
                    <img src={waterfall} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">Waterfall</p>
                    </div>
                </div>

                <div class="card text-white bg-dark mb-3" style={{width: "18rem"}}>
                    <img src={om} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">Om</p>
                    </div>
                </div>
            
           </div>
        </div>
    )
}

export default Meditate
