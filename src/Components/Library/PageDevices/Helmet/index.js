import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from '../../../Pages/PageComponents/HomePage'
import {PureContent} from '../../../Pages/PageComponents/MenuPageGenerator'
import { CONTACTUS } from '../../../Pages/PageComponents/TopMenuComponents'
import { HOTELS } from '../../../Pages/PageComponents/MiddleMenuComponents'

const Helmet = () => {

    return(
        <div>
            <h1>Helmet</h1>
            <Switch>
                <Route path='/' component={HomePage}/>
                <Route path='/about' component={PureContent}/>
                <Route path='/contact_us' component={CONTACTUS}/>
                <Route path='/hotels_in_ukraine' component={HOTELS}/>
            </Switch>

        </div>
    )
}

export default Helmet;