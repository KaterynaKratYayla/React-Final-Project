import React from 'react'
// import { BrowserRouter, Redirect } from 'react-router-dom'
import '../Front Page/menu.css'
import contentPages from './contentPages.json'
import { HomePage } from './homepage'
import {Gallery} from './Photo Gallery/photoGallery'


export const PureContent = ({location}) => {

    contentPages.forEach(function(item){
        console.log('[CONTENT_PAGES] : ' , item.photos)
    })

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
                     {
                       obj.photos && (
                        <Gallery galleryImages={obj.photos}/>
                       )
                    }
                 </div>
               </div>      
                 )
                }
               }
            ))
         }
    </div>
    ) 
  }


                    //    obj.photos && (
                    //      obj.photos.map((pic) =>{
                    //          console.log ('[PIC] : ' , pic)
                    //          return(
                    //          <img src={pic}/>
                    //          )

export const NotFound = () => <h2>Not Found</h2>