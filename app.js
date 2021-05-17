///mongoose package
const mongoose = require('mongoose');

//URL
mongoose.connect("mongodb://localhost:27017/fruitDB", { useNewUrlParser: true });

//Frruit schema
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your date entry no name specify!."]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);



// const fruit = new Fruit({

//     rating: 5,
//     review: "Pretty solid as a fruit."
// });


/// person  schema
const PersonSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", PersonSchema);


/// create documet of person
// const person = new Person({
//     name: "John",
//     age: 37
// });

// const pineapple = new Fruit({
//     name: "pineapple",
//     rating: 5,
//     review: "Pretty solid as a fruit."
// });



// const sahil = new Person({
//     name: "sahil",
//     age: 20,
//     favouriteFruit: pineapple
// });

///create document of fruit.
const mango = new Fruit({
    name: "mango",
    rating: 1,
    review: "yummy fruit"
});


///With help of save commond use save the current document which make and want to store in database.
// sahil.save();
// pineapple.save();


// const kiwi = new Fruit({
//     name: "kiwi",
//     Score: 10,
//     review: "The best fruit!"
// });


// const orange = new Fruit({
//     name: "Orange",
//     Score: 5,
//     review: "lot of water!"
// });


// const banana = new Fruit({
//     name: "Banana",
//     Score: 6,
//     review: "awesome texture"
// });


//insert commond with the help of this we store the document first parameter inside the array and second parameter are call back function
// Fruit.insertMany([kiwi, orange, banana], function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Succesfully saved all the fruits!");
//     }
// });



//person.save();



//find the document
// Fruit.find(function(err, fruits) {
//     if (err) {
//         console.log(err);
//     } else {
//         mongoose.connection.close();
//         fruits.forEach(function(fruit) {
//             console.log(fruit.name);
//         });

//     }
// });

// fruit.save();

mango.save();

//update the document 
Person.updateOne({ name: "John" }, { favouriteFruit: mango }, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully update the document");
    }
});



//detele the document
// Fruit.deleteOne({ _id: "60a1f1a85ce9a230a4c51441" }, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully detele the document.");
//     }
// });

// Person.deleteMany({ name: "sahil" }, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully detele All the document.");
//     }
// });