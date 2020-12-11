import React from 'react'
import { BrowserRouter, Redirect } from 'react-router-dom'
import '../Front Page/menu.css'
import contentPages from './contentPages.json'
import { HomePage } from './homepage'


export const PureContent = ({location}) => {

    // console.log(location)
    // console.log('hello kate')

    return (
       <div className='purecontentPage'>
        {contentPages.length > 0 && (
            contentPages.map((obj) =>{
            if(location.pathname === `/${obj.title.toLowerCase()}`){
                
             return(
              <div>
                 <h2>{obj.title}</h2>
                 <div>{obj.Description}</div>
                 <div className='purecontentImg'>
                     {obj.photos.length > 0 && (
                         obj.photos.map((pic) =>{
                             return(
                             <img src={pic.photo}/>
                             )
                         })
                     )}
                 </div>
            </div>
             ) 
            // } else {
            //     return(
            //     <BrowserRouter>
            //       <Redirect to='/' />
            //     </BrowserRouter>
            //     )
            // }
          }
         }
         )
        )}

   </div>
  )
}

export const NotFound = () => <h2>Not Found</h2>