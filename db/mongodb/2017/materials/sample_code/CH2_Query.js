/********************  Basic Query  ************************/
// !!!Clean the collection!!!
db.ch2.remove({});
// Insert data before demo
db.ch2.insertMany([
   { item: "journal", qty: 25, status: "A" },
   { item: "notebook", qty: 50, status: "A" },
   { item: "paper", qty: 100, status: "D" },
   { item: "planner", qty: 75, status: "D" },
   { item: "postcard", qty: 45, status: "A" }
]);
// Query all
db.ch2.find({});
// Query one
db.ch2.findOne({});
// Query + Projection
db.ch2.find({}, {item: 1, qty: 1});
// Count
db.ch2.find({}).count();

/********************  Comparison Query  ************************/
// !!!Clean the collection!!!
db.ch2.remove({});
// Insert data before demo
db.ch2.insertMany([
   { item: "journal", qty: 25, status: "A" },
   { item: "notebook", qty: 75, status: "A" },
   { item: "paper", qty: null, status: "D" },
   { item: "planner", qty: '45', status: "D" },
   { item: "postcard", qty: 45, status: "A" }
]);
db.ch2.find({qty: {$gte: 75}});
db.ch2.find({qty: {$lt: 75}});
db.ch2.find({qty: {$gte: '45'}});

/********************  Logical Query  ************************/
// !!!Clean the collection!!!
db.ch2.remove({});
// Insert data before demo
db.ch2.insertMany([
   { item: "journal", qty: 25},
   { item: "Journal", qty: 75},
   { item: "paper", qty: null},
   { item: "planner", qty: '45'},
   { item: "postcard", qty: 45},
   { item: "apple"}
]);

db.ch2.find({$or:
[{item: 'journal'}, {qty: {$gt: 40}}]
});

db.ch2.find({$nor:
[{item: 'journal'}, {qty: {$gt: 40}}]
});

db.ch2.find(
{qty: {$not: {$gt: 40}}}    
);









