//FUNCTION TO SORT OUT AN ARRAY OF OBJECT AND RETURN FIRST OCCURANCE OF EACH VARIATY DEPENDING UPON A CONDITION
 //фильтрую объект с тарифами, датами так, чтобы вывести первую встречающую дату каждого вида (к примеру, у меня пришло
 //в массиве 10 раз дата 2021-03-03, 3 раза дата 2021-03-04, 4 раза дата 2021-03-05 - я вывожу новый массив, где будет
 //объект в массиве, где первый раз встречается 2021-03-03, потом объект, где встречается 2021-03-04 первый раз, и т.д.)
 //это нужно, чтобы вывести список периодов для выбора
 
var array1 = [{rate:'115', date:'2021-03-02'},
              {rate:'134', date:'2021-03-02'}, 
              {rate:'150', date:'2021-05-02'},
              {rate:'167', date:'2021-05-02'},
              {rate:'177', date:'2021-05-02'},
              {rate:'190', date:'2021-07-02'},
              {rate:'200', date:'2021-07-02'}];

const new_array = array1.filter((item,index,array) =>
array.findIndex(t => t.date === item.date)===index)

console.log('[TEST]', new_array)