import React ,{useState, useEffect} from 'react'

const products = [
    {
        id: 1,
        title: 'Product 1',
        price: 30
    },
    {
        id: 2,
        title: 'Product 2',
        price: 50
    },
    {
        id: 3,
        title: 'Product 3',
        price: 70
    }
]

export const Cart = ({cart}) => {

  const sum = cart.reduce((sum, prev) => {
      return sum + prev.price
  }, 0);

   console.log(sum);
    return(
        <>
            {
                cart.length > 0 && (
                    <div>
                        <h2>Cart ({sum}): </h2>
                        <ul>
                            {
                                cart.map(item => {
                                    return(
                                        <li>{item.title}{item.price}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                )
            }
        </>

    )
}

const saveToStorage = (key, store) => {

    localStorage.setItem(key, JSON.stringify (store));
}

const getDataFromStorage = (key) => {
    try {
        return JSON.parse(localStorage.getItem (key)) ;  
     } catch (error) {
         return [];
     }
}

export const CartDemo = () =>{

    console.log(getDataFromStorage('cart'));

    const [cart, setCart] = useState([]);

    useEffect (() => {

        const preloadedData = getDataFromStorage('cart');

        if(preloadedData){
            console.log('preloadedData', preloadedData );
            setCart(preloadedData);
          }
        }, [])

    const addToCart = (product) =>_=> {

        let data = [...cart, product];
        setCart(data);
        saveToStorage('cart', data)
    }
    
    const removeFromCart = (product) =>_=> {

        let data = cart.filter (item => item.id !== product.id)
        setCart(data);
        saveToStorage('cart', data)
    }
    return(
        <div>
          <h2>Product: </h2>
            <Cart cart={cart} />
           <ul>
               {
                   products.map((product) => {
                     let isInCart = cart.some(item => product.id === item.id);
                       return(
                           <li key={product.id}>
                               <span>{product.title} ({product.price})</span>
                                    {
                                        isInCart ? (
                                            <button onClick={removeFromCart(product)}>Remove </button>
                                        ) : (
                                            <button onClick={addToCart(product)}> Book Now! </button>
                                        )
                                    }
                               
                            </li> 
                       )
                   })
               }
           </ul>

       </div>
    )
}
