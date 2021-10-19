function DNAStrand(dna){
    let arrDna = [];
      arrDna = dna.split('');
     let newArr = [];
      let newWord = "";  
      for( let intruction in arrDna ){
           switch (arrDna[intruction]) {
                case "A":
                  newArr[intruction] = "T";
                  break;
                case "C":
                  newArr[intruction] = "G";
                  break;
                case "G":
                  newArr[intruction] = "C";
                  break;
                case "T":
                  newArr[intruction] = "A";
                  break;
          
                default:
                  newArr[intruction] = arrDna[intruction]   
                break;
        
      }
        
     
    }
  
    for(let letter of newArr ) {
         newWord += letter
       }

return newWord
}

