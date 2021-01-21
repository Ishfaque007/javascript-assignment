
// Kilometer To Meter
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}


// Budget Calculator
function budgetCalculator(watch, phone, laptop) {
    var sum = watch * 50 + phone * 100 + laptop * 500;
    return sum;
}
var result = budgetCalculator(0, 0, 0);
console.log(result);


// Hotel Cost
function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;
    }
    else if (day <= 20) {
        var firstTenDays = 10 * 100;
        var remaining = day - 10;
        var nextTenDays = remaining * 80;
        cost = firstTenDays + nextTenDays;
    }
    else {
        var firstTenDays = 10 * 100;
        var nextTenDays = 10 * 80;
        var remaining = day - 20;
        var lastDays = remaining * 50;
        cost = firstTenDays + nextTenDays + lastDays;
    }
    return cost;
}


function megaFriend() {
    
}