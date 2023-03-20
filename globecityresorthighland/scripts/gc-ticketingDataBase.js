// CLIENT DEFINED VARIABLES

// Date Validation
const maxDateAdvance = 120; // Tickets must be purchased for dates before this number of days from today

// Taxes, Fees, Discounts
const tax = 0;            // Percent Tax (ie 5% = 0.05)
const fees = 1.50;        // Dollar amount fee to add to total

const mutiDayDiscount = 5; //Dollar amount to remove from ticket price per day added

// Max Tickets
const maxTickNum = 9; //Maximum number of tickets that can be purchased at once

// -----------------------------------------------------------------------------------------------------------------------

// TICKET TIER PRICING
//    0 - 4 are adult tiers 5 - 9 are child tiers

    const onResPrice = [65, 75, 85, 99, 109, // adult
                        55, 60, 70, 89, 99]; // child

    const genAdmissionPricing = [75, 80, 89, 109, 115, // adult
                                 59, 70, 78, 99, 109]; // child

    const vipBronzePrice = [109, 126, 159, 161, 179, // adult
                            89, 119, 139, 151, 173]; // child

    const vipSilverPrice = [120, 140, 179, 189, 199, // adult
                            112, 129, 165, 186, 192]; // child

    const vipGoldPrice = [139, 169, 189, 209, 274, // adult
                          120, 161, 180, 199, 269]; // child

    const vipDeluxePrice = [149, 199, 219, 229, 299, // adult
                            139, 191, 209, 219, 297]; // child


// TICKET TIER DATES
//    Dates are written in the format MMMM-DD
//    Do not include year.
//    Dates that are not included in tier 1 through 5 will be subjected to the following pricing: 
//      If weekend, tier 2. If weekday, tier 1.

    // Ticketing tier by date

    // High tier months are priced as all weekdays are tier 4 and all weekends are tier 5 UNLESS some days are in the exception
    // Those days will be subject to standard tier determintion
    const highTierMonth = ["July","December"];
    const highTierMonthException = ["December-01","December-02","December-03","December-05","December-06","December-07"];

    const tier5 = ["March-25","March-26","March-27","March-28"];

    const tier4 = ["March-20","March-21"];

    const tier3 = ["March-22","March-23"];

    const tier2 = ["March-24","March-29"];

    const tier1 = [];

    // Days that are considered week days, 0=sunday, 1=monday, etc.
    const weekdays = [1,2,3,4,5];

    // Days that are considered week ends
    const weekends = [0,6];
