import React , {useState, useEffect} from 'react'
import {Route, NavLink, Link, BrowserRouter, Switch} from 'react-router-dom'
import '../RoutesAndLinks/header.css'
// import Slider from '../../Front Page/slider/slider'
// import Search from './searchfront'
import {Helmet} from 'react-helmet'
import ArkturDMClogoICO from '../../Library/Images/ArkturDMClogoICO.ico'

export const HOTELS = () => {
	 return (
        <div>
         <Helmet>
           <title>Hotels in Ukraine</title>
           <link rel='shortcut icon' href={ArkturDMClogoICO} />
         </Helmet>
          <h3>Hotels</h3>
        </div>
    )
}

export const SOCIAL = () => {
	
    return (
           <h2> My Home Page</h2>
    )
}

export const LOGO = () => {
	
    return (
         <h2> My Home Page</h2>
    )
}

// export const NotFound = () => <h2>Not Found</h2>