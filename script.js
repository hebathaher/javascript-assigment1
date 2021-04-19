let my_info=prompt('how old are you?');
let second_value=prompt('enter second value');
 let result;

 if(my_info==null && typeof second_value ==='string')
 {
  result=0;
  alert(result);
 }else{
  result= Number(my_info)+Number(second_value); 
  alert (result); 
 } 
