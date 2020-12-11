import React from 'react'
import {css, jsx} from '@emotion/react'



// const Slide = (props) => { 
//     const {name} = props;
//       return(
//      <div>{name}</div>
//   )
// }

const Slide = ({content}) => {
// console.log(content)
return (

    <div    
    //   css={css`
    //     height: 50%;
    //     width: 50%;
    //     background-image: url('${content}');
    //     background-size: cover;
    //     background-repeat: no-repeat;
    //     background-position: center;
    //   `}
    style={{
            width: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'}}

    ><img style={{width:'100%'}} src={content}/> </div>
 )
}

// const Slide = ({content}) => (

//     <div css={css`
//       height: 100;
//       width: 100%;
//       background-image: url(${content});
//       background-size: cover;
//       background-repeat: no-repeat;
//       background-position: center;
//     `}
// />
// )


// console.log(Slide)
  export default Slide;