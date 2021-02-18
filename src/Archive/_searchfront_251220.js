import React, {useState,useEffect} from 'react'
// import './tour.css';
import './search.css';
import {GuestItem} from '../Pages/searchrender';
import {Switcher, SwitcherItem} from '../Library/Switcher'
import '../Components/Pages/FirstPageofSearchModule/SwitcherFront.css'
import moment from 'moment';
import 'moment/locale/uk'
import axios from 'axios'
import Autocomplete from 'react-autocomplete'
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {getGeo} from "../../Redux/actions/cities"

moment.locale('uk')

export const Search = (props) => {

   console.log(props)
  // const [main, setMain] = useState('');
  const [date, setDate] = useState('');
  // const [inputSelect, setinputSelect] = useState('');
  // const [Adults, setAdults] = useState('');
  // const [Children, setChildren] = useState('');
  // const [option, setMyOption] = useState(''); 
  const [list , setList] = useState([]);
  // const [selector, setSelect] = useState([{title: 'Loading...'}]);
  const [value, setValue] = useState('');
  const [tour, setTour] = useState([]);
  const [align, setAlign] = useState('');  
 
  const history = useHistory();

  const dispatch = useDispatch();
  const geo = useSelector(state => state.cities.locs)

useEffect ( () => {
  dispatch (getGeo ());
}, []);

console.log('[GEO] , ' , geo)
 
  const toggler = ( me ) => _ => {
    setAlign(me);
   }

  //  useEffect ( () => {
  //    axios.get('http://smartbooker.biz/interface/classifier?classifier=contract')
  //     .then( res => {
  //        const newArray1 = res.data.map(function(b){
  //          return {
  //            id: b.tour_id,
  //            name: b.tour_name
  //          } 
  //        })

  //           const newArray2 = res.data.map(function(q){
  //             return {
  //               id: q.city_id,
  //               name: q.city_name
  //               }
  //           })
               
  //             const newArray3 = newArray2.filter((item,index,array) =>
  //             array.findIndex(t => t.name === item.name && t.id === item.id)===index)
            
  //        console.log('[NEW ARRAY3] : ' , newArray3)
  //         setTour([...newArray1, ...newArray3])
  //    })
  //  .catch( error => {
  //     console.log( '[axios error] : ' , error)
  //     setTour (undefined)
  //      });
  //  }, []);
 
  // console.log('[TOUR] : ' , tour)

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
     console.log('[VALUE] : ', e.target.value)
     setValue (e.target.value)
    }

  const addToList = () => {

      const newList = {
          // done: false,
          // name: tourSearch,
          // action: "SiteArktur_SearchAPI_RQ",
          // i_currency: "2001",
          date: date,
          // select: inputSelect, 
          title: value,
          tour: geo
      };

  setList([...list, newList]);
  setDate('');
  setValue('');
  // setAdults('');
  // setChildren('');
  // setinputSelect('');
  // setMyOption('');

  console.log('[NewList] : ' , newList)

  history.push('/search_results' , [...list, newList])
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
               <div class='Autocomplete'>
                <Autocomplete
                   {...props}
                   menuStyle={{
                                fontFamily: 'Arial',
                                 fontSize: '18px',
                                 background: '#d9e6f1',
                                 borderRadius: '5px',
                                 border: '2px solid #BCD7EE',
                                 color: 'darkslategrey',
                                 marginTop: '0.2vw',
                                 marginLeft: '-2.2vw',
                                 position: 'absolute',
                                 display: 'block',
                                 zIndex: '100'
                               }
                              }
                    inputProps={{style: 
                                    { width: '35vw',
                                      height: '3vw', 
                                      fontFamily: 'Arial', 
                                      fontSize: '18px',
                                      borderTop: 'none',
                                      borderBottom: 'none',
                                      borderLeft: 'none',
                                      marginTop: '0.2vw',
                                      marginLeft: '2vw'
                                    }, 
                                      
                                  placeholder: 
                                      'Please input country, city or tour name' }}
                    items={geo}
                    shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    getItemValue={item => item.name}
                    renderItem={(item, highlighted) =>
                      <div
                          key={item.id}
                          style={{ backgroundColor: highlighted ? 'lightblue' : 'transparent'}}
                           >
                          {item.name}
                      </div>
                        }
                    value={value}
                    onChange={optionChecker}
                    onSelect={value => setValue(value)}
                    />
                 </div>
                
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
                    // option={option} 
                   	// selector={selector}
                    // location={props.location}
                    title={value}
                    list={list}
                  />	
             )
           }
        </>
       </div>
      )
    }


