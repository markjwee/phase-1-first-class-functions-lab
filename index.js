// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Claudia"]

const returnFirstTwoDrivers = function(passedInArray){
    return passedInArray.slice(0,2);
}

const returnLastTwoDrivers = function(passedInArray){
    return passedInArray.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(multiplier) {
    return function(x){
        return x * multiplier;
    }
}

function fareDoubler(x) {
    return x * 2;
}

function fareTripler(x) {
    return x * 3;
}

function selectDifferentDrivers (array, functionName) {
    return functionName(array)
}