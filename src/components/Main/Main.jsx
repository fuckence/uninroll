import React from 'react'
import './Main.css'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <div>
        <div className="container-main">
            <div className="main-part">
                <div className="main-left">
                    <h1 className="heading">Your <span style={{color: 'red', fontWeight: '800'}} className='white-border'>future</span><br></br>starts here</h1>
                    <p>Apply to <span style={{color: 'red'}}>universities</span> for the first time with <span style={{color: 'red'}}>us</span></p>
                    <Link
                        className='link-to-uni'
                        to={'/universities'} 
                    >
                        Start your application
                    </Link>
                </div>  
                <div className="location-part">
                    <div className="image-location">
                        <img src={`${process.env.PUBLIC_URL}/images/earthspin.gif`} alt="EarthSpin" />
                    </div>
                    <p className="location-part-text">Located in <br></br> Kazakhstan</p>
                </div>
            </div>
        </div>
    </div>
  )
}
