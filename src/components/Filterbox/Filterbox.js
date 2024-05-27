import React from 'react'
import './Filterbox.css'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Dropdown from '../Dropdown/Dropdown';


export default function Filterbox({ filters, onChange, onRangeChange }) {
    const locations = ["All", "Almaty, Kazakhstan", "Astana, Kazakhstan", "Atyrau, Kazakhstan"];
    const majors = [
      "All",
      "Marketing & Communication",
      "International School of Economics",
      "Oil and gas faculty",
      "Pedagogical sciences",
      "Arts and Humanities",
      "Social sciences, Journalism and Information",
      "Business, Management and Law",
      "Natural Sciences, Mathematics and Statistics",
      "Information and Communication Technologies",
      "Engineering, Manufacturing and Construction Industries"
    ];
  
    return (
      <div className="filterbox">
        <div>
          <Dropdown
            label="Location"
            name="location"
            options={locations}
            value={filters.location}
            onChange={onChange}
          />
        </div>
        <div>
          <Dropdown
            label="Major"
            name="major"
            options={majors}
            value={filters.major}
            onChange={onChange}
          />
        </div>
        <div className='inputbox'>
          <label>Price Range:</label>
          <div className='price-inputs'>
            <input
              type="number"
              name="minPrice"
              readOnly
              value={filters.minPrice}
              onChange={onChange}
              placeholder="Min price in tenge"
            />
            <p>-</p>
            <input
              type="number"
              name="maxPrice"
              readOnly
              value={filters.maxPrice}
              onChange={onChange}
              placeholder="Max price in tenge"
            />
          </div>
          <div className='slider-container'>
            <Slider
              range
              min={0}
              max={3000000}
              defaultValue={[filters.minPrice || 0, filters.maxPrice || 3000000]}
              onChange={onRangeChange}
              marks={{
                0: '0₸',
                500000: '500k₸',
                1000000: '1M₸',
                1500000: '1.5M₸',
                2000000: '2M₸',
                2500000: '2.5M₸',
                3000000: '3M₸'
              }}
            />
          </div>
        
      </div>
      </div>
      );
}
