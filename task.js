// Find day of the week using switch case
function getDayOfWeek(dayNumber) {
    let day;
    switch (dayNumber) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        default:
            day = "Invalid day number";
    }
    return day;
}
console.log(getDayOfWeek(3)); 
console.log(getDayOfWeek(7)); 


// Find month of the year using switch case
function getMonthOfYear(monthNumber) {
    let month;
    switch (monthNumber) {
        case 1:
            month = "January";
            break;
        case 2:
            month = "February";
            break;
        case 3:
            month = "March";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "June";
            break;
        case 7:
            month = "July";
            break;
        case 8:
            month = "August";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "October";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "December";
            break;
        default:
            month = "Invalid month number";
    }
    return month;
}

console.log(getMonthOfYear(5));  
console.log(getMonthOfYear(12));

// Find even numbers in first 10 numbers using while loop
 var a = 1;

console.log("Even numbers between 1 and 10:");

while (a<= 10) {
    if (a % 2 === 0) {
        console.log(a);
    }
    a++;
}
    // Countdown timer using while loop and the countdown should starts from 10

    let countdown = 10;
    console.log("Countdown starts now:");
    while (countdown >= 0) {
        console.log(countdown);
        countdown--;
    }console.log("Liftoff!");

    