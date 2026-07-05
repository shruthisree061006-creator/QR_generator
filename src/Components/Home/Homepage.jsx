import React from 'react';
import "./Homepage.css";
import { Link } from "react-router-dom"
import heroimg from "../../assets/QR_Herosectionimg.png"

export const Homepage = () => {
  return (
    <div className='container'>
        <div className='homepage'>
            <div className='homepage1'>
                <img src={heroimg} alt="Heroimg"  id='heroimg'/>

                <div className='herobtn'>

                <div className='herobtn1'>
                <button>
                    <Link to="/Create"> Create Your QR coden </Link>
                </button>
                </div>


                <div className='herobtn2'>
                <button>
                    <Link to="/History"> View History </Link>
                </button>
                </div>
                </div>



            </div>

            <div className="how-section">
            <h2>How it works?</h2>

            <div className="steps">
            <div className="step-card">
            <span>1</span>
            <h3>Enter</h3>
            <p>Enter your text or link</p>
            </div>

            <div className="step-card">
            <span>2</span>
            <h3>Generate QR</h3>
            <p>Create your QR code instantly</p>
            </div>

            <div className="step-card">
            <span>3</span>
            <h3>Download</h3>
            <p>Save your QR code</p>
            </div>

           <div className="step-card">
           <span>4</span>
           <h3>Share</h3>
           <p>Share anywhere easily</p>
        </div>
        </div>
        </div>
        </div>
       


    </div>
  )

}
