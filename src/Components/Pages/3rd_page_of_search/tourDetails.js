import React, {useState, useEffect} from 'react'
// import {history} from '../Front Page/History'
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import { useHistory , useParams} from "react-router-dom";
import {getContent} from '../../../Redux/actions/content'

// export const TourDetails = ({detailsList,history}) =>{
  export const TourDetails = (props) =>{

    let {id} = useParams;

    // const history = useHistory();

    console.log('TOURDETAILS',props)

  // console.log('[NEW DETAILS HISTORY_1]', history1)
  
    // const [re_rate, setRateAgain] = useState([])

    // const dispatch = useDispatch();
    // const data = useSelector(state => state.content.content)
    
    // useEffect ( () => {
    //       dispatch (getContent (history.location.state[0].id));
    // }, []);

    // console.log('HISTORY LOCATION', history.location.state[0].id)
    // console.log('[DETAILED CONTENT]', data)
        return (
          <div>
            {/* <div>{history1.location.pathname}</div> */}
            <h3>Hi, Tour</h3>
            {/* {
               re_searchResults && (re_searchResults.map(item => {

                for (let key in re_rate[0]){
                 if(re_rate[0][key].n_available !== "0" ){
                  return (
                         <>
                                <h2>{item.title}</h2>
                                  <div className = 'rateDetailsGrid'>
                                      <div>Package Inclusions : </div>
                                        <ul>
                                            <li>Room type : {re_rate[0][key].category}</li>
                                            <li>Package capacity : {re_rate[0][key].adults} adults</li>
                                            <li>Board type : {re_rate[0][key].tariff}</li>
                                            
                                            <li style={{
                                                backgroundColor: 'lightgreen' , 
                                                display: 'block', 
                                                border: '2px solid darkgreen',
                                                width: '15vw'}}>
                                                    Availablity : {re_rate[0][key].n_available}
                                            </li>
                                            
                                            <li style={{fontWeight: 'bold', fontSize: '15px'}}>TOTAL package Rate for {re_rate[0][key].adults} adults : 
                                            <span>{re_rate[0][key].currency_name} {re_rate[0][key].n_value}</span>
                                            </li>

                                        </ul>
                                  </div>
                          </>
                      )
                     }
                     else {
                       return (
                         <h2>Tour not found. Please repeat your search</h2>
                       )
                     }
                       
                   }
               
                     
                  }
                )
 
             ) */}
            {/* } */}
            {/* {

                <Description itemClick={re_searchResults} data={data}/>
            } */}
             
        </div>
      )
    } 



    // const Description = (itemClick, data) =>{
    //    console.log('[DESCRIPTION] : ' , itemClick, data)
    //     return(
    //         data.length > 0 && (data.map(tour => {
    //             if(tour.tour_id === itemClick[0].click) {
    //                return (<span>{tour.about} </span>)
    //                }
    //                else return <span>Please choose another tour. We are fully booked!</span>
    //              }
    //         ))
    //     )   
    // }
