import React, {useState, useEffect, useRef} from 'react'
import { css ,jsx } from '@emotion/react'
import SliderContent from './slidercontent'
import Slide from './slide'
import './slidercss.css'
import {Arrow} from './arrow'
// import Dots from './dots'

const Slider = props => {

  const getWidth = () => window.innerWidth

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  })

  const { translate, transition, activeIndex } = state;
  
  const nextSlide = () => {
    if (activeIndex === props.slides.length - 1) {
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

let timer = null;
useEffect (() => {
  timer = setTimeout(nextSlide, 3000);
  return () => {
    clearInterval(timer)
  }
})

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (props.slides.length - 1) * getWidth(),
        activeIndex: props.slides.length - 1
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth()
    })
  }

  // console.log(props.slides)

  return(
   <div>   
        <div className='SliderCSS'> 
        {/* <div css={SliderCSS}>  */}
            <SliderContent
                translate={translate}
                transition={transition}
                width={getWidth() * props.slides.length}
                  >
                    {props.slides.map((slide,index) => (
                        <Slide key={index} content={slide} />  //was slide+index
                        ))} 
 
             </SliderContent> 

           <div class='Arrows'>
            
               <Arrow direction="left" handleClick={prevSlide}/>   

               <Arrow direction="right" handleClick={nextSlide}/> 
        
           {/* <Dots slides={props.slides} activeIndex={activeIndex} /> */}
         </div>
      </div>        
  </div>
  )
}


export default Slider;