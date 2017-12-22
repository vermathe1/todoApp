const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log("Unable to connect to mongo server");
	}

	// db.collection('Todos').insertOne({
	// 	text:"Something todo",
	// 	completed :false
	// },(err,result)=>{
	// 	if(err){
	// 		return console.log("Unable to connect to mongo server "+ err);
	// 	}
	// 	console.log(JSON.stringify(result.ops));
	// });

	// db.collection('Users').insertOne({
	// 	name:"pramod",
	// 	age:28,
	// 	location:"bangalore"
	// },(err,result)=>{
	// 	if(err){
	// 		return console.log("Unable to connect to mongo server "+ err);
	// 	}
	// 	console.log(JSON.stringify(result.ops));
	// });
	db.collection('Todos').find({completed : true}).toArray().then(
		docs=>{console.log(JSON.stringify(docs,undefined,2))},
		err=>{console.log(`unable to fetch`, err)}
	)

	//db.close();
})