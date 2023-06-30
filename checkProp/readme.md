Testing Objects for Properties
To check if a property on a given object exists or not, you can use the .hasOwnProperty() method. someObject.hasOwnProperty(someProperty) returns true or false depending on if the property is found on the object or not.

Example

function checkForProperty(object, property) {
  return object.hasOwnProperty(property);
}

checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false
The first checkForProperty function call returns true, while the second returns false.

Modify the function checkObj to test if the object passed to the function parameter obj contains the specific property passed to the function parameter checkProp. If the property passed to checkProp is found on obj, return that property's value. If not, return Not Found.


Testing: 
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift") should return the string pony.

Waiting:checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet") should return the string kitten.

Waiting:checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house") should return the string Not Found.

Waiting:checkObj({city: "Seattle"}, "city") should return the string Seattle.

Waiting:checkObj({city: "Seattle"}, "district") should return the string Not Found.

Waiting:checkObj({pet: "kitten", bed: "sleigh"}, "gift") should return the string Not Found.