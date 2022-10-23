const express = require('express')
const { createListenedController, 
    getAllListenedController,
    getOneListenedController,
    deleteListenedController,
    updateListenedController
} = require('../../controllers/listened/listenedController')
const isLogin = require('../../middleware/isLogin')


const listenedRoute = express.Router()

//POST/api/v1/listened
listenedRoute.post("/", isLogin, createListenedController)

//GET/api/v1/listened
listenedRoute.get("/", getAllListenedController)

//GET/api/v1/listened/:id
listenedRoute.get("/:id", getOneListenedController)

//DELETE/api/v1/listened/:id
listenedRoute.delete("/:id", deleteListenedController)

//PUT/api/v1/listened/:id
listenedRoute.put("/:id", updateListenedController)

module.exports = listenedRoute;