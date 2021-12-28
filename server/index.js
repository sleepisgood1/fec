//dont forget to add express.js to the package.json dependencies
//dont forget to either run or incldue a script in package.json to run nodemon index.js
var express = require('express');
const path = require('path');
//might want to think about using the cors middleware if we run into cors errors

var productDetailRouter = require('./productDetailRoutes.js');
var qnaRoutes = require('./qNARoutes.js');
var ratingsNReviewsRoutes = require('./ratingsNReviewsRoutes.js');
var relatedItemsRoutes = require('./relatedItemsRoutes.js');
const cors = require('cors');


var app = express();
//
const port = 3000;
const mainDir = __dirname.substring(0, __dirname.length - 6);
console.log(mainDir);

app.listen(port, ()=>{
  console.log (`server is listening at http://localhost:${port}`)
});
app.use(express.json());


app.use('/productdetail', productDetailRouter)
app.use('/qna', qnaRoutes)
app.use('/ratingsnreviews', ratingsNReviewsRoutes)
app.use('/relateditems', relatedItemsRoutes)
//use parameters to then route each to the appropriate functions
//could change this route to be more specific

app.use(express.static('client/dist'));
app.use(cors());


app.get('/*', function (req, res) {
  console.log(mainDir);
  res.sendFile(path.join(mainDir, 'client/dist', 'index.html'));
});