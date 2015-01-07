/**
 * New node file
 */
var MongoClient = require('mongodb').MongoClient;



function removeDocument(Collection,query)
{
	Collection.remove(query,function(err,results){
		
		if(!err)
			{
				console.log("Removed" + results);
			}
		
	});
	
}



function retrieveDocument(Collection,query)
{
	//newDB.createCollection("newCollection", function(err,Collection)
	Collection.find(query,function(err,items)
			{
				items.toArray(function(err,item)
						{
							console.log(item);
					
						});
		
			});
}


//function to insert object
function addObject(Collection,object)
{
	Collection.insert(object,function(err,result)
			{
				if(!err)
					{
						console.log("Object has been inserted");
					}
			});
}



function updateObject(Collection,query,field,updatequery)
{

	Collection.findAndModify(query,[[field,1]],{$set: updatequery},function(err,updated)
			{
				console.log("Update:" + updated);
		
			});

}
//script to create new db and collection
MongoClient.connect("mongodb://localhost/",function(err,db){
	var newDB= db.db("newDB");
	newDB.collection("newCollection", function(err,Collection)
			{
			if(!err)
				{
					console.log("New database created");
				}
			
			//insert object into Collection
			//addObject(Collection,{test:"11",user_ID:"george2",toy:"pst"});
			
			//search for document
			//retrieveDocument(Collection,{test:"FUCKYEA"});
			
			
			//remove document
			//removeDocument(Collection,{test:"123"});
			
			//update document
			//updateObject(Collection,{test:"11"},"test",{test:"FUCKYEA"});
			
			
			
			});
	
	setTimeout(function(){db.close();},3000);
});