const empEmitter = require('./employeeEmitter');
const Employee = require('./EmployeeEmitter');
var colors = require('colors');


const emp = new Employee();

console.log(('\nLookup by Last Name (Smith)').red);
var result1 = emp.lookupByLastName('Smith');

console.log(('\nAdding Employee William Smith').red);
var result2 = emp.addEmployee('William', 'Smith');

console.log(('\nLookup by Last Name (Smith)').red);
var result3 = emp.lookupByLastName('Smith');

console.log(('\nLookup by Id (2)').red);
var result4 = emp.lookupById(2);