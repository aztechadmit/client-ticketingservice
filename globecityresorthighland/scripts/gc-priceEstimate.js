// Determining the estimated price of a ticket

	// Example use:
	// prices = determinePrice(dateInput);
	// adultPrice = prices[0];
	// childPrice = prices[1];
	// formatedDate = prices[3];

	// ALL PRICES ARE BEFORE MULTI-DAY DISCOUNT
	// example to fix: adultPrice = prices[0] - ((numDay-1)*multiDayDiscount);

function dateWasInputed(dateIn, dispName) {
	today = new Date();
	var timeAdvance = maxDateAdvance*(24*60*60*1000); //taken from ticket pricing script
	todayPlusAdvance = new Date(today.getTime()+timeAdvance);
	
	var todayRW = today.getUTCFullYear()+"-"+String(today.getUTCMonth()+1).padStart(2, '0')+"-"+today.getUTCDate();
	var tARW = todayPlusAdvance.getUTCFullYear()+"-"+String(todayPlusAdvance.getUTCMonth()+1).padStart(2, '0')+"-"+todayPlusAdvance.getUTCDate();
	
	// Check date is in bounds described above
	if(Date.parse(todayRW) > Date.parse(dateIn)){//date is in the past
		document.getElementById(dispName).innerHTML = "<span style='color:red;'>Date selected has already passed</span>";
		var prices = "false";
		return prices;
	}else if(Date.parse(dateIn) > Date.parse(tARW)){//too far in advance
			document.getElementById(dispName).innerHTML = "<span style='color:red;'>Date selected is too far in advance. Date of visit must be less than "+maxDateAdvance+" days from today</span>";
			var prices = "false";
			return prices;
		}else if(Date.parse(dateIn) >= Date.parse(todayRW) && Date.parse(dateIn) < Date.parse(tARW)){
			
			//Date is good to go!
			var prices = determinePrice(dateIn);//determine the price of tickets
			document.getElementById(dispName).innerHTML = "Estimated price: $"+prices[0]+" per ticket";
			return prices;
			
			
			}else{
				document.getElementById(dispName).innerHTML = "<span style='color:red;'>Please Check Date for Errors<br>Your Input: "+dateIn+"</span>";
				var prices = "false";
				return prices;
				}//end of date check if
	
	
}//end of dateWasInputed()


function determinePrice(dI) {
	var out = [100, 90, "Formated Date Will Go Here"];
	return out;
}//end of determinePrice
