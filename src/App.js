import React from 'react'
import {TopMenu} from './Components/Pages/MenuLinks'
import {Footer} from './Components/Pages/Footer'
import './App.css';
import axios from 'axios'
import store from '../src/Redux/redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import {ScrollToTop} from './Components/Library/ScrollToTop';
// import AxiosDemo from './Redux/components/pages/Axios';

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <ScrollToTop />
        
        <TopMenu />
        {/* <hr /> */}
        <Footer />
        
     
      </Provider>
    </BrowserRouter>
  );
}

export default App;
