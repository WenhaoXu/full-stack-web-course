//db.test1.remove({});

// Normal single insert
db.test1.insertOne({name:'Frye'});
db.test1.insertOne({name:'Tom', age: 18});
db.test1.insertOne({book:'Thinking In Java'});

// _id conflict smaple
db.test1.insertOne({_id:"12345" ,name:'Jack'});
db.test1.insertOne({_id:"12345" ,name:'Mary'});

// Multiple insert
var docs = [{name: 'Apple'}, 
        {name: 'Orange'}, 
        {name: 'Banana'}];
db.test1.insertMany(docs);

// Old API
db.test1.insert({name: 'Ray'});






