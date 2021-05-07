import React from 'react'
import './styles/Home.css'
//import logo from './images/Peacify.png' 
import video from './videos/video1.mp4'
// import Profile from './Profile.js'
import Meditate from './Meditate.js'
import Sleep from './Sleep.js'
import Affirmations from './Affirmations.js'


function Home() {

    const clickHandler = (select) => {
        // return (<div>{profile}</div>);
      var vid = document.getElementById('video-section');
      var selector = document.getElementById(select);
      
        switch(select) {
            // case 'profile': selector.style.display = 'flex'; 
            //                 vid.style.display = 'none';
            //                 document.getElementById('sleep').style.display = 'none';
            //                 document.getElementById('meditation').style.display = 'none';
            //                 document.getElementById('affirmations').style.display = 'none';
            //                 break;

            case 'sleep' : vid.style.display = 'none';
                           selector.style.display = 'flex';
                           document.getElementById('meditation').style.display = 'none';
                           document.getElementById('affirmations').style.display = 'none';
                           break;

            case 'meditation': vid.style.display = 'none';
                               selector.style.display = 'flex';
                               document.getElementById('sleep').style.display = 'none';
                               document.getElementById('affirmations').style.display = 'none';
                               break;

            case 'affirmations': vid.style.display = 'none';
                                selector.style.display = 'flex';
                                document.getElementById('sleep').style.display = 'none';
                                document.getElementById('meditation').style.display = 'none';
                                break;
            case 'home':        vid.style.display = 'flex';
                                document.getElementById('sleep').style.display = 'none';
                                document.getElementById('meditation').style.display = 'none';
                                document.getElementById('affirmations').style.display = 'none';
                                break;
        }
    }

    
    return (
        <div>
            <div id="video-section">
                 <h1>Peacify</h1>
                 <div className="video-container">
                     {/* <div className="color-overlay"></div> */}
                    <video autoPlay loop muted preload>
                        <source src={video} type="video/mp4"/>
                    </video>
                 </div>
            </div>
           
            {/* <div id="profile" style={{display:"none"}}><Profile/></div> */}
            <div id="meditation" style={{display:"none"}}><Meditate/></div>
            <div id="sleep" style={{display:"none"}}><Sleep/></div>
            <div id="affirmations" style={{display:"none"}}><Affirmations/></div>

            <header>
                <nav>
                    <div className="list">
                        <ul className="nav__links">
                            <li><button className="links" onClick={() => clickHandler("home")}>Home</button></li>
                            <li><button className="links" onClick={() => clickHandler("meditation")}>Meditate</button></li>
                            <li><button className="links" onClick={() => clickHandler("sleep")}>Sleep</button></li>
                            <li><button className="links" onClick={() => clickHandler("affirmations")}>Affirmations</button></li>
                        </ul>
                    </div>
                </nav>
                <div className="contact"> 
                    <a className="cta" href="#"><button>Contact</button></a>
                </div>
               
            </header>
        </div>
    )
}

export default Home
