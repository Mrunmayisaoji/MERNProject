require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')

//express app
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts',workoutRoutes)


//connect to DB
mongoose.connect(process.env.MONG_URI)
    .then(()=> {
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB and Listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

//listen for request

