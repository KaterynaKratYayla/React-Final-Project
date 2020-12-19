import React from 'react'
// import { BrowserRouter, Redirect } from 'react-router-dom'
import '../Pages/menu.css'
import contentPages from './static json data/contentPages.json'
import { HomePage } from '../Pages/homepage'
import {Gallery} from './Photo Gallery/photoGallery'
import {Helmet} from 'react-helmet'
import Arktur_DMC_logo from '../Library/images/Arktur_DMC_logo.ico'

export const PureContent = ({location}) => {

    contentPages.forEach(function(item){
        console.log('[CONTENT_PAGES] : ' , location.pathname)
    })

   return (
     <div className='purecontentPage'>
        {contentPages.length > 0 && (
            contentPages.map((obj) =>{
            if(location.pathname.toLowerCase() === `/${obj.title.toLowerCase()}`){
             return(
              <div>
                <Helmet>
                     <title>Arktur {obj.title}</title>
                     <link rel='shortcut icon' href={Arktur_DMC_logo} />
                </Helmet>
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