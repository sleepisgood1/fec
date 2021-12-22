//dont forget to add express.js to the package.json dependencies
//dont forget to either run or incldue a script in package.json to run nodemon index.js
var express = require('express');

//might want to think about using the cors middleware if we run into cors errors

var productDetailRouter = require('./productDetailRoutes.js');
var qnaRoutes = require('./qNARoutes.js');
var ratingsNReviewsRoutes = require('./ratingsNReviewsRoutes.js');
var relatedItemsRoutes = require('./relatedItemsRoutes.js');

var app = express();
//
const port = 3000;

app.listen(port, ()=>{
  console.log (`server is listening at http://localhost:${port}`)
});
app.use(express.json());


app.use('/productDetail', productDetailRouter)
app.use('/qna', qnaRoutes)
app.use('/ratingsnreviews', ratingsNReviewsRoutes)
app.use('/relateditems', relatedItemsRoutes)
//could change this route to be more specific

app.use(express.static(__dirname + '/../client'));
//might need to change directory
