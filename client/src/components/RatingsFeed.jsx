import React from 'react';
import RatingsFeedCard from './RatingsFeedCard.jsx'

class RatingsFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sampleReview: this.props.sampleReview

    }
  }

  render() {
    return (
      <div className="feed">
        <div> X reviews, sorted by <u>relevance v </u> </div>

        <div> <RatingsFeedCard review={this.state.sampleReview.results[0]} /> </div>
        <div> <RatingsFeedCard review={this.state.sampleReview.results[1]} /> </div>

        <button> MORE REVIEWS </button>
        <button> ADD A REVIEW </button>
      </div>

    )
  }
}


export default RatingsFeed;