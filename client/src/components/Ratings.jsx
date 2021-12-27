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

    <RatingsFeed />
    <RatingsStats samp={this.state.sampleData}/>
    </div>
  )
}
}


export default Ratings;