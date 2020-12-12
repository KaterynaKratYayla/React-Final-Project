import React from 'react'

export const ArrowGallery = ({ direction, photoClick }) => (
    // console.log(direction),
    
    <div onClick={photoClick}>
         {direction === 'right' ?  
                <div><a className="prev">&#10094;</a></div> 
                         : 
                <div><a className="next">&#10095;</a></div>
        }    
    </div>
    )
