//could either separate out controller (if we do then need to "require" the controller to get its functions)
var router = require('express').Router();
router.use((req, res, next)=>{
  console.log('relatedItems router is working');
  next();
})
router.get('/relateditems', )
router.get('/relateditems', )
//fill in with correct url, function
router.post('', )
//fill in with correct url, function

module.exports = router