import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from '../Pages/homepage'
import {PureContent} from '../Library/purecontentPage'
import { CONTACTUS } from '../Pages/TopMenuComponents'
import { HOTELS } from '../Pages/MiddleMenuComponents'

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