import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header'
import Filterbox from '../../components/Filterbox/Filterbox'
import universities from '../../universitylist'
import './Universities.css'
import Footer from '../../components/Footer/Footer'

function Universities() {
    const [filters, setFilters] = useState({
      location: '',
      major: '',
      minPrice: 0,
      maxPrice: 3000000,
    });
  
    const handleFilterChange = (e) => {
      const { name, value } = e.target;
      setFilters({
        ...filters,
        [name]: value
      });
    };

    const handleRangeChange = (value) => {
      setFilters({
        ...filters,
        minPrice: value[0],
        maxPrice: value[1]
      });
    };

    const filteredUniversities = universities.filter((university) => {
      return (
        (filters.location === '' || filters.location === 'All' || university.location === filters.location) &&
        (filters.major === '' || filters.major === 'All' || university.majors[0].en.includes(filters.major)) &&
        (university.education_price_year >= filters.minPrice) &&
        (university.education_price_year <= filters.maxPrice) 
        
      );
    });
    
  
    return (
      <div>
        <Header />
        <div className='container-universities-filter'>
          <div className='filter-uni-wrap'>
            <Filterbox
              filters={filters}
              onChange={handleFilterChange}
              onRangeChange={handleRangeChange}
            />
            <div className="university-list">
              <h1>Universities</h1>
              {filteredUniversities.map((university) => (
                <div key={university.id} className="university-card">
                  <img src={university.image} alt={university.name} />
                  <div>
                    <h4>
                      <Link className='university-name' to={`/universities/${university.short_name}`}>
                        {university.name}
                      </Link>
                    </h4>
                    <p><span style={{fontWeight: '500', color: 'red'}}><i className="fas fa-map-marker-alt"></i></span> {university.location}</p>
                    <p><span style={{fontWeight: '500'}}>Majors:</span> {university.majors[0].en.join('; ')}</p>
                    <p className='price_tag'><span style={{fontWeight: '500', color: 'red'}}><i className="fa fa-dollar-sign"></i></span> {university.education_price_year} tg</p>
                    <p><span style={{fontWeight: '500', color: 'red'}}><i className="fas fa-globe"></i></span> {university.education_language[0].en.join(', ')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

export default Universities
