const express = require('express')
const { response } = require('express')
var Sentiment = require('sentiment');

var Sentiment = new sentiment();



let app=express()
let app2=express()

app.use(express.static('public'))

let addition=function(num1, num2){
    let result=num1+num2;
    return result;
}

let sentimentAnalysis=function(text){
    let result = sentiment.analyze(text);
    return result;
}

app.get('/analyze',function(request,response){
    let text=request.query.text;
    let resultAnalysis=sentimentAnalysis(text)
    response.json(resultAnalysis)
})
app.get('/adder',function(request,respose){
    let num1=parseInt(request.query.num1);
    let num2=parseInt(request.query.num2);
    console.log(num1)
    console.log(num2)
    let myResult=addition(num1+num2);
    response.json(result:myResult)
})

app.get('/test',function(request,response){
    response.send('This is the test endpoint')
})

//start the server on port 3000
app.listen(3000)