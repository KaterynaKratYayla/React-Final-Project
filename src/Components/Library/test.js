// import React, {useState} from 'react'
// import './switcher_index.css'
// import {SwitcherItem} from './Switcher'
// import {Switcher} from './Switcher'

// /*

//     Используя хуки написать компонент, который будет работать с Controlled формой следующего формата:
    
//     1. UserName = text
//     2) Email = email
//     3) City = select (Kyiv, Lviv, Harkiv, Odesa )
//     4) Type = Компонент Toogle с предыдущих занятий
    
//     После нажатия на Enter или кнопки "Отправить", скрипт должен создать под формой в списке элемент в
//     котором будут указаны все вышеуказанные поля.
//     Сами же поля в компоненте должны быть очищены после добавления нового элемента.
//     Все поля обязательные.
    
// */

// const ConForm = () => {

//     const [myInput1, setMyInput1] = useState('');
//     const [myInput2, setMyInput2] = useState('');
//     const [options, setMyOption] = useState(''); 
//     const [align, setAlign] = useState('');   
    
//     const [list , setList] = useState([]);

//     const changeHandler = ( me ) => _ => {
//          setAlign(me);
//         }

//     function myInputFunc1 (e) {     
//         console.log(e.target.value) 
//         return setMyInput1 (e.target.value)
//         }

//     function myInputFunc2 (e) {     
//         console.log(e.target.value) 
//         return setMyInput2 (e.target.value)
//         }

//     function changeOption(e){
//       console.log(e.target.value)
//       return setMyOption(e.target.value)  
//     }

//     const addToList = () => {
//         const newList = {
//             done: false,
//             name: myInput1,
//             item2: myInput2,
//             item3: align,
//             item4: options 
//         }

//     setList([...list, newList]);
//     setMyInput1('');
//     setMyInput2('');

//     console.log(newList)

//     }

//     function setDone (name){
//         return function(){
//              let changedList = list.map(function(listing){
//             if (listing.name === name){
//                 listing.done = !listing.done;
//             }
//              return listing
//         })

//         setList (changedList)
//     }
// }

//     const onSubmit = (e) =>{
//         e.preventDefault();
//     }

//     return(
//         <form className='myForm' onSubmit={onSubmit}>
//             <div>
//             <Switcher name={'align'} changeHandler={changeHandler} active={align}>
//                 <SwitcherItem value='HOTELS'>HOTELS</SwitcherItem>
//                 <SwitcherItem value='TOURS'>TOURS</SwitcherItem>
//                 {/* <SwitcherItem value='job Applicant'>Job Applicant</SwitcherItem> */}
//               </Switcher>

//             <label>{'UserName'}</label>
//             <input 
        
//               type={'text'}
//               value={myInput1}
//               onChange={myInputFunc1}
//               placeholder={`Enter your UserName`}
//               required/>
//             </div>
//             <div>
//             <label>{'Email Address'}</label>
//             <input 
            
//               type={'email'}
//               value={myInput2}
//               onChange={myInputFunc2}
//               placeholder={`Enter your ${'Email Address'}`}
//               required/>
//             </div>
//              <select onChange={changeOption}>
//                 <option value='Kyiv'>Kyiv</option>
//                 <option value='Lviv'>Lviv</option>
//                 <option value='Kharkiv'>Kharkiv</option>
//                 <option value='Odesa'>Odesa</option>
//             </select>    

//              {/* <Switcher name={'align'} changeHandler={changeHandler} active={align}>
//                 <SwitcherItem value='student'>Student</SwitcherItem>
//                 <SwitcherItem value='employeer'>Employeer</SwitcherItem>
//                 <SwitcherItem value='job Applicant'>Job Applicant</SwitcherItem>
//               </Switcher> */}
            
//            <button type='submit' onClick={addToList}>Submit</button>
        
//             <ul>
//                 {
//                     list.map (function(listitem,index){
//                         return <li 
//                                       key={index} 
//                                       className={listitem.done ? 'list__green' : 'list__red'}
//                                       onClick={setDone(listitem.name)}>
//                                   {listitem.name} / {listitem.item2} / {listitem.item3} / {listitem.item4}
//                                </li>
                        
//                     })
//                 }
//                 </ul>
//         </form>
//     )
// }


// export default ConForm;
