function formatPrice(price, numberOfDecimals, currencySign, hasSpace = true, isCurrencyOnRight = true) {

	const priceWithMathRound = price.toFixed(numberOfDecimals);

if(isCurrencyOnRight) {
      const partiallyFormattedPrice = priceWithMathRound;
			return hasSpace ? partiallyFormattedPrice + " " + currencySign : partiallyFormattedPrice + currencySign;

			/* if(hasSpace) {
				return partiallyFormattedPrice + “ “ + currencySign;
			} else {
				return partiallyFormattedPrice + currencySign;
			} */
		} else {
			return hasSpace ? currencySign  + " " + partiallyFormattedPrice : currencySign + partiallyFormattedPrice;
      }        
}

	
console.log(formatPrice(100.2222, 2,'$',true , true))
