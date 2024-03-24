// Harris Ransom
// SoftEng HW1
// inputCheck Function

// Checks if year is leap year
function leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function inputCheck(strInput) {
    // Exit condition
    if (strInput == 'exit') {
        return 0;
    }

    // Performs input checks
    if ((strInput === 'undefined') || (strInput === 'null') || (strInput.length === 0)) {
        console.log("Input is null!");
        return 1;
    }
    if (strInput.length != 15) {
        console.log("Input is the wrong length!");
        return 2;
    }
    if (isNaN(strInput.substring(0, 8))) {
        console.log("Input before T is not a number!");
        return 3;
    }
    if (strInput[8] != "T") {
        console.log("Invalid input format!");
        return 4;
    }
    if (isNaN(strInput.substring(9))) {
        console.log("Input after T is not a number!");
        return 5;
    }

    // Extract date information from input string
    let year = Number(strInput.substring(0, 4));
    let month = Number(strInput.substring(4, 6));
    let day = Number(strInput.substring(6, 8));
    let isLeapYear = leapYear(year);

    // Extract time information from input string
    let hour = Number(strInput.substring(9, 11));
    let minute = Number(strInput.substring(11, 13));
    let second = Number(strInput.substring(13));

    // Check if month value is valid
    if ((month <= 0) || (month > 12)) {
        console.log("Invalid month range!");
        return 6;
    }

    // Check if day value is valid
    if ((day <= 0) || (day > 31)) { // Assumes 31 day month
        console.log("Invalid day range!");
        return 7;
    }
    if ([4, 6, 9, 11].includes(month)) { // Months with 30 days
        if ((day <= 0) || (day > 30)) {
            console.log("Invalid day range!");
            return 8;
        }
    }
    if ((month == 2) && (!isLeapYear) && ((day <= 0) || (day > 28))) { // February (non leap year)
        console.log("Invalid day range!");
        return 9;
    }
    if ((month == 2) && (isLeapYear) && ((day <= 0) || (day > 29))) { // February (leap year)
        console.log("Invalid day range!");
        return 10;
    }

    // Check if hour is valid
    if ((hour < 0) || (hour > 23)) {
        console.log("Invalid hour range!");
        return 11;
    }

    // Check if minute is valid
    if ((minute < 0) || (minute > 59)) {
        console.log("Invalid minute range!");
        return 12;
    }

    // Check if second is valid
    if ((second < 0) || (second > 59)) {
        console.log("Invalid second range!");
        return 13;
    }
    // Note: Since the Date object will automatically handle leap-seconds,
    // they are not accounted for here

    // localeOptions and toLocaleString for correct output
    let monthIndex = month - 1;
    let localeOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric' };
    let dateTime = new Date(year, monthIndex, day, hour, minute, second);
    console.log(dateTime.toLocaleString("en-US", localeOptions));

    return dateTime;
}

module.exports = inputCheck;