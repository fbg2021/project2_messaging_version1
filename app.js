const express = require('express')
const app = express()
app.use(express.json()); //Used to parse JSON bodies
//app.use(express.urlencoded()); //Parse URL-encoded bodies
const cors = require('cors')


// const httpServer = require("http").createServer(app);
// const io = require("socket.io")(httpServer)

// io.on("connection", socket => { 
//     console.log('socket is connected')
// })

// httpServer.listen(3580);

const messages = require('./routes/messageRoutes')
app.use('/messages',messages)


// USE ROUTES MIDDLEWARE














// serve the react application


// catch 404 and forward to error handler


// error handler


// render the error page

module.exports = app