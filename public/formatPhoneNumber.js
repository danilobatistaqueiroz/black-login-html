let formatPhoneNumber = (str) => {
  //Filter only numbers from the input
  let cleaned = ('' + str).replace(/\D/g, '');
  
  //Check if the input is of correct
  let match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  
  if (match) {
    //Remove the matched extension code
    //Change this to format for any country code.
    let intlCode = (match[1] ? '+55 ' : '')
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
  }
  
  return str;
}

let onChangePhoneNumber = (str) => {
  if(str.slice(0, 2)=='11'){
    str='(11)'+str.slice(2);
  }
  if(str.slice(0, 3)=='011'){
    str='(011)'+str.slice(3);
  }
  if(str.slice(0, 2)=='55'){
    str='+55'+str.slice(2);
  }
  if(str.slice(0,4)=='(11)') {
    if(str.length==8) {
      str=str+'-'
    }
  }
  if(str.slice(0, 3)=='+55'){
    if(str.length==6){
      if(str.indexOf('(')==-1 && str.indexOf(')')==-1) {
        str='+55('+str.slice(3,5)+')'+str.slice(5)
      }
    }
    if(str.length==11){
      str=str+'-'
    }
  }
  return str;
}