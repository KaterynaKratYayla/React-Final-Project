// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { getPosts } from '../../../actions';

// const AxiosDemo = () => {

//     const  dispatch = useDispatch();
//     const data = useSelector( state => state.posts.items );

//      useEffect(() => {
//         dispatch( getPosts() );

//     }, [] );

//     console.log(data)

//     return(
//         <div>
//             <h2> Axios </h2>
//             <ol>
//                 {
//                     data.map( item => (
//                         <li key={item.id}>{item.title}</li>
//                     ))
//                 }
//             </ol>
//         </div>
//     );
// }


// // export default AxiosDemo;