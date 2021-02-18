import React from 'react'
import './GalleryCss.css'

export const ArrowGallery = ({ direction, photoClick }) => (
    // console.log(direction),
    
    <div onClick={photoClick}>
         {direction === 'right' ?  
                <div><a className="prevGallery">&#10094;</a></div> 
                         : 
                <div><a className="nextGallery">&#10095;</a></div>
        }    
    </div>
    )
