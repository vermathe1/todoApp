const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log("Unable to connect to mongo server");
	}

	// db.collection('Users').deleteOne({_id:new ObjectId("5a3ba991a9ff241c070261d7")})
	// 	.then((res)=>{
	// 		console.log(res)
	// 	},(err)=>{
	// 		console.log("error while deleting "+err);
	// 	}
	// );

	db.collection('Users').findOneAndDelete({name:'pramod'})
		.then((res)=>{
			console.log(res)
		},(err)=>{
			console.log("error while deleting "+err);
		}
	);
	// db.collection('Users').deleteMany({name:'verma'})
	// 	.then((res)=>{
	// 		console.log(res)
	// 	},(err)=>{
	// 		console.log("error while deleting "+err);
	// 	}
	// );



	//db.close();
})