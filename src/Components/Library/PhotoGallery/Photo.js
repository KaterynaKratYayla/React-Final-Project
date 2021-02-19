import React from 'react'
import {css, jsx} from '@emotion/react'
import ArkturDMClogo from '../Images/ArkturDMClogo.svg'

const Photo = ({content}) => {
return (

 <div    
    style={{
            width: '100%',
            paddingTop: '2vw',
            paddingBottom: '5vw',
        //     textAlign: 'left',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'}}

    >
      <img 
        style={{width: '50%', height: '60vh' }} 
        src={content.includes('jpg') ? 'http://' + content : ArkturDMClogo}/> 
 </div>
 )
}

export default Photo;