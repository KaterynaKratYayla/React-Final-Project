import React from 'react'
import {css, jsx} from '@emotion/react'

const Photo = ({content}) => {
return (

 <div    
    style={{
            width: '100%',
            paddingTop: '2vw',
        //     textAlign: 'left',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'}}

    >
      <img 
        style={{width: '50%'}} 
        src={content}/> 
 </div>
 )
}

export default Photo;