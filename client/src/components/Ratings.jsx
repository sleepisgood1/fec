import React from 'react';
import RatingsFeed from './RatingsFeed.jsx'
import RatingsStats from './RatingsStats.jsx'

class Ratings extends React.Component {
 constructor(props) {
   super(props)
 }

render() {
  return (
    <div>
    <RatingsFeed />
    <RatingsStats />
    </div>
  )
}
}


export default Ratings;