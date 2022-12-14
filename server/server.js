
const express = require('express');
const globalErrHandler = require('./middleware/globalErrHandler');
require("./config/dbConnect")
const followingRoute = require('./routes/following/followingRoutes');
const listenedRoute = require('./routes/listened/listenedRoutes');
const usersRoute = require('./routes/users/usersRoutes');
const app = express();
const PORT = process.env.PORT || 3001
//middlewares
app.use(express.json()) //pass incoming data
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://yvonnepodcast.netlify.app/')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

//routes
app.get('/', (req, res)=>{

   res.send('hello')
})

//users routes

app.use('/api/v1/users', usersRoute)
//following routes
app.use('/api/v1/following', followingRoute)
//listened routes
app.use('/api/v1/listened', listenedRoute)

// app.post('/api/v1/users', async (req, res)  => {
//     const user = req.body
//     const newUser = new user
// })

//error handlers
app.use(globalErrHandler)

//listen to server
// const PORT = process.env.PORT || 9000
app.listen(PORT, console.log(`listening on port ${PORT}`))

