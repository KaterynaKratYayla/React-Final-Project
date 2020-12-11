import React from 'react'
import {Route, NavLink, Link, BrowserRouter, Switch} from 'react-router-dom'
import {COVID, ABOUT, CONTACTUS, SIGNIN, FORGROUPS} from '../Middle Menu/TopMenuComponents'
import {HOTELS, GALLERY, LOGO, SOCIAL, NotFound} from './MiddleMenuComponents' 
import {HomePage} from '../Middle Menu/homepage'
import {TOURS} from '../Middle Menu/dropdowntours'
import './menu.css'
import { PureContent } from '../Middle Menu/purecontentPage'
import { Search } from '../Tours/searchfront'
import { GuestItem } from '../Tours/searchrender'
import {Router} from 'react-router'
import { TourDetails } from '../Tours/tourDetails'

//Call: +38 044 498 4880 / inquiry@arktur.ua / COVID-19 / ABOUT US / CONTACT US / SIGN IN / FOR GROUPS / LOGIN / TRANSLATE

export const TopMenu = () => {
	
		return (
			<header>
				<BrowserRouter >
				{/* <Router history={history}> */}

				<div className='topMenu'>
					<NavLink exact to='/covid-19' activeClassName='active'>COVID</NavLink>
					<NavLink exact to='/about' activeClassName='active'>ABOUT</NavLink>
					<NavLink exact to='/contact_us' activeClassName='active'>CONTACT US</NavLink>
					<NavLink exact to='/sign_in' activeClassName='active'>SIGN IN</NavLink>
					<NavLink exact to='/forgroups' activeClassName='active'>FOR GROUPS</NavLink>
				</div>
				     <div className='middleMenu'>
					    <NavLink exact to='/' activeClassName='active'>HOME</NavLink>
 					    <NavLink exact to='/hotels_in_ukraine' activeClassName='active'>HOTELS</NavLink>
                        <NavLink exact to='/tours' activeClassName='active'>TOURS</NavLink>
                        <NavLink exact to='/gallery' activeClassName='active'>GALLERY</NavLink>
	
					  </div>

				 <Switch>
				 
                	<Route exact path='/covid-19' component={PureContent} />
                    <Route exact path='/about' component={PureContent} />
            		<Route exact path='/contact_us' component={CONTACTUS} />
                    <Route exact path='/sign_in' component={SIGNIN} />    
					<Route exact path='/forgroups' component={FORGROUPS} />
					{/* <Route component={NotFound} /> */}
				
						<Route exact path='/' component={HomePage} />
                        <Route exact path='/hotels_in_ukraine' component={HOTELS} />
                        <Route exact path='/tours' component={TOURS} />
                        <Route exact path='/gallery' component={PureContent} />  
						<Route path='/search_results' component={GuestItem} />	
			             <Route exact path='/search_results_/tour_details' component={TourDetails} />		          
                
				</Switch>
                 
			  </BrowserRouter>
			 
			</header>
		)
    }


