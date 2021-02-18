import React, {Component,useState,useEffect} from 'react'
// import './tour.css';
import './search.css';
import {GuestItem} from '../Pages/searchrender';
import {withRouter, Route, Redirect, Link, BrowserRouter, Switch} from 'react-router-dom'
import {Switcher, SwitcherItem} from '../Library/Switcher'
import '../Components/Pages/FirstPageofSearchModule/SwitcherFront.css'
import moment from 'moment';
import 'moment/locale/uk'
import axios from 'axios'
import Autocomplete from 'react-autocomplete'

import { useHistory } from "react-router-dom";
moment.locale('uk')

export const Search = (props) => {

  console.log(props)
  const [main, setMain] = useState('');
  const [date, setDate] = useState('');
  const [Adults, setAdults] = useState('');
  const [Children, setChildren] = useState('');
  const [inputSelect, setinputSelect] = useState('');
  const [option, setMyOption] = useState(''); 
  const [index, setIndex] = useState('');
  // const [smartresponse, setResponse] = useState('');
  const history = useHistory();

  const [list , setList] = useState([]);
  const [selector, setSelect] = useState([{title: 'Loading...'}]);
  
  const [value, setValue] = useState('');
  const [city, setCity] = useState('');
  const [tour, setTour] = useState([]);
  
  const [align, setAlign] = useState('');  

  const toggler = ( me ) => _ => {
    setAlign(me);
   }

  //  useEffect ( () => {
  //    axios.get('http://smartbooker.biz/interface/classifier?classifier=city')
  //     .then( res => {
  //        console.log('[CITY] : ' , res.data)
  //        setCity(res.data)
  //       })
  //  .catch( error => {
  //     console.log( '[axios error] : ' , error)
  //     setCity (undefined)
  //      });
  //  }, []);

  //  console.log(city)

   useEffect ( () => {
     axios.get('http://smartbooker.biz/interface/classifier?classifier=contract')
      .then( res => {
         const newArray1 = res.data.map(function(b){
           return {
             id: b.tour_id,
             name: b.tour_name
           } 
         })

        //  const newArray2 = (param) =>{
        //    res.data.filter(function(item,index,array){
        //     return array.map(function(mapItem)
        //       {
        //        return mapItem[param]; 
        //       }).indexOf(item[param]) === index
        //     })
            // (item.city_name.toLowerCase().indexOf(item.city_name.toLowerCase()) === -1)
            //  return {id: item.city_id , name: item.city_name}


          // }  

            // const newArray2 = res.data.map(q => q.city_name);
            // const newArray3 = newArray2.filter((q, idx) =>
            //      newArray2.indexOf(q) === idx);

            const newArray2 = res.data.map(function(q){
              return {
                id: q.city_id,
                name: q.city_name
                }
            })
            //  => q.city_name);
            
            //  const newArray3 = newArray2.filter((q, idx,arr) => {
            //      return arr.indexOf(q.name) === idx;
            //       //  }
                
            //  })

            // const newArray3 = newArray2.map((obj, pos, arr) => {
              // return obj[obj.id]
                  // return arr.map(mapObj => mapObj[mapObj.id])
                  // .indexOf(obj[obj.id]) === pos;
                  // return arr.indexOf(obj.id) === pos;
              // });
          
              const newArray3 = newArray2.filter((item,index,array) =>
              array.findIndex(t => t.name === item.name && t.id === item.id)===index)
            
          // console.log('[RESDATA] : ' , res.data)
         console.log('[NEW ARRAY3] : ' , newArray3)
          setTour([...newArray1, ...newArray3])
     })
   .catch( error => {
      console.log( '[axios error] : ' , error)
      setTour (undefined)
       });
   }, []);
 
  console.log('[TOUR] : ' , tour)

  // console.log(hotelLIST)

  // useEffect ( () => {
  //   axios.get('http://smartbooker.biz/interface/classifier?classifier=contract')
  //    .then( res => {
  //       console.log('[CONTRACTS] : ' , res)
  //       setMain(res.data)
  //   })
  // .catch( error => {
  //    console.log( '[axios error] : ' , error)
  //    setMain(undefined)
  //     });
  // }, []);

  // console.log('[MAIN] : ' , main)
  // console.log('[HOTELLIST] : ' , hotelLIST)

  // const changeHandler = (e) => {
  //     const etarget = e.target.value;
  //     const filteredUsers = main.filter(function(tour){
  //       return tour.city_name.toLowerCase().includes(etarget.toLowerCase())
  //       })         
  //        setSelect(filteredUsers)
  //        console.log('[SELECTOR] : ' , selector)
  //        setinputSelect(etarget)
  //        console.log('[ETARGET SELECT] : ' , inputSelect)
  //  }

  //  console.log('[SELECTOR] : ' , selector)

  function dateFunc (e) {      
      return setDate (e.target.value)
      }
  
  //  function adultsFunc (e) {     
  //     return setAdults (e.target.value)
  //     }

  // function childrenFunc (e) {     
  //     return setChildren (e.target.value)
  //     }

  const optionChecker = (e) => {
     console.log(e.target.value)
    //  console.log(e.target.id)
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
          // title: option,
          // i_city: "",
          // i_hotel: 6420,
          // index: index
      };

  setList([...list, newList]);
  setDate('');
  // setAdults('');
  // setChildren('');
  // setinputSelect('');
  // setMyOption('');

  console.log('[NewList] : ' , newList)

  history.push('/search_results' , [...list, newList])
  // history.push('/test_results' , [...list, newList])
  console.log('[HISTORY : ] ', history)
}

  const onSubmit = (e) =>{
    // console.log('[event]:', e, '[e.target]:', e.target, '[e.target.value] :', e.target.value)   
    e.preventDefault();
     
}
   
  return(
        <div>

         <div class='switcher'>
             <Switcher name={'align'} changeHandler={toggler} active={align}>
                  <SwitcherItem value='HOTELS'>HOTELS</SwitcherItem>
                  <SwitcherItem value='TOURS'>TOURS</SwitcherItem>
                {/* <SwitcherItem value='job Applicant'>Job Applicant</SwitcherItem> */}
             </Switcher>   
          </div>  

          <div class='formOuterWrapper'>
        
           <div class="formInnerWrapper">
             <form className='mySearch' onSubmit={onSubmit}> 
             {/* <div> */}
                <Autocomplete
                    items={tour}
                    shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    getItemValue={item => item.name}
                    renderItem={(item, highlighted) =>
                      <div
                          key={item.id}
                          style={{ backgroundColor: highlighted ? 'lightblue' : 'transparent'}}
                          // class="Autocomplete"
                     >
                          {item.name}
                      </div>
                        }
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    onSelect={value => setValue(value)}
                    />
                  {/* </div> */}
                {/* <MyInput array={tour.concat(city)}/> */}
               {/* <div onChange={optionChecker} 
                   style={{listStyle: 'none' , 
                          display: 'block',
                          background : 'white',
                          border: '1px solid lightblue',
                          borderRadius: '5px',
                          zIndex: '20',
                          position: 'absolute'}}> */}
                
                   {/* <input class='textInput' type='search' value={inputSelect} onChange={changeHandler} placeholder={'Please input country , city or tour name'}/>
                        {
                          selector.length >= 0 ? (
                            selector.map((pac) => {
                               return (
                                    <div onTouchMove={test} value={pac.tour_id}>{pac.tour_name}</div>
                                  )
                                }
                              )
                            ) : (
                                <div>
                                    No results found for {selector}
                                </div>
                                )
                        }      */}
                
                  {/* </div>  */}

             <div>
       
               <input 
                 class='dateInput'
                 type="date" 
                 value={date}
                 onChange={dateFunc}
                 required/>
          
             </div>
          
            {/* <div>
              <input 
                 className='number'
                 type={'number'}
                 value={Adults}
                 onChange={adultsFunc}
                 placeholder={`Adults`}
                required/>
           </div> */}
          
          {/* <div>
            <input  
               className='number'     
                type={'number'}
                value={Children}
                onChange={childrenFunc}
                placeholder={`Children`}/>
          </div> */}
          <div  class='borderInnerWrapper2'>
            <button type='submit' onClick={addToList}>SEARCH</button>
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


