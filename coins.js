function coinCounter (amount) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;
  amount = amount * 100;



 			// returns amount whole integer w/o decimal
  	coinPurse.quarters = parseInt(amount/25)
  	// console.log("quarter=", coinPurse.quarters)
  	// 
  	// divides remainder by 10
  	coinPurse.dimes = parseInt((amount% 25) /10)
  	// console.log("dimes=", coinPurse.dimes)
  	// 
  	// divides remainder by 5
  	coinPurse.nickels = parseInt(((amount% 25)%10) /5)
  	// console.log("nickels=", coinPurse.nickels)
  	// 
  	// divides remainder by 1 (redundant)
  	coinPurse.pennies = parseInt((((amount% 25)%10)%5)/1)

 			
  			// console.log("pennies =", coinPurse.pennies)
		


  	

  return coinPurse;
}

var coins = coinCounter(.88)
console.log(coins);