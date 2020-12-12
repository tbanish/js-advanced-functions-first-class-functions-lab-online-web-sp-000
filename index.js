// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  const fn = function () {
    return drivers.slice(0,2)
  }
  return fn()
}

const returnLastTwoDrivers = function (drivers) {
  const fn = function () {
    return drivers.slice(2)
  }
  return fn()
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
  const fareMultiplier = function (fare) {
    return fare * integer
  }
  return fareMultiplier
}

const fareDoubler = function (fare) {
  return createFareMultiplier(2)(fare)
}

const fareTripler = function (fare) {
  return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(drivers, selectingDrivers) {
  return selectingDrivers(drivers)
}
