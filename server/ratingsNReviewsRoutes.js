//could either separate out controller (if we do then need to "require" the controller to get its functions)
var router = require('express').Router();
router.use((req, res, next)=>{
  console.log('ratingsNReviews router is working');
  next();
})
router.get('/ratingsnreviews', )
router.get('/ratingsnreviews', )
//fill in with correct url, function
router.post('', )
//fill in with correct url, function

module.exports = router