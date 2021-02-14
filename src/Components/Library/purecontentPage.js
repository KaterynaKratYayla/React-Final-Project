import React , {useEffect} from 'react'
import {Helmet} from 'react-helmet'
import {useDispatch, useSelector} from 'react-redux'
import ReactHtmlParser from 'react-html-parser'

import '../Pages/menu.css'
import contentPages from './static json data/contentPages.json'
import {HomePage } from '../Pages/homepage'
import {Gallery} from './Photo Gallery/photoGallery'
import {getPurePage} from '../../Redux/actions'
import Arktur_DMC_logo from '../Library/images/Arktur_DMC_logo.ico'

export const PureContent = ({location}) => {

    // contentPages.forEach(function(item){
    //     console.log('[CONTENT_PAGES] : ' , location)
    // })

    console.log('[LOCATION]', location, location.state.id)

    const purePage = useSelector(state => state.pages.purepage)
    const dispatch = useDispatch();

    useEffect ( () => {
      dispatch (getPurePage (location.state.id));
    },[location.state.id]);

    console.log('[PURE PAGE]', purePage)

    if( !purePage ){
      return <div> Loading...</div>
  }


   return (
     <div className='purecontentPage'>

       {
         purePage && purePage.map((page)=>{
           if(page.content_name === "Title"){
             return (
               <h2>{page.text}</h2>
               //!!!! i can remove this one
             )
           }

           if(page.content_name === "Body"){
             return (
               <div>{ReactHtmlParser(page.text)}</div>
             )
           }

         })

       }

        {/* {contentPages.length > 0 && (
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
                 </div> */}
               {/* </div>       */}
                {/* )
               }
              }
            ))
         } */}
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