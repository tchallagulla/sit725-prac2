const express = require('express')
const { response } = require('express')

let app=express()
let app2=express()

app.use(express.static('public'))


app.get('/adder',function(request,respose){
    response.send('Adder Working')
})

app.get('/test',function(request,response){
    response.send('This is the test endpoint')
})

//start the server on port 3000
app.listen(3000)