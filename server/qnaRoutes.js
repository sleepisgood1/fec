//could either separate out controller (if we do then need to "require" the controller to get its functions)
var router = require('express').Router();
router.use((req, res, next)=>{
  console.log('qna router is working');
  next();
})
router.get('/qna', )
//fill in with correct url, function
router.post('/qna', )
//fill in with correct url, function

module.exports = router