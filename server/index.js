//dont forget to add express.js to the package.json dependencies
//dont forget to either run or incldue a script in package.json to run nodemon index.js
var express = require('express');

//might want to think about using the cors middleware if we run into cors errors

var router = require('./routes.js');
var qnaRoutes = require('./qnaRoutes.js');
var app = express();
//
const port = 3000;

app.listen(port, ()=>{
  console.log (`server is listening at http://localhost:${port}`)
});
app.use(express.json());

app.use('/', router)
app.use('/qna', qnaRoutes)
//could change this route to be more specific

app.use(express.static(__dirname + '/../client'));
//might need to change directory
