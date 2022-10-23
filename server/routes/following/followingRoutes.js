const express = require('express');
const { createFollowingController,
    getOneFollowingController,
    deleteFollowingController,
    updateFollowingController,
    getAllFollowingController
} = require('../../controllers/following/followingController');
const isLogin = require('../../middleware/isLogin');


const followingRoute = express.Router()

//POST/api/v1/following
followingRoute.post("/", isLogin, createFollowingController)

//GET/api/v1/following/:id
followingRoute.get("/:id", getOneFollowingController)

//DELETE/api/v1/following/:id
followingRoute.delete("/:id", deleteFollowingController)

//PUT/api/v1/following/:id
followingRoute.put("/:id", updateFollowingController)

//GET/api/v1/following
followingRoute.get("/", getAllFollowingController)


module.exports = followingRoute;