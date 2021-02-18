import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
// import {getDescription, getENdescription , getImages} from "../../Redux/actions/list"
import './hotels.css'
import axios from "axios"
// import {HotelGallery} from '../Library/Hotel Photo Gallery/photoGallery'
import {SingleTour} from './single_tour'
import Autocomplete from 'react-autocomplete'

export const TestCities = (props) =>{

//   const dispatch = useDispatch();
//   const descrip = useSelector(state => state.hotels.parts)
const [city, setCity] = useState([])

// useEffect ( () => {
//   dispatch (getDescription ());
// }, []);

    useEffect ( () => {
        axios.get('http://smartbooker.biz/interface/classifier?classifier=city'
        // ,  {
        //  params: {
        //     classifier: "city"
        //   }
        //  })
        )
         .then( res => {
    //         // const newArray = res.data.hotels.hotel.dates.date[0].price.map(function(item){
    //         //   for (let key in item){
    //             // return item[key]
    //         //   }
            console.log('[CITIES] : ' , res)
    //         // })
    //         // setCity([...newArray])
        })
      .catch( error => {
         console.log( '[axios error] : ' , error)
    //     //  setCity(undefined)
          });
      }, []);

      useEffect ( () => {
        axios.get('http://smartbooker.biz/interface/classifier?classifier=countries'
        )
         .then( res => {
            console.log('[COUNTRIES] : ' , res)
        })
      .catch( error => {
         console.log( '[axios error] : ' , error)
          });
      }, []);

      useEffect ( () => {
        axios.get('http://smartbooker.biz/interface/classifier?classifier=contract')
         .then( res => {
            console.log('[CONTRACTS] : ' , res)
        })
      .catch( error => {
         console.log( '[axios error] : ' , error)
          });
      }, []);

      useEffect ( () => {
        axios.get('http://smartbooker.biz/interface/classifier?classifier=language'
        )
         .then( res => {
            console.log('[LANG] : ' , res)
        })
      .catch( error => {
         console.log( '[axios error] : ' , error)
          });
      }, []);

      useEffect ( () => {
        axios.get('http://smartbooker.biz/interface/classifier?classifier=hotel'
        )
         .then( res => {
            console.log('[HOTEL] : ' , res)
        })
      .catch( error => {
         console.log( '[axios error] : ' , error)
          });
      }, []);

      useEffect ( () => {
        axios.get('http://smartbooker.biz/interface/classifier?classifier=service_type'
        )
         .then( res => {
            console.log('[SERVICE_TYPE] : ' , res)
        })
      .catch( error => {
         console.log( '[axios error] : ' , error)
          });
      }, []);

      useEffect ( () => {
        axios.get('http://smartbooker.biz/interface/classifier?classifier=service_type'
        )
         .then( res => {
            console.log('[SUBSERVICES] : ' , res)
        })
      .catch( error => {
         console.log( '[axios error] : ' , error)
          });
      }, []);

      useEffect ( () => {
        axios.get('http://smartbooker.biz/interface/classifier?classifier=room'
        )
         .then( res => {
            console.log('[ROOM] : ' , res)
        })
      .catch( error => {
         console.log( '[axios error] : ' , error)
          });
      }, []);

      useEffect ( () => {
        axios.get('http://smartbooker.biz/interface/classifier?classifier=tariff'
        )
         .then( res => {
            console.log('[TARIFF] : ' , res)
        })
      .catch( error => {
         console.log( '[axios error] : ' , error)
          });
      }, []);

      useEffect ( () => {
        axios.get('http://smartbooker.biz/interface/classifier?classifier=room_type'
        )
         .then( res => {
            console.log('[ROOM_TYPE] : ' , res)
        })
      .catch( error => {
         console.log( '[axios error] : ' , error)
          });
      }, []);

      useEffect ( () => {
        axios.get('http://smartbooker.biz/interface/classifier?classifier=room_category'
        )
         .then( res => {
            console.log('[ROOM_CATEGORY] : ' , res)
        })
      .catch( error => {
         console.log( '[axios error] : ' , error)
          });
      }, []);

      useEffect ( () => {
        axios.get('http://smartbooker.biz/interface/classifier?classifier=contract_theme'
        )
         .then( res => {
            console.log('[CONTRACT_THEME] : ' , res)
        })
      .catch( error => {
         console.log( '[axios error] : ' , error)
          });
      }, []);


      
      useEffect ( () => {
        axios.get('http://smartbooker.biz/interface/classifier?classifier=contract'
          )
        .then( data => {
         console.log('[hotelsDATA] : ' , data)
           })
        .catch( error => {
         console.log( '[axios error] : ' , error)
           });
         }, []);
    
    return(
        <div>
            <h2>HI CITIES</h2>
                  <MyInput />
            <SingleTour />
        </div>
    )
  }

  export const MyInput = ({array}) =>{

    console.log('[ARRAY] :' , array)

    const [value, setValue] = useState('');
    // const [city, setCity] = useState('');
    // const [tour, setTour] = useState('');

    // useEffect ( () => {
    //   axios.get('http://smartbooker.biz/interface/classifier?classifier=city')
    //    .then( res => {
    //       console.log('[CITY] : ' , res.data)
    //       setCity(res.data)
    //      })
    // .catch( error => {
    //    console.log( '[axios error] : ' , error)
    //    setCity (undefined)
    //     });
    // }, []);

    // console.log(city)

    // useEffect ( () => {
    //   axios.get('http://smartbooker.biz/interface/classifier?classifier=contract')
    //    .then( res => {
    //       const newArray = res.data.map(function(item){
    //         return {
    //           id: item.tour_id,
    //           name: item.tour_name
    //         } 
    //       })
    //        setTour(newArray)
    //   })
    // .catch( error => {
    //    console.log( '[axios error] : ' , error)
    //    setTour (undefined)
    //     });
    // }, []);
  

    // console.log('[TOUR] : ' , tour)

    return (
      <Autocomplete
        items={array}
        shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
        getItemValue={item => item.name}
        renderItem={(item, highlighted) =>
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
          >
            {item.name}
          </div>
        }
        value={value}
        onChange={e => setValue(e.target.value)}
        onSelect={value => setValue(value)}
      />
    )
  }

