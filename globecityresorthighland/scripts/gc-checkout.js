const fees = 1.50; //Fees in dollars
const tax = 0.0; //Taxes in percentage with least being 0.00 and 5% being 0.05

//Make sure the following elements exist:
	//TEXT - id="summaryDisplay"
	//TEXT - id="totalPriceDisplay"

//initiate the checkout process
function runCheckout(summaryString, totalPrice, tikType, numDay, numAdult, numChild) {
  document.getElementById("summaryDisplay").innerHTML = summaryString; //display the order summary
  
  //calculate and display final total
  document.getElementById("totalPriceDisplay").innerHTML = "Subtotal: $" + totalPrice;
  document.getElementById("totalPriceDisplay").innerHTML += "<br>Taxes and Fees: $" + (fees + (totalPrice*tax));
  totalPriceFinal = totalPrice + (totalPrice+fees) + (totalPrice*tax);	//calculate the final total
  document.getElementById("totalPriceDisplay").innerHTML += "<br><b>Total: $" + totalPriceFinal;
  
}//end function runCheckout
