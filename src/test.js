import PincodeDistance from "./methods"
const PinDistance = new PincodeDistance();
const distance = PinDistance.getDistance("4000093", "4000093");
console.log(`distance btw "4000093", "4000093" is ${distance}`);