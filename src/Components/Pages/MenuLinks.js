import React, {useState} from 'react'
import {Route, NavLink, Link, BrowserRouter, Switch} from 'react-router-dom'
import {COVID, ABOUT, CONTACTUS, SIGNIN, FORGROUPS} from './TopMenuComponents'
import {HOTELS, GALLERY, LOGO, SOCIAL, NotFound} from './MiddleMenuComponents' 
import {HomePage} from './homepage'
import {TOURS} from './dropdowntours'
import './menu.css'
import { PureContent } from '../Library/purecontentPage'
import { Search } from './searchfront'
import { GuestItem } from './searchrender'
import {Router} from 'react-router'
import { TourDetails } from './tourDetails'
import Helmet from '../Helmet'
import {SingleHotel} from './single_hotel'
import { TestCities } from './test_cities'
// import { findByLabelText } from '@testing-library/react'

//Call: +38 044 498 4880 / inquiry@arktur.ua / COVID-19 / ABOUT US / CONTACT US / SIGN IN / FOR GROUPS / LOGIN / TRANSLATE

export const TopMenu = () => {
	
	return (
		<header>
		  <BrowserRouter >

	   		<div className='topMenu'>
				<div className='topMenu_right'>
					<NavLink exact to='/covid-19' activeClassName='active'>COVID</NavLink>
					<NavLink exact to='/contact_us' activeClassName='active'>CONTACT US</NavLink>
					<NavLink exact to='/sign_in' activeClassName='active'>SIGN IN</NavLink>
					<NavLink exact to='/forgroups' activeClassName='active'>FOR GROUPS</NavLink>
				</div>

				<div className='topMenu_center'>

				</div>

				<div className='topMenu_left'>

				</div>
			</div>

			<div className='middleMenu'>
				  <div class='middleMenu_left'>
					  <h2>
					    <NavLink exact to='/' activeClassName='active'>HOME</NavLink>
					  </h2>
					  <h2>
					  	<NavLink exact to='/about' activeClassName='active'>ABOUT</NavLink>
					 </h2>
					  <h2>
 					    <NavLink exact to='/hotels_in_ukraine' activeClassName='active'>HOTELS</NavLink>
					  </h2>
			
						<div class ='dropdown'>
					  	   <h2> 
								  <NavLink exact to='/' activeClassName='active'>TOURS</NavLink> 
						 
					  		  <ul class = 'dropdown_list'>
								<li>
								   <NavLink exact to='/Kyiv' activeClassName='active'>Kyiv</NavLink>
								</li>
								<li>
								   <NavLink exact to='/Odesa' activeClassName='active'>Odesa</NavLink>
								</li>
								<li>
								   <NavLink exact to='/Lviv' activeClassName='active'>Lviv</NavLink>
								</li>
								<li>
								   <NavLink exact to='/Kharkiv' activeClassName='active'>Kharkiv</NavLink>
								</li>
								<li>
								   <NavLink exact to='/Vinnitsya' activeClassName='active'>Vinnitsya</NavLink>
								</li>
								<li>
								   <NavLink exact to='/Bukovel_Resort' activeClassName='active'>Bukovel</NavLink>
								</li>
								<li>
								   <NavLink exact to='/Mariupol' activeClassName='active'>Mariupol</NavLink>
								</li>
							</ul>
						  </h2>
					  </div>
					<h2>
                        <NavLink exact to='/gallery' activeClassName='active'>GALLERY</NavLink>
					</h2>
					<h2>
                        <NavLink exact to='/testcities' activeClassName='active'>TestCities</NavLink>
					</h2>

	
				</div>
			  
			   <div class="middleMenu_middle">

			   </div>

			    
			   <div class="middleMenu_right">
				  
		 	   </div>

				
			</div>

				 <Switch>

					 <Route path='/helmet' component={Helmet} />
				 
                	<Route exact path='/covid-19' component={PureContent} />
                    <Route exact path='/about' component={PureContent} />
            		<Route exact path='/contact_us' component={CONTACTUS} />
                    <Route exact path='/sign_in' component={SIGNIN} />    
					<Route exact path='/forgroups' component={FORGROUPS} />
					{/* <Route component={NotFound} /> */}

						<Route exact path='/' component={HomePage} />
                        <Route exact path='/hotels_in_ukraine' component={SingleHotel}/*{HOTELS}*/ />					
                        <Route exact path='/gallery' component={PureContent} />  
						<Route exact path='/testcities' component={TestCities} /> 
						<Route path='/search_results' component={GuestItem} />	
						<Route exact path='/search_results_/tour_details' component={TourDetails} />
						<Route exact to='/Kyiv' component={PureContent}/>
						<Route exact to='/Odesa' component={PureContent}/>
					    <Route exact to='/Lviv' component={PureContent}/>
					    <Route exact to='/Kharkiv' component={PureContent}/>
					    <Route exact to='/Vinnitsya' component={PureContent}/>
					    <Route exact to='/Bukovel_Resort' component={PureContent}/>
					    <Route exact to='/Mariupol' component={PureContent}/>
                
				</Switch>

		  </BrowserRouter>
			 
		</header>
	)
 }


