import React from 'react';
import RatingsFeed from './RatingsFeed.jsx'
import RatingsStats from './RatingsStats.jsx'
import axios from 'axios'
import sampleData from '../sampleData.js'


class Ratings extends React.Component {
 constructor(props) {
   super(props)

   this.state = {
    reviews: [],
    sampleData: sampleData

   }

 }

componentDidMount() {
console.log('Ratings mounted')

}


render() {
  return (
    <div>
    <RatingsStats samp={this.state.sampleData}/>
    <RatingsFeed />
    </div>
  )
}
}


export default Ratings;