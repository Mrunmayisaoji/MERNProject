require('dotenv').config()

const express = require('express')

//express app
const app = express()


app.get('/', (reg, res)=> {
    res.json({msg: 'Welcome to the app'})
})

//listen for request
app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT)
})
