function coinCounter (amount) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;
  amount = amount * 100;
 			
  	coinPurse.quarters = parseInt(amount/25)
  	console.log("quarter=", coinPurse.quarters)
  	coinPurse.dimes = parseInt((amount% 25) /10)
  	console.log("dimes=", coinPurse.dimes)
  	coinPurse.nickels()

 			parseInt(amount)
  			console.log(amount)
		amount = 0


  	

  return coinPurse;
}

var coins = coinCounter(.67)
console.log(coins);