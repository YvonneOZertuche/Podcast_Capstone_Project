const mongoose = require('mongoose')

//connect to db
const dbConnect = async() => {
    try {
        await mongoose.connect(
            "mongodb+srv://podcast-tracker:uKIqrdQsMBkkCHzp@cluster0.j4eygug.mongodb.net/?retryWrites=true&w=majority"
           
        )
        console.log("db connected successfully")
    } catch (error) {
     console.log(error.message);
     process.exit(1)   
    }
}

dbConnect()