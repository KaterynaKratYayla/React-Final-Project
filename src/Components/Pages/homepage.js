import React from 'react'
import './menu.css'
import Slider from '../Library/slider/slider'
import {Search} from './searchfront'
import {Helmet} from 'react-helmet'
import Arktur_DMC_logo from '../Library/images/Arktur_DMC_logo.ico'
import {TopTours} from '../Library/toptours'

export const HomePage = () => {
    
    const images = [
        "https://arktur.ua/sites/default/files/public/image/slider/Lavra_shutterstock_1545799133_small.jpg",
        "https://arktur.ua/sites/default/files/public/image/slider/Azov%20sea_small.jpg",
        "https://arktur.ua/sites/default/files/public/image/slider/carpathians_shutterstock_750654637_small.jpg",
        "https://arktur.ua/sites/default/files/public/image/slider/Odesa%20Opera%20House_shutterstock_179655773_small.jpg",
        "https://arktur.ua/sites/default/files/public/image/slider/KamenetsCastle_shutterstock_1621762234_small.jpg"
    
      ]

    return (
       <div>
           <Helmet>
               <title>Arktur DMC</title>
               <link rel='shortcut icon' href={Arktur_DMC_logo} />
           </Helmet>
           <h2 style={{marginTop: '0.5vh', 
                       color: 'rgb(170,15,15)', 
                       fontSize: '25px', 
                       fontFamily: 'Arial',
                       textAlign: 'center'}}> ARKTUR TourOperator and DMC is your reliable partner in Ukraine</h2>
           <Slider slides={images}/>
           <Search />
           <TopTours/>
       </div>
    )
}