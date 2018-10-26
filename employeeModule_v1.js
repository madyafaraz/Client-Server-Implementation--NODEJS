var data = [{id:1, firstName: 'John', lastName:'Smith'},
            {id:2, firstName: 'Jane', lastName:'Smith'},
            {id:3, firstName: 'John', lastName:'Doe'}];

module.exports = {

//first function lookupById
lookupById: function(value) {

   for(var i=0; i< data.length; i++) {
    	if(data[i].id == value)
    	{
	        return data[i];

    	} 
    	
    
    }  		
},

// second function lookupByLastName
lookupByLastName: function(value) {
		
   for(var i=0; i< data.length; i++) {
    	if(data[i].lastName == value)
          {
          	console.log(data[i]);
          	
          }
    	  else 
    	  	{
    	  		
    	  	}
       }  
      
	},


//third function addEmployee
addEmployee: function(value1, value2) {
		
		//add new employee data to array
		
       var newID = (Math.max.apply(Math, data.map(function(o) { return o.id; })))+1;

		data.push({id : newID, firstName: value1, lastName:value2});
			},
};


