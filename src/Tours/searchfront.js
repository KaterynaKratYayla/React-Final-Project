import React, {Component,useState,useEffect} from 'react'
import './tour.css';
import hotelLIST from './hotelLIST.json';
import {GuestItem} from './searchrender.js';
import {withRouter, Route, Redirect, Link, BrowserRouter, Switch} from 'react-router-dom'
import moment from 'moment';
import 'moment/locale/en-gb';

import { useHistory } from "react-router-dom";

moment.locale('en-gb');

export const Search = (props) => {

  console.log(props)
  // const [tourSearch, settourSearch] = useState('');
  const [date, setDate] = useState('');
  const [Adults, setAdults] = useState('');
  const [Children, setChildren] = useState('');
  const [inputSelect, setinputSelect] = useState('');
  const [option, setMyOption] = useState(''); 
  // const [index, setIndex] = useState('');
  const [smartresponse, setResponse] = useState('');
  const history = useHistory();

  const [list , setList] = useState([]);
  const [selector, setSelect] = useState([{title: 'Loading...'}]);
  
  console.log(hotelLIST)

  const changeHandler = (e) => {
      const etarget = e.target.value;
      const filteredUsers = hotelLIST.filter(function(tour){
        return tour.title.toLowerCase().includes(etarget.toLowerCase())
        })         
         setSelect(filteredUsers)
         console.log(setSelect)
         setinputSelect(etarget)
   }

  function dateFunc (e) {     
      // console.log(e.target.value) 
      return setDate (e.target.value)
      }
  
   function adultsFunc (e) {     
      // console.log(e.target.value) 
      return setAdults (e.target.value)
      }

  function childrenFunc (e) {     
      // console.log(e.target.value) 
      return setChildren (e.target.value)
      }

  const optionChecker = (e) => {
    //  const etarget = e.target.value;
     console.log(e.target.value)
    //  return selector.filter((tour)=>
    //  etarget.value === tour.index
    //  )
     setMyOption (e.target.value)
    }

  const addToList = () => {

      const newList = {
          // done: false,
          // name: tourSearch,
          // action: "SiteArktur_SearchAPI_RQ",
          // i_currency: "2001",
          date: date,
          // n_nights: 5,
          adults: Adults,
          children: Children,
          select: inputSelect, 
          title: option,
          // i_city: "",
          // i_hotel: 6420,
          // index: index
      };

  setList([...list, newList]);
  setDate('');
  setAdults('');
  setChildren('');
  setinputSelect('');
  setMyOption('');

  console.log('[NewList] : ' , newList)

  history.push('/search_results' , [...list, newList])
  // history.push('/test_results' , [...list, newList])
  console.log('[HISTORY : ] ', history)
}

  const onSubmit = (e) =>{
    console.log('[event]:', e, '[e.target]:', e.target, '[e.target.value] :', e.target.value)   
    e.preventDefault();
     
}
   

  return(
        <div>
           <form className='mySearch' onSubmit={onSubmit}>
                 <input type='text' value={inputSelect} onChange={changeHandler} placeholder={'Country or City'}/>
                   <select onChange={optionChecker}>
                      {
                          selector.length > 0 ? (
                            selector.map((pac) => {
                              // setIndex(pac.index)
                                return (
                                    <option value={pac.title}>{pac.title}</option>
                                  )
                                }
                              )
                            ) : (
                                <div>
                                    No results found for {selector}
                                </div>
                                )
                        }
                      
                    </select>                           
          
             <div>
            
               <input 
                 type="date" 
                 value={date}
                 onChange={dateFunc}
                 required/>
             </div>
          
            <div>
              <input 
                 type={'number'}
                 value={Adults}
                 onChange={adultsFunc}
                 placeholder={`Adults`}
                required/>
           </div>
          
          <div>
            <input       
                type={'number'}
                value={Children}
                onChange={childrenFunc}
                placeholder={`Children`}/>
          </div>
                      
         <button type='submit' onClick={addToList}>Search</button>
        </form> 
        
            <>       
              {list.length > 0 && (
               <GuestItem 
                    option={option} 
                   	selector={selector}
                    // location={props.location}
                    list={list}
                  />	
             )
          }
        </>
       </div>
      )
    }


