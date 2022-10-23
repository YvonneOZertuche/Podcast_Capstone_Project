const mongoose = require('mongoose')

//user schema
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
//made _hasCreated..._ for both Following and Listened
    hasCreatedFollowing: {
        type: Boolean,
        default: false,
    },
    followings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Following",
        }
    ],
    hasCreatedListened: {
        type: Boolean,
        default: false,
    },
    listeneds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Listened",
        }
    ]
},{
    timestamps: true,
    toJSON: {virtuals: true}
})

//model
const User = mongoose.model("User", userSchema)

module.exports = User;