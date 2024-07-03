import React from 'react'
import './Filterbox.css'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Dropdown from '../Dropdown/Dropdown';
import { useTranslation } from 'react-i18next';


export default function Filterbox({ filters, onChange, onRangeChange }) {
    const { t, i18n } = useTranslation();
    const locations = [t('location_all'), t('location_almaty_kazakhstan'), t('location_astana_kazakhstan') ,t('location_atyrau_kazakhstan')];
    const majors = [
      t('major_all'),
      t('major_marketing_communication'),
      t('major_international_school_of_economics'),
      t('major_oil_and_gas_faculty'),
      t('major_pedagogical_sciences'),
      t('major_arts_humanities'),
      t('major_social_sciences_journalism_and_information'),
      t('major_business_management_and_law'),
      t('major_natural_sciences_mathematics_and_statistics'),
      t('major_information_and_communication_technologies'),
      t('major_engineering_manufacturing_and_construction_industries')
    ];
  
    return (
      <div className="filterbox">
        <div>
          <Dropdown
            label={t('filter_location')}
            name="location"
            options={locations}
            value={filters.location}
            onChange={onChange}
          />
        </div>
        <div>
          <Dropdown
            label={t('filter_major')}
            name="major"
            options={majors}
            value={filters.major}
            onChange={onChange}
          />
        </div>
        <div className='inputbox'>
          <label>{t('filter_price_range')}</label>
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