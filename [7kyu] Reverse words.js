// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
 let arrStr =  str.split(' ')
 
  for (let i = 0; i < arrStr.length ; i+= 1){
   arrStr[i] = arrStr[i].split('').reverse().join('')
  }
  return arrStr.join(' ')
}

// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
