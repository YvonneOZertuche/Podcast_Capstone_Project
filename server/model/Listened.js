const mongoose = require('mongoose')

//user schema
const listenedSchema = new mongoose.Schema({
    episodeName: {
        type: String,
        required: true,
    },
    podcastName: {
        type: String,
        required: true,
    },
    image: {
        type: String
    },
    audioLink: {
        type: String,
        required: true
    },
    wantToFollow: {
        type: Boolean,
        default: false
    },
    listenedTo: {
        type: Boolean,
        default: false
    },
    notes: {
        type: String,
        required: true
    },
    hasCreatedUser: {
        type: Boolean,
        default: false,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId
    },
},{
    timestamps: true,
    toJSON: {virtuals: true}
})

//model
const Listened = mongoose.model("Listened", listenedSchema)

module.exports = Listened;