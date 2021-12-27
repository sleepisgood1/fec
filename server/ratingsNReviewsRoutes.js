const axios = require('axios');
var router = require('express').Router();


router.get('', (req, res) => {
  res.status(200).send('hello you got gotted');
})

// router.get('/metadata', (req, res) => {

//   axios({
//     method: 'get',
//     url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta?product_id=63854'
//   })
//   .then((response) => {
//     res.status(200).send(response);

//   })


// })


//next() paradigm:
// router.use((req, res, next) => {
//   console.log('ratingsNReviews router is working');
//   next();
// },

// function (req, res, next) {
//   console.log('getting');
//   res.status(200).send('hello you got');
// }
// )




//given by Jae:
//router.get('/ratingsnreviews', )
//fill in with correct url, function
router.post('', )
//fill in with correct url, function

module.exports = router