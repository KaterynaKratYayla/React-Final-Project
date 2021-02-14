import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Route, NavLink, Link, BrowserRouter, Switch} from 'react-router-dom'
import {Router} from 'react-router'
import Helmet from '../Helmet'

// import {getPages} from '../../Redux/actions/pages'
import './menu.css'
// import { PureContent } from '../Library/purecontentPage'

// import {COVID, ABOUT, CONTACTUS, SIGNIN, FORGROUPS} from './TopMenuComponents'
// import {HOTELS, GALLERY, LOGO, SOCIAL, NotFound} from './MiddleMenuComponents' 
// import {HomePage} from './homepage'
// import {TOURS} from './dropdowntours'
// import { Search } from './searchfront'
// import { GuestItem } from './searchrender'
// import { TourDetails } from './tourDetails'
//Call: +38 044 498 4880 / inquiry@arktur.ua / COVID-19 / ABOUT US / CONTACT US / SIGN IN / FOR GROUPS / LOGIN / TRANSLATE

export const Footer = () => {

  const pages = useSelector(state => state.pages.pages)
  const dispatch = useDispatch();

     useEffect ( () => {
      dispatch (getPages ());
    },[]);

    if( !pages ){
      return <div> Loading...</div>
  }

  console.log('[PAGES SMART]', pages)
	

//   var ZZZ = "This is my name";
//   var ZZZ3 = ZZZ.replace(/ /g, "_")
//   console.log('[ZZZ3]', ZZZ3.toLocaleLowerCase())

	return (
		<footer class='footer'>
		  {/* <BrowserRouter > */}
					<div>
					  <h3>CITY HOTELS</h3>
					  {/* <div>{pages[0].name}</div> */}
                        <NavLink exact to='/kyiv_hotels' activeClassName='active'>Kyiv Hotels</NavLink>
						<NavLink exact to='/lviv_hotels' activeClassName='active'>Lviv Hotels</NavLink>
						<NavLink exact to='/odesa_hotels' activeClassName='active'>Odesa Hotels</NavLink>
						<NavLink exact to='/kharkiv_hotels' activeClassName='active'>Kharkiv Hotels</NavLink>
						<NavLink exact to='/dnipro_hotels' activeClassName='active'>Dnipro Hotels</NavLink>
						<NavLink exact to='/central_ukraine_hotels' activeClassName='active'>Central Ukraine Hotels</NavLink>
						<NavLink exact to='/eastern_ukraine_hotels' activeClassName='active'>Eastern Ukraine Hotels</NavLink>
						<NavLink exact to='/western_ukraine_hotels' activeClassName='active'>Western Ukraine Hotels</NavLink>
					</div>

					<div>
					  <h3>RESORTS AND MEDICAL SPA DESTINATIONS</h3>
                        <NavLink exact to='/sinyak_spa_resorts/' activeClassName='active'>Sinyak</NavLink>
						<NavLink exact to='/truskavets_spa_resorts' activeClassName='active'>Truskavets</NavLink>
						<NavLink exact to='/morshin_spa_resorts' activeClassName='active'>Morshin</NavLink>
						<NavLink exact to='/yaremche_resorts' activeClassName='active'>Yaremche</NavLink>
						<NavLink exact to='/lviv_spa_resorts' activeClassName='active'>Lviv</NavLink>
						<NavLink exact to='/vinnitsya_spa_resorts' activeClassName='active'>Vinnitsya</NavLink>
						<NavLink exact to='/kurortne_resorts' activeClassName='active'>Kurortne</NavLink>
						<NavLink exact to='/zatoka_resorts' activeClassName='active'>Zatoka</NavLink>
					</div>

					<div>
					  <h3>INFORMATION</h3>
                        <NavLink exact to={`/about_us`} activeClassName='active'
							isActive={(match, location) => {
							if (!match) {
							  return false;
							}}
							}>
							
							About us
						</NavLink>
						
						<NavLink exact to='/customer_service' activeClassName='active'>Customer Service</NavLink>
						<NavLink exact to='/our_partners' activeClassName='active'>Our Partners</NavLink>
						<NavLink exact to='/privacy_policy' activeClassName='active'>Privacy Policy</NavLink>
						<NavLink exact to='/terms_and_conditions' activeClassName='active'>Terms and Conditions</NavLink>
						{/* {/* <NavLink exact to='/vinnitsya_spa_resorts' activeClassName='active'>Vinnitsya</NavLink> */}
						<NavLink exact to='/covid-19' activeClassName='active'>Covid-19</NavLink>
						<NavLink exact to='/contact_us' activeClassName='active'>Contact Us</NavLink> 
					</div>

				 <Switch>
				 <Route path='/helmet' component={Helmet} />
					{
						pages && pages.map((page) => {
							<Route exact path={`/${page.name.replace(/ /g, "_").toLowerCase()}`} component={PureContent} /> 
						})
					
					// <Route exact path='/about_us' component={PureContent} /> 
            		// <Route exact path='/contact_us' component={PureContent} />
                
					}
						{/* <Route exact path='/' component={HomePage} />
						// <Route exact path='/gallery' component={PureContent} />  
						
						// <Route exact path='/testcities' component={TestCities} /> 
						// <Route path='/search_results' component={GuestItem} />	
						// <Route exact path='/search_results_/tour_details' component={TourDetails} />
						// <Route exact to='/Kyiv' component={PureContent}/>
						// <Route exact to='/Odesa' component={PureContent}/>
					    <Route exact to='/Lviv' component={PureContent}/>
					    <Route exact to='/Kharkiv' component={PureContent}/>
					    <Route exact to='/Vinnitsya' component={PureContent}/> */}
					    {/* <Route exact to='/Bukovel_Resort' component={PureContent}/> */}
					    {/* <Route exact to='/Mariupol' component={PureContent}/> */}
                {/*  */}
				</Switch>		
			 
		</footer>
	)
 }


