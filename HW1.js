#!/usr/bin/node

// Harris Ransom
// Software Engineering HW 1
// 1/23/2024

// Strict mode
"use strict";

const { read } = require('node:fs');

// Includes Node readline module
const reader = require('readline-sync')

// Includes inputCheck and leapYear function
const inputCheck = require('./inputCheck');
const { isDate } = require('node:util/types');

// Program loop
while (true) {
    let strInput = String(reader.question("Please input a datetime in YYYYMMDDTHHMMSS format: "));
    let result = inputCheck(strInput);
    if (result === 0) {
        break;
    }
    else if (isDate(result)) {
        // Export date object
    }
    else {
        // Any external error handling goes here
        console.log("Error code: " + result);
    }
}