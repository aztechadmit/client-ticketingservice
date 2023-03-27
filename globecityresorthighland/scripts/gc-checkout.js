fees = 1.50; //Fees in dollars
tax = 0.0; //Taxes in percentage with least being 0.00 and 5% being 0.05

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

function initiateChk() {
	var queryString = window.location.search;
	var urlParams = new URLSearchParams(queryString);
	
	ordSubTtl = Number(urlParams.get('sbTtl'));
	ticketType = urlParams.get('tkTp');
	
	numDays = urlParams.get('nmD');
	numAdult = urlParams.get('nmAd');
	numChild = urlParams.get('nmCh');
	
	dateVisit = urlParams.get('dtVs');
	
	addOnPrice = urlParams.get('addOn');
	
	//Calculate Official Total
	feeTaxTot = Number(fees) + (Number(tax)*Number(ordSubTtl));
	orderTotal = Number(ordSubTtl) + Number(feeTaxTot);
	

	
	//Display Summary and Total
	
	document.getElementById('ordSmDis').innerHTML = "numDays: "+numDays+"<br>numAdult: "+numAdult+"<br>numChild: "+numChild+"<br>dateVisit: "+dateVisit+"<br>Order Subtotal: $"+ordSubTtl;
	document.getElementById('taxNfeeDisp').innerHTML = "<p>Processing Fee: $"+fees+"</p><p>Sales Tax: $"+(tax*ordSubTtl)+"</p>";
	document.getElementById('odTtDp').innerHTML = "<p style='font-size:20px;'>Order Total: <b>$" + orderTotal + "</b></p>";	
}
