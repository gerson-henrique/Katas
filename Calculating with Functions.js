// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));
// FUNDAMENTALSFUNCTIONSCONTROL FLOWBASIC LANGUAGE FEATURESFUNCTIONAL PROGRAMMINGDECLARATIVE PROGRAMMINGHIGHER-ORDER FUNCTIONS

function operation( firstParam, dataFunction ) {
  let response = 0;
   if ( dataFunction ) {
   response = dataFunction
   switch ( response.type ){
   case '*' : response = firstParam * response.secondParam;
   case '/' : response = Math.floor( firstParam / response.secondParam);
   case '+' : response = firstParam + response.secondParam;
   case '-' : response = firstParam - response.secondParam;
 }
  } else response = firstParam 
   return response
 }
 
 function zero( calcData ) { operation(  0, calcData ) } 
 function one( calcData ) { operation(1, calcData ) }
 function two( calcData ) { operation( 2, calcData ) }
 function three( calcData ) { operation( 3, calcData ) }
 function four( calcData ) { operation( 4, calcData ) }
 function five( calcData ) { operation( 5, calcData ) }
 function six( calcData ) { operation( 6, calcData ) }
 function seven( calcData ) { operation( 7, calcData ) }
 function eight( calcData ) { operation( 8, calcData ) }
 function nine( calcData ) { operation( 9, calcData ) }
 
 function plus( number2 ) {
   
  const resultData = {
     type: '+',
     secondParam: number2,
   }
   
   return resultData ;
 }
 function minus( number2 ) {
   const resultData = {
     type: '-',
     secondParam: number2,
   }
   
   return resultData ;
 }
 function times( number2 ) {
   const resultData = {
     type: '*',
     secondParam: number2,
   }
   
   return resultData ;
 }
 function dividedBy( number2 ) {
   const resultData = {
     type: '/',
     secondParam: number2,
   }
   
   return resultData ;
 }
