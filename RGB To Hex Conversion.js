// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3
// ALGORITHMS

function validHexConversor( numbers ){
  numbers = Object.values(numbers)
  const results = numbers.map((n) => { 
    return( n >= 255 ) ? 'FF' : ( n <= 0 ) ? '00' : n.toString(16).toUpperCase()
  });
  const addZeros =  results.map((n) => (n.length === 1) ? `0${n}`: n)                
  return addZeros
};

function rgb( r, g, b ) {
  const hexParams = validHexConversor( arguments );
  const rgb = `${hexParams[0]}${hexParams[1]}${hexParams[2]}`
  return rgb
}
