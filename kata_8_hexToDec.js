// Write a program that will convert a hexadecimal number, represented as a string (e.g. "10af8c"), to its decimal equivalent.

// The program should return -1 for invalid hexadecimal strings.

// Source
// All of Computer Science http://www.wolframalpha.com/examples/NumberBases.html

function hexToDec(hexadecimal) {
 let spell= hexadecimal.toString()
    spell = spell.split('')
    for(let i=0; i<spell.length;i+=1){
        let test = spell[i]
        let testII = parseInt(test,16)
        console.log(testII)
        if ( isNaN( testII) ){
            console.log(testII)
        return -1
    }
    }
    
    return  parseInt(hexadecimal,16)
   }
   hexToDec('u')
