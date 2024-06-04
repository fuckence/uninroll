import React from 'react'
import { useNavigate } from "react-router-dom";
import './Category.css'

export default function () {
  const navigate = useNavigate()

  const UniversityPage = () => {
    navigate('/universities')
    window.scrollTo(0, 0);
  }

  return (
    <div className="container-category">
        <div className="category-part">
            <h1>Find <span style={{color: 'red'}}>Your</span> Dream <span style={{color: 'red'}}>Major</span></h1>
            <div className="category-section">
                <button className="category-btn" onClick={() => UniversityPage()}>HR</button>
                <button className="category-btn" onClick={() => UniversityPage()}>Business</button>
                <button className="category-btn" onClick={() => UniversityPage()}>Marketing & Communication</button>
                <button className="category-btn" onClick={() => UniversityPage()}>Management</button>
                <button className="category-btn" onClick={() => UniversityPage()}>Journalism</button>
                <button className="category-btn" onClick={() => UniversityPage()}>Finance</button>
                <button className="category-btn" onClick={() => UniversityPage()}>Accounting</button>
                <button className="category-btn" onClick={() => UniversityPage()}>Law</button>
                <button className="category-btn" onClick={() => UniversityPage()}>Computer Science</button>
            </div>
        </div>
    </div>
  )
}
