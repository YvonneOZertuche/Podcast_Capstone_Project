const { MongoClient } = require("mongodb");

const url = "mongodb+srv://Spicy-Jalapeno-Poppers:G1y8GlCYWdbYZMtZ@mongoldb-demo.efcgcbf.mongodb.net/?retryWrites=true&w=majority"
//create new client
const client = new MongoClient(url)

const dbConnect = async ()=>{
    try {
        //contect to db
        await client.connect();
        console.log("db connected successfully")

        //create new db
        const db = client.db("school");

        //create collection
        const students = db.collection("students")

        //create document(student) - single
        // const student1 = await students.insertOne({
        //     name: 'John Doe',
        //     city: 'Kumasi',
        // })
       
        //create document(student) - multiple
        // const students2 = await students.insertMany([{name: "Emmanuel", city: "Kumasi"},{name: "Thomas", city: "Western"},])

    
        //find all students
        //used .toArray() to hone in on the array of data
        // const allStudents = await students.find().toArray();

        //find a student by name - Emmanuel
        //here we used .findOne()
        // const foundSt = await students.findOne({name: "Dan"})
        // console.log(foundSt)

        //find all students from Kumasi
        //here we used .find()
        //used .toArray() to hone in on the array of data
        // const foundSts = await students.find({city: "Kumasi"}).toArray();
        // console.log(foundSts)

        //update record
        //first: find the record that we want to update
        //second: update that record
        // const updatedStudents = await students.updateOne(
        //     {name: "Emmanuel"}, 
        //     {
        //     $set:{name: "Tweneboah", city: "Accra"},
        //     }
        // )
        // console.log(updatedStudents);

        //delete
        const deletedStudent = await students.deleteOne({name: "Tweneboah"})
        console.log(deletedStudent)

    } catch (error) {
        console.log(error)
    }
}

dbConnect();
