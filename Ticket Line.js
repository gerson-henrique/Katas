
/* The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

Examples:
tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50) */

function tickets(peopleInLine) {
  let dollars25 = 0;
  let dollars50 = 0;
  let dollars100 = 0;

  for (let i = 0; i < peopleInLine.length; i += 1) {
    let client = peopleInLine[i];

    switch (client) {
      case 25:
        dollars25 += 1;
        break;

      case 50:
        if (dollars25 > 0) {
          dollars50 += 1;
          dollars25 -= 1;
        } else {
          return "NO";
        }
        break;

      case 100:
        if (dollars50 > 0 && dollars25 > 0) {
          dollars100 += 1;
          dollars50 -= 1;
          dollars25 -= 1;
          break;
        } else if (dollars25 > 2) {
          dollars100 += 1;
          dollars25 -= 3;
          break;
        } else {
          return "NO";
        }
    }
  }

  return "YES";
}
