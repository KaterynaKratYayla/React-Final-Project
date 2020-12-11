import React from 'react'
import {TopMenu, MiddleMenu} from './Front Page/MenuLinks'
import './App.css';
import axios from 'axios'
import store from '../src/Redux/redux/store';
import { Provider } from 'react-redux';
import AxiosDemo from './Redux/components/pages/Axios';

function App() {

  return (
    <Provider store={store}>
        <TopMenu />
    </Provider>
  );
}

export default App;
