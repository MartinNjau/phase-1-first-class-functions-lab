const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    const lastIndex = drivers.slice(-2);
    return lastIndex;
  };

  const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
  console.log(selectingDrivers[0,1]);

  function createFareMultiplier(num) {
    return function fare(){
        let multiplier=5;
        return num*multiplier;
    };
 }

 const doubleFare=fare();
 function fareDoubler(fare){
    return fare*2;
 }

 const trippleFare=fare();
 function fareTripler(fare){
    return fare*3;
 }

function selectDifferentDrivers(arr, func) {
    if (func === returnFirstTwoDrivers) {
       return arr.slice(0, 2);
    } else if (func === returnLastTwoDrivers) {
       return arr.slice(-2);
    } else {
       return("Invalid function argument");
    }
   }
   
   
  
