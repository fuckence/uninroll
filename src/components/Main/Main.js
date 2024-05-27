import React from 'react'
import './Main.css'

export default function Main() {
  return (
    <div>
        <div className="container-main">
            <div className="main-part">
                <div className="main-left">
                    <h1 className="heading white-border">Your <span style={{color: 'red', fontWeight: '800'}}>future</span><br></br>starts here</h1>
                    <p>Apply to <span style={{color: 'red'}}>universities</span> for the first time with <span style={{color: 'red'}}>uni&#10076;n&#10076;roll</span></p>
                    <button>Start your application</button>
                </div>  
                <div className="location-part">
                    <div className="image-location">
                        <img src={require('./../../resources/earthspin.gif')}></img>
                    </div>
                    <p className="location-part-text">Located in <br></br> Kazakhstan</p>
                </div>
            </div>
        </div>
    </div>
  )
}
