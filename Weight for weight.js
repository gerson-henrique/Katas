const stringSum = (a) => {
  const numbers = a.toString().split('');
  const result = numbers.reduce((total,num) => (total + parseInt(num) ),0);
  return result
}

function orderWeight(strng) {  
  const numArray = strng.split(' ');
  const response = numArray.sort((a, b ) => {
  if ( stringSum(a) - stringSum(b) === 0 ){
   if (a > b) return 1
    else return -1  
  }
  else return stringSum(a) - stringSum(b);
  });
  
return response.join(' ');

            }
              
