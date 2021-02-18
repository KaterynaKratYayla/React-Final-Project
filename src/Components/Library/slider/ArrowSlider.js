import React from 'react'
import {css,jsx} from '@emotion/react'
import './SliderCss.css'


export const Arrow = ({ direction, handleClick }) => (
    // console.log(direction),
    
    <div onClick={handleClick}>
         {direction === 'right' ?  <div><a className="prev">&#10094;</a></div> : <div><a className="next">&#10095;</a></div>}    
    </div>
    )

//   export default Arrow;
// css={css`
// display: flex;
// position: absolute;
// ${direction === 'right' ? 'right: 50px' : 'left: 25px'};
// height: 50px;
// width: 50px;
// justify-content: center;
// background: white;
// border-radius: 50%;
// cursor: pointer;
// align-items: center;
// transition: transform ease-in 0.1s;
// &:hover {
//   transform: scale(1.1);
// }
// img {
//   transform: translateX(${direction === 'left' ? '-2' : '2'}px);
//   &:focus {
//     outline: 0;
//   }
// }
// `}