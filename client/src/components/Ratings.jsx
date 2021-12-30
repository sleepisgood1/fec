import React from 'react';
import RatingsFeed from './RatingsFeed.jsx'
import RatingsStats from './RatingsStats.jsx'
import axios from 'axios'
import { sampleData, sampleReview } from '../sampleData.js'


class Ratings extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: [],
      sampleData: sampleData,
      sampleReview: sampleReview
    }
  }

  render() {
    console.log('reviews here: ', this.props.reviews)
    console.log('meta here: ', this.props.meta)

    return (
      <div>
        <div> </div>
        <RatingsStats samp={this.state.sampleData} />
        <RatingsFeed sampleReview={this.state.sampleReview} />
      </div>

    )
  }
}


export default Ratings;