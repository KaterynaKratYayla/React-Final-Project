import React , {useState, useEffect} from 'react'
import {Route, NavLink, Link, BrowserRouter, Switch} from 'react-router-dom'
import '../Front Page/menu.css'
import {NotFound} from './purecontentPage'

export const TOURS = ({location}) => {

    console.log(location)
    const [user, setUser] = useState (null);

    useEffect ( () => {
        fetch('https://jsonplaceholder.typicode.com/users/')
          .then(res => {
            
            if (res.status === 404) {
                throw 'Page error'
            }
            return res.json()
        })
        .then(user => {
                    console.log(user)
                    setUser(user)												
                })
        .catch(error => {
            console.log('error',error);
            setUser(undefined)
        })

        // return () => {
        // 	setUser (null);
        // }
    }, []);

    if (user === null){
        return(<>Loading</>)
    }

    if (user === undefined){
        return <NotFound />
    }

    // const unMount = () => {
    // 	return setUser(null);
    // }
                
    return (
    <BrowserRouter>
      <div>
        <h2> Welcome to my List</h2>		
                  <ul className='list'>
            
                   {
                    user && (user.map(pax => (
                    
                           <li key={pax.id}>
                              <Switch>
                                <Route 
                                    exact path={`/list/:${pax.id}`} 
                                    render={ (props) => 
                                       {
                                            return (
                                                         <ListItem 
                                                         oneuser={pax} 
                                                         location={props.location}/>
                                                    )
                                        }
                                    }
                                  />
                                <Link to={`/list/:${pax.id}`}>
                                     {pax.name} 
                                </Link>
                              </Switch>
                           </li>
                    )))		   
                   }
             </ul>		
        </div>
        
      </BrowserRouter>
    )
}

export const ListItem = (props) => {
  const {oneuser, location, match} = props;

    console.log(props, `/list/:${oneuser.id}` === location.pathname, match, location)


    if(`/list/:${oneuser.id}` === location.pathname){
    return(
      <div className='list_2'>
        <p>{oneuser.id} </p>
        <p>{oneuser.name}</p>
        <p>{oneuser.username}</p>
        
        <>
          {
           Object.keys(oneuser.company).map(key => 
           <p key={key}>{oneuser.company[key]}</p>) 
          }
        </>
       </div>
      )
     }
      return null;
    }