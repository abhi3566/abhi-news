const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://abhishek3566:Abhi3566@devconnector.vxsu7.mongodb.net/abhi-news?retryWrites=true&w=majority'  , {useUnifiedTopology:true , useNewUrlParser:true})

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})

connection.on('error' , ()=>{
    console.log('Mongo DB Connection Failed')
})


module.exports = mongoose