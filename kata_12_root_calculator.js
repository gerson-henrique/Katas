function digital_root(n) {
  let digits = n;
  let sum = 0;
    
  while (digits.toString().length > 1) {
    sum = 0;
    digits = digits.toString().split('').map(Number);
    for (let i = 0 ; i < digits.length ; i++ ) {
      sum  += digits[i];
    }
    digits = sum;
  }
  return sum
}
