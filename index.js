const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (driversArray) => drivers.slice(0 , 2);

console.log(returnFirstTwoDrivers());

const returnLastTwoDrivers = (driversArray1) => drivers.slice(2,4);

console.log(returnLastTwoDrivers());

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(ho){
    return function(value){
        return ho * value
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
};
