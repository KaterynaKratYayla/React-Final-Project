export const ValidateQuery = (location) => {
    let data = location.search.replace('?','').split(',')
    console.log('DATA' , data);
    
    let result = {};
  
    let query = data.map (item =>{
      let name = item.match(/\w+(?==)/)
      let value = item.match(/\=.+/)
      console.log('[REGULAR VALIDATION]', value[0].replace('=',''))
  
      result[name[0]] = value[0].replace('=','');
  
        console.log('REGULAR', result)
    })
  
    console.log('RESULTING', result)
  
    return(result)
  
  }