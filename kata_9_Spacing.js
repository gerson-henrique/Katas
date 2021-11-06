function reverseWords(str) {
 let arrStr =  str.split(' ')
 
  for (let i = 0; i < arrStr.length ; i+= 1){
   arrStr[i] = arrStr[i].split('').reverse().join('')
  }
  return arrStr.join(' ')
  
  // Go for it
}
