fees = 1.5; //Fees in dollars
tax = 0; //Taxes in percentage with least being 0.00 and 5% being 0.05

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
	
	//Get tkTypD value
	switch(ticketType){
		case 'onres':
			tkTypD = 'Oras Nou Resident';
			break;
		case 'gen':
			tkTypD = 'General';
			break;
		case 'vpbrnz':
			tkTypD = 'VIP Bronze';
			break;
		case 'vpgld':
			tkTypeD = 'VIP Gold';
			break;
		case 'vpsilv':
			tkTypD = 'VIP Silver';
			break;
		case 'vpdel':
			tkTypD = 'VIP Deluxe';
			break;
		default:
			tkTypeD = 'None Selected';
	}//end of switch
	
	//Display Summary and Total
	
	document.getElementById('ordSmDis').innerHTML = "<p>"+tkTypD+" Admission</p><p>Date of Visit: "+dateVisit+"</p><p>Number of Days: "+numDays+"</p><p>Adult Tickets: "+numAdult+", Child Tickets: "+numChild+"</p><p>Add Ons: $"+addOnPrice+"</p><p>Order Subtotal: <b>$"+ordSubTtl+"</b></br>";
	document.getElementById('taxNfeeDisp').innerHTML = "<p>Processing Fee: $"+fees+"</p><p>Sales Tax: $"+Number(tax*ordSubTtl)+"</p>";
	document.getElementById('odTtDp').innerHTML = "<p style='font-size:20px;'>Order Total: <b>$" + orderTotal + "</b></p>";	
}
