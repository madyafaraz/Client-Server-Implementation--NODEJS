var events = require('events');
var colors = require('colors');
var _ = require('underscore');
var data = [{id:1, firstName: 'John', lastName:'Smith'},
            {id:2, firstName: 'Jane', lastName:'Smith'},
            {id:3, firstName: 'John', lastName:'Doe'}];


 const EventEmitter = require('events').EventEmitter;

//custom class for employee emitter
class EmployeeEmitter extends EventEmitter {
	constructor(args) {
		super();
		this.data = args;
	}

	lookupByLastName(value) {
		emp.emit('lookupByLastName', value);

	}

	lookupById(value) {
		emp.emit('lookupById', value);

	}

	addEmployee(value1, value2){
		emp.emit('addEmployee', value1, value2);

	}
}

const emp = new EmployeeEmitter(data);
emp.on('lookupByLastName', function (value) {

    console.log(('Event lookupByLastName raised! Smith\n').blue);
    console.log(_.where(data, {lastName: value}));
});

emp.on('lookupById', function (value) {
    console.log(('Event lookupById raised! 2\n').blue);
    console.log(_.findWhere(data, {id:value}));
});


emp.on('addEmployee', function (value1, value2) {
	console.log(('Event addEmployee raised! William, Smith').blue);
	var val = _.pluck(data, 'id');
    var newID = parseInt(_.max(val))+1;
	data.push({id : newID, firstName: value1, lastName:value2});
    
});

module.exports = EmployeeEmitter;



