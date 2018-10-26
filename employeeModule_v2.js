var _ = require('underscore');
var data = [{id:1, firstName: 'John', lastName:'Smith'},
            {id:2, firstName: 'Jane', lastName:'Smith'},
            {id:3, firstName: 'John', lastName:'Doe'}];

module.exports = {

//first function lookupById
lookupById: (value) => {
  //var str = value;
  return (_.findWhere(data, {id:value}));		
},

// second function lookupByLastName
lookupByLastName: (value) => {
		
		return (_.where(data, {lastName: value}));
	},


//third function addEmployee
addEmployee: (value1, value2) => {
		
		//add new employee data to array
       var val = _.pluck(data, 'id');
       var newID = parseInt(_.max(val))+1;
		data.push({id : newID, firstName: value1, lastName:value2});
		
	},

};



