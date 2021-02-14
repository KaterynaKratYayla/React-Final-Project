import React, {Component,useState,useEffect} from 'react'
// import './tour.css';
import './search_inner.css';
import hotelLIST from '../static json data/hotelLIST.json';
import {GuestItem} from '../../../Archive/_searchrender_v3';
import {withRouter, Route, Redirect, Link, BrowserRouter, Switch} from 'react-router-dom'

import { useHistory } from "react-router-dom";

export const SearchInner = (props) => {

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
      return setDate (e.target.value)
      }
  
   function adultsFunc (e) {     
      return setAdults (e.target.value)
      }

  function childrenFunc (e) {     
      return setChildren (e.target.value)
      }

  const optionChecker = (e) => {
     console.log(e.target.value)
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
          <div class='formOuterWrapper_inner'>
           <div class="formInnerWrapper_inner">
             <form className='mySearch_inner' onSubmit={onSubmit}>
                 <input class='textInput_inner' type='text' value={inputSelect} onChange={changeHandler} placeholder={'Country or City'}/>
                   <select class='select_inner' onChange={optionChecker}>
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
                 class='dateInput_inner'
                 type="date" 
                 value={date}
                 onChange={dateFunc}
                 required/>
             </div>
          
            <div>
              <input 
                 className='number_inner'
                 type={'number'}
                 value={Adults}
                 onChange={adultsFunc}
                 placeholder={`Adults`}
                required/>
           </div>
          
          <div>
            <input  
               className='number_inner'     
                type={'number'}
                value={Children}
                onChange={childrenFunc}
                placeholder={`Children`}/>
          </div>
          <div  class='borderInnerWrapper2_inner'>
            <button type='submit' /*onClick={addToList}*/>SEARCH</button>
          </div>
     </form> 
    </div>
    </div>
      
        
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


