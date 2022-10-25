const mongoose = require("mongoose");

//connect to mongoose
mongoose.connect(
    "mongodb+srv://Spicy-Jalapeno-Poppers:7iwi2JuxYov6xFyv@mongoldb-demo.efcgcbf.mongodb.net/school?retryWrites=true&w=majority"
)
.then(() => console.log("db connected"))
.catch(err => console.log(err.message));

//schema
const studentSchema = new mongoose.Schema({
    name: String,
    city: String,
    courses: Array,
    isMarried: Boolean,
    age: Number,
})

//model
const Student = mongoose.model("Student", studentSchema)

//create student
// Student.create({
//     name: "Adwoa",
//     city: "USA",
//     courses: ["Twi"],
//     isMarried: false,
//     age: 30,
// })
// .then((student)=>console.log(student))
// .catch((err) => console.log(err));

//find all students
// Student.find()
//     .then(students => console.log(students))
//     .catch(err => console.log(err));

//find all students whose age === 20
// Student.find({age: 20})
//     .then(students => console.log(students))
//     .catch(err=>console.log(err))

//find single record
//by ID
// Student.findById("6345a1d447913c6f8bc9fe5a")
//     .then(student => console.log(student))
//     .catch(err => console.log(err));

//by name
// Student.findOne({ name: "John"})
//     .then(student => console.log(student))
//     .catch(err => console.log(err));

//update record
// Student.findOneAndUpdate(
//     {name: "John"}, 
//     {age: 35}, 
//     {
//     new: true,
//     }
// )
// .then(student => console.log(student))
// .catch(err =>console.log(err))

Student.findByIdAndUpdate(
    "6345a225b4a474f8adf9d208", 
    {age: 55}, 
    {
    new: true,
    }
)
.then(student => console.log(student))
.catch(err =>console.log(err))
