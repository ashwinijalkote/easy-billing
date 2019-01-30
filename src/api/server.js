const express = require( 'express')

const app = new express();

app.use('/', (req,res)=>{
    res.json("hello")
})

app.listen(3000);