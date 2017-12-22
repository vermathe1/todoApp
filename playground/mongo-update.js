const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log("Unable to connect to mongo server");
	}

	db.collection('Users').findOneAndUpdate({name:"vermathe1"},
		{
			$set:{
				name:"pramod"
			},
			$inc:{
				age : -1
			}
		},
		{
			returnOriginal:false
		}
	).then(res=>{console.log(res)},err=>{console.log(err)});
	//db.close();
});