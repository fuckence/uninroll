import React from 'react'

export default function () {
  return (
    <footer id='contact-footer'>
        <div className="footer-container">
            <div className="footer-contact-part footer-wrap-part">
                <h1>Contact</h1>
                <ul>
                    <li>
                        <i className="fas fa-map-marker-alt"></i>
                            178 West 27th Street, Suite 527<br></br>
                            New York NY 10012
                    </li>
                    <li>
                        <i className="fas fa-phone-alt"></i>
                        + 7 (700) 632 5234
                    </li>
                </ul>
            </div>
            <div className="footer-hours-part footer-wrap-part">
                <h1>Hours</h1>
                <ul>
                    <li><span>Mon to Fri:</span> 7:30 am — 1:00 am</li>
                    <li><span>Sat:</span> 9:00 am — 1:00 am</li>
                    <li><span>Sun:</span> 9:00 am — 11:30 pm</li>
                </ul>
            </div>
            <div className="footer-apply-part footer-wrap-part">
                <h1>Apply support</h1>
                <div className="input-button-section">
                    <input type="text" placeholder="Enter your question..."></input>
                    <button type="submit">Send</button>
                </div> 
                <p>Ask a question you are interested in</p>  
            </div>
        </div>
        <div className="footer-container-2">
            <div className="footer-left">
                <img src={require('./../../resources/logo-nobg2.png')}></img>
            </div>
            <div>
                <p>Uni&#10076;n&#10076;roll © 2024 All Rights Reserved.</p>
            </div>
            <div className="footer-references">
                <a href=""><i className="fab fa-instagram"></i></a>
                <a href=""><i className="fab fa-whatsapp"></i></a>
                <a href=""><i className="fab fa-telegram"></i></a>
            </div>
        </div>
        
    </footer>
  )
}
