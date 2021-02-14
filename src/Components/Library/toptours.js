import React, {useState, useEffect} from 'react'
// import {history} from '../../Front Page/History'
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
// import ReactHtmlParser from 'react-html-parser'

import {getGeneralGeo, getContent} from '../../Redux/actions'
import arktur_collection from './images/arktur_collection.jpg'
import Arktur_DMC_logo from './images/Arktur_DMC_logo.svg'

export const TopTours = () => {

    const dispatch = useDispatch();
    const toptours = useSelector(state => state.cities.gen_locs)

console.log('[TOURTOURS]', toptours)
 
  ///получаю из смарта тур имя, тур айди, сити имя, сити айди
  useEffect ( () => {
    dispatch (getGeneralGeo ());
  }, [])

    return (
        <div>

         <div style={{textAlign: 'center'}}><img src={arktur_collection}/></div>
         <div style={{marginLeft: 'auto', marginRight: 'auto', width: '60vw'}}>
            <ul style={{
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(3, 20vw)',
                        listStyle: 'none',
                        paddingLeft: '0'
                        }}>
             <>
                {
                    toptours.length > 0 ? (toptours.map((tour,index) => { 
                        if(index < 12){
                          return(
                            <li key={tour.tour_id}>
                                <TopToursDetails 
                                    tour_id={tour.tour_id}/>
                                    
                                <div style={{
                                        display:'block',
                                        color: 'white', 
                                        fontFamily: 'Tahoma',
                                        fontWeight: 'bold',
                                        // fontStyle: 'Italic',
                                        background: 'rgb(214, 114, 116)',
                                        width: '18vw',
                                        padding: '0.5vw',
                                        marginTop: '0.2vh',
                                        marginBottom: '2vh',
                                        minHeight: '8vh',
                                        borderRadius: '5px'}}>{tour.tour_name}</div>
                            </li>
                          )
                        }
                    }))
                    :
                    (<div>{null}</div>)
                 }
             </>
            </ul>
          </div>
        </div>
    )
}

const TopToursDetails = ({tour_id}) =>{

    const [ttDetails, setTTDetails] = useState()  
    
    useEffect ( () => {
    axios.get(`http://smartbooker.biz/interface/content?id=${tour_id}&language=en`)
      .then( res => {
        setTTDetails(res.data)
        })
      
    .catch( error => {
        setTTDetails(undefined)
      console.log( '[axios error] : ' , error)
       });
   }, []);

   console.log('[ttDetails]', ttDetails)

//     const TopToursContents = useSelector(state => state.content.content)
//     const dispatch = useDispatch();

//     useEffect ( () => {
//       dispatch (getContent (tour_id));
//     },[]);

//     if( !TopToursContents ){
//       return <div> Loading...</div>
//   }

//   console.log('[TopToursContents]',TopToursContents)

    return(
        <div>
            {
                ttDetails && ttDetails.map((onetour)=>{
                  if(onetour.content_name === 'Image')
                    return(
                        // <div>
                            <img 
                        style = {{
                            width: '18vw',
                            height: '17vw',
                            borderRadius: '5px'}}

                            src={'http://' + onetour.text[1]}/>
                     /* </div> */
                    )
                    // else if(!(onetour.content_name === 'Image')){
                        // return <div><img src={Arktur_DMC_logo} /></div>
                })
              }
        </div>
    )
}