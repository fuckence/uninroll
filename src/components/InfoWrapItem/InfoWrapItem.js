import React from 'react'
import { ReactSVG } from 'react-svg';
import './InfoWrapItem.css'
import locationIcon from '../../resources/location_icon.svg';
import calendarIcon from '../../resources/calendar_icon.svg';
import schoolIcon from '../../resources/school_icon.svg';

export default function InfoWrapItem({uni_info, uni_info2, icon}) {
    const iconMap = {
        'location_icon.svg': locationIcon,
        'calendar_icon.svg': calendarIcon,
        'school_icon.svg': schoolIcon
      };

    // console.log('Location Icon:', locationIcon);
    // console.log('Calendar Icon:', calendarIcon);A
    // console.log('School Icon:', schoolIcon);


    return (
        <div className='info-wrap-item'>
            <div className='icon-background'>
                <ReactSVG src={iconMap[icon]} />
            </div>
            <div className='wrap-item-text'>
                <p>{uni_info}</p>
                <h6>{uni_info2}</h6>
            </div>
        </div>
    )
}
