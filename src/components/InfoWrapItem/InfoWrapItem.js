import React from 'react'
import { ReactSVG } from 'react-svg';
import './InfoWrapItem.css'

export default function InfoWrapItem({uni_info, uni_info2, icon}) {
  return (
        <div className='info-wrap-item'>
            <div className='icon-background'>
                <ReactSVG src={require(`../../resources/${icon}`)} />
            </div>
            <div className='wrap-item-text'>
                <p>{uni_info}</p>
                <h6>{uni_info2}</h6>
            </div>
        </div>
  )
}
