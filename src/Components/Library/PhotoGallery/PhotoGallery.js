import React, {useState, useEffect, useRef} from 'react'
// import { css ,jsx } from '@emotion/react'
import GalleryContent from './PhotosContent'
import Photo from './Photo'
import './PhotoGalleryCSS.css'
import {ArrowGallery} from './Arrow'
// import Dots from './dots'

export const Gallery = ({galleryImages}) => {

  const getWidth = () => window.innerWidth
  console.log('[GALLERY IMAGES] : ' , galleryImages)

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  })
  
  const { translate, transition, activeIndex } = state;
  
  const nextPhoto = () => {
    if (activeIndex === galleryImages.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      })
    } else{

    return (setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth()
    })
    )
  }

}

  const prevPhoto = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (galleryImages.length - 1) * getWidth(),
        activeIndex: galleryImages.length - 1
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth()
    })
  }

  return(
   <div>   
        <div className='galleryCSS'> 
            <GalleryContent
                translate={translate}
                transition={transition}
                width={getWidth() * galleryImages.length}
                  >
                    {galleryImages.map((slide,index,array) => (
                        <Photo key={index} content={slide}/>  
                        ))} 
 
             </GalleryContent> 

             <div>
            
                <ArrowGallery direction="left" photoClick={nextPhoto}/>   

                <ArrowGallery direction="right" photoClick={prevPhoto}/> 

        </div>

        </div>        

  </div>
  )
}