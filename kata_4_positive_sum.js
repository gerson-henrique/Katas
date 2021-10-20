function positiveSum(arr) {
 let result = 0;
  for (let number of arr){
  if (number < 0){
    number=0
  }  
  result += number
}
  return result;
}
