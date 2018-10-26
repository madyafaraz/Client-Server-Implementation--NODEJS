const employee = require('./employeeModule_v2');
var colors = require('colors');

//writing lookup by last name results on screen
console.log(('\nLookup by Last Name (Smith)').blue);
var result1 = employee.lookupByLastName('Smith');

//write lookup by id results on screen
console.log(('\nAdding Employee William Smith...').red);
var result2 = employee.addEmployee('William', 'Smith');


console.log(('\nLookup by Last Name (Smith)').blue);
var result3 = employee.lookupByLastName('Smith');

//lookup by id =2
console.log(('\nLookup by id (2)').blue);
var result4 = employee.lookupById(2);

//change first name 
console.log(('\nChanging First Name...').red);
console.log(('\n Lookup by Id (2)').blue);
var newData = employee.lookupById(2);
newData.firstName = 'Mary';
console.log(employee.lookupById(2));

//now again lookup by last name 

console.log(('\nLookup by Last Name (Smith)').blue);
var result5 = employee.lookupByLastName('Smith');
//console.log(employee.lookupByLastName('Smith'));



