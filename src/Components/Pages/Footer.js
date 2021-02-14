import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Route, NavLink, Link, BrowserRouter, Switch} from 'react-router-dom'
import {Router} from 'react-router'
import Helmet from '../Helmet'

import {getPages} from '../../Redux/actions/pages'
import './footer.css'
import { PureContent } from '../Library/purecontentPage'

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

   return (
	 <footer class='footer'>

		 <div class="footerLinks">
		   <div class='Hotels'>	
		  	 <h3>CITY HOTELS</h3>
			    <ul>
					  {
						pages && pages.map((page)=>{
						  if(page.name.includes('Hotels')){	
							return (
							<li>
								<div>
									<Link exact to={{pathname: `/${page.name.replace(/ /g, "_").toLowerCase()}`,
									                 state: {id: page.id}}}>{page.name}</Link> 
								</div>
						   </li>
						   )
						  }
						})
					  }
				</ul>
			</div>
			<div class='SPA'>
			  <h3>RESORTS AND MEDICAL SPA DESTINATIONS</h3>
			    <ul>
					  {
						pages && pages.map((page)=>{
						  if(page.name.includes('SPA')){	
							return (
							<li>
								<div>
									<Link exact to={{pathname: `/${page.name.replace(/ /g, "_").toLowerCase()}`,
									                 state: {id: page.id}}}>{page.name.replace(/SPA/g, " " )}
									</Link> 
								</div>
						   </li>
						   )
						  }
						})
					  }
				</ul>
			  </div>
			 <div class='INFO'>
			   <h3>INFORMATION</h3>
			    <ul>
					  {
						pages && pages.map((page)=>{
						  if(page.name.includes('INFO')){	
							return (
							<li key={page.id}>
								<div>
									<Link exact to={{pathname: `/${page.name.replace(/ /g, "_").toLowerCase()}`,
									                 state: {id: page.id}}}>{page.name.replace(/INFO/g, " " )}
									</Link> 
								</div>
						   </li>
						   )
						  }
						})
					  }
				</ul>
			  </div>
			 </div>

			 <Switch>
				  <Route path='/helmet' component={Helmet} />
					{
						pages && pages.map((page) => {
							<Route exact path={`/${page.name.replace(/ /g, "_").toLowerCase()}`}							 
							component={PureContent} />
								{/* <PureContent id={page.id}/> */}
							// </Route>
						})
					}
			 </Switch>		
	 </footer>
   )
 }


