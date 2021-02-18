import React, {useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import Autocomplete from 'react-autocomplete';
import { DatePicker ,Space } from 'antd';

import {GuestItem} from '../SecondPageofSearchModule/GuestItem';
import {Switcher, SwitcherItem} from '../../Library/PageDevices/Switcher'
import {getGeo, getGeneralGeo} from "../../../Redux/actions/cities"

import './Search.css';
import './SwitcherFront.css';
import 'antd/dist/antd.css';

moment.locale('uk')

export const Search = (props) => {
      // console.log('[PROPS] : ', props)


  const [date, setDate] = useState('');
  const [testDate, setTestDate] = useState('');
  const [list , setList] = useState([]);
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [align, setAlign] = useState('');  
  const [myID, setmyID] = useState('');
 
  const history = useHistory();

  const dispatch = useDispatch();
  const geo = useSelector(state => state.cities.locs)
  const geoGeneral = useSelector(state => state.cities.gen_locs)

  // const dateFormat = 'DD-MM-YYYY'

  useEffect ( () => {
     dispatch (getGeo ());
  }, []);
      console.log('[GEO] : ' , geo)

      useEffect ( () => {
        dispatch (getGeneralGeo ());
     }, []);
         console.log('[general_GEO] : ' , geoGeneral)

  const toggler = ( me ) => _ => {
    setAlign(me);
   }

  function dateFunc (e) {      
      return setDate (e.target.value)
      }

  function onChange(date, dateString) {
    setTestDate(dateString)
    console.log('[TEST_DATE] : ' , dateString)
    console.log('[DATE_PICKER] : ' , date, dateString);
      }

  const optionChecker = (e) => {
     console.log('[VALUE] : ', e.target.value)
    //  console.log('[ETARGET]',e.target)

    setValue (e.target.value)
     if(value.length >= 0){
       setOpen(true)

     }

    }

  const addToList = () => {

 
    const filtered = geo.filter(function(item){
        return item.name === value
    })

    const filtered_city_id = geoGeneral.filter(function(item){
      if(item.tour_id === filtered[0].id){
        return item.city_id
      }
      else return item.city_id === filtered[0].id
    })
    
    console.log('FILTERED_CITY_ID', filtered_city_id )

    const newList = {
      id: filtered[0].id,
      title: value,
      date: testDate
  };

  setList([...list, newList]);
  setDate('');
  setValue('');

  let route_query = `?title=${value},date=${testDate},id=${filtered[0].id},city_id=${filtered_city_id[0].city_id}`

  console.log('[NewList] : ' , newList)

  history.push(`/search_results/${route_query}` , [...list, newList])
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
                                fontFamily: 'Tahoma',
                                 fontSize: '16px',
                                 background: '#d9e6f1',
                                 borderRadius: '5px',
                                 border: '2px solid #BCD7EE',
                                 color: 'darkslategrey',
                                //  marginTop: '0.2vw',
                                 marginLeft: '-2.2vw',
                                 position: 'fixed', ///
                                 display: 'block',
                                 zIndex: '100',
                                 overflow: 'auto' ///
                               }
                              }
                    inputProps={{style: 
                                    { width: '35vw',
                                      height: '3vw', 
                                      fontFamily: 'Tahoma', 
                                      fontSize: '16px',
                                      borderTop: 'none',
                                      borderBottom: 'none',
                                      borderLeft: 'none',
                                      marginTop: '0.2vw',
                                      marginLeft: '2vw',
                                      
                                    }, 
                                      
                                  placeholder: 
                                      'Please input country, city or tour name' ,
                                
                                  }}
                    items={geo}
                    shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    getItemValue={item => item.name}
                    getItemId={item => item.name}
                    open={open}
                    onMenuVisibilityChange={isOpen =>setOpen(false)}
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
                    onSelect={value => setValue(value) + setOpen(false)}
                    // wrapperProps={wrapperProps(value)}
                    />
                 </div>              

             <div>

             {/* <DatePicker /> */}

             <Space direction="vertical">
                 <DatePicker size={'large'} 
                             onChange={onChange} 
                             picker="month" 
                            //  format={dateFormat} 
                             placeholder='Choose month'
                             bordered={false}
                            //  className='datePicker'
                            //  dropdownClassName='dropdownDatePicker'
                             style={{fontFamily:'Tahoma', paddingTop: '0.8vw'}}/>
            </Space>
          
             </div>          
       
          <div  class='borderInnerWrapper2'>
            <button type='submit' onClick={addToList}>SEARCH</button>
          </div>
     </form> 
    </div>
    </div>
      
        
            <>       
              {list.length > 0 && (
               <GuestItem 
                    title={value}
                    list={list}
                  />	
             )
           }
        </>
       </div>
      )
    }


    