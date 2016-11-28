function coinCounter (amount) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;
  amount = amount * 100;
  // remainder
  // something that loops through it till the amount goes to zero
  // if else
  // then clean up with switch

// if remainer is zero, it's safe to divide by .25
  if (amount %25 === 0) {
  	coinPurse.quarters = amount / 25;
  	// amount = amount - (coinPurse.quarters)
  	// console.log(amount);
  } else 
  		if (amount %25 > 0) {
  			amount = amount - (amount/25);
  			console.log(amount/100);
  		}

  // else {
  // 		if (amount%.10 === 0) {
  // 		coinPurse.dimes = amount / .10;
		// } 

		//   else {
		//   	if (amount%.05 ===0) {
  // 		coinPurse.dimes = amount / .05;
  // 			}
		// }



  // 	}


  return coinPurse;
}

var coins = coinCounter(.67)
console.log(coins);