import React from 'react'
import { ReactSVG } from 'react-svg';
import './InfoWrapItem.css'

export default function InfoWrapItem({uni_info, uni_info2, icon}) {
    const getIconPath = (iconName) => {
        switch (iconName) {
            case 'location_icon.svg':
                return `${process.env.PUBLIC_URL}/images/location_icon.svg`;
            case 'calendar_icon.svg':
                return `${process.env.PUBLIC_URL}/images/calendar_icon.svg`;
            case 'school_icon.svg':
                return `${process.env.PUBLIC_URL}/images/school_icon.svg`;
            default:
                return '';
        }
    };


    return (
        <div className='info-wrap-item'>
            <div className='icon-background'>
                <ReactSVG src={getIconPath(icon)} />
            </div>
            <div className='wrap-item-text'>
                <p>{uni_info}</p>
                <h6>{uni_info2}</h6>
            </div>
        </div>
    )
}
