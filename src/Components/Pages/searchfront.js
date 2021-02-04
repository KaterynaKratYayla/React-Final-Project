import React, {useState,useEffect} from 'react'
import './search.css';
import {GuestItem} from '../Pages/searchrender';
import {Switcher, SwitcherItem} from '../Library/Switcher'
import '../Library/switcher_index.css'
import moment from 'moment';
import 'moment/locale/uk'
// import axios from 'axios'
import Autocomplete from 'react-autocomplete'
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {getGeo, getGeneralGeo} from "../../Redux/actions/cities"
import { DatePicker ,Space } from 'antd'
import 'antd/dist/antd.css'
// import '../../App.css'
import {SwitchablePicker} from '../Library/switchable_datepicker'

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
     setValue (e.target.value)
     if(value.length >= 0){
       setOpen(true)
     }
    }

    // console.log('[TODAY DATE]' , moment().format('YYYY-MM') , '[TEST_DATE] : ' , testDate)

  const addToList = () => {

      const newList = {
          // date: date,
          title: value,
          date: testDate
      };

  setList([...list, newList]);
  setDate('');
  setValue('');

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
                                fontFamily: 'Tahoma',
                                 fontSize: '16px',
                                 background: '#d9e6f1',
                                 borderRadius: '5px',
                                 border: '2px solid #BCD7EE',
                                 color: 'darkslategrey',
                                //  marginTop: '0.2vw',
                                 marginLeft: '-2.2vw',
                                 position: 'absolute',
                                 display: 'block',
                                 zIndex: '100'
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
                                      marginLeft: '2vw'
                                    }, 
                                      
                                  placeholder: 
                                      'Please input country, city or tour name' }}
                    items={geo}
                    shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    getItemValue={item => item.name}
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


    