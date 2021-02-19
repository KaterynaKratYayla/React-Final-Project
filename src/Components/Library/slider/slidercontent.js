import React from 'react'
import styled from'@emotion/styled'


const SliderContent = styled.div`
    transform: translateX(-${props => props.translate}px); 
    height: 100%; 
    width: ${props => props.width}px;
    display: flex;  
`
//transition: transform ease-out ${props => props.transition}s; 

console.log(SliderContent)
export default SliderContent;
 