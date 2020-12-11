import React from 'react'
import '../Front Page/menu.css'
import Slider from '../Front Page/slider/slider'
import {Search} from '../Tours/searchfront'

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
           <h2> Welcome to homepage of ARKTUR TourOperator and DMC</h2>
           <Slider slides={images}/>
           <Search />
       </div>
    )
}