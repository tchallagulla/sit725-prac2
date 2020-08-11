const http = require('http');
const express = require('express')
const { response } = require('express')
var Sentiment = require('sentiment');
var cors = require('cors');
const itemsRouter = require('./routes/items');

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
    response.json('result:myResult')
})

app.get('/test',function(request,response){
    response.send('This is the test endpoint')
})
// create new app
const app = express();
app.use(express.json());
app.use(cors({origin: 'http://localhost:8100'}));

app.use('/items', itemsRouter);

// default URL to API
app.use('/', function(req, res) {
    res.send('SIT725-prac2 works');
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);

//start the server on port 3000
app.listen(3000)


