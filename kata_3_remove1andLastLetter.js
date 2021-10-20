function removeChar(str){
let arrStr= [];
 let finalWord="";
arrStr=str.split('')
  arrStr.pop()
  arrStr.shift()
 
  for(let indice in arrStr) {
  finalWord += arrStr[indice]
    
  }
  

return finalWord
};
