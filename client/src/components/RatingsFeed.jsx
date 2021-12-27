import React from 'react';
import RatingsFeedCard from './RatingsFeedCard.jsx'
import ReviewAdder from './ReviewAdder.jsx'

class RatingsFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sampleReview: this.props.sampleReview

    }
    this.addReview = this.addReview.bind(this);
    this.moreReviews = this.moreReviews.bind(this);
  }

  moreReviews() {
    console.log('More reviews to be generated')
    }

  addReview() {
    console.log('ReviewAdder shown!')
    }


  render() {
    return (
      <div className="feed">
        <div> X reviews, sorted by <u>relevance v </u> </div>

        <div> <RatingsFeedCard review={this.state.sampleReview.results[0]} /> </div>
        <div> <RatingsFeedCard review={this.state.sampleReview.results[1]} /> </div>

        <button onClick={this.moreReviews}> MORE REVIEWS </button>
        <button onClick={this.addReview}> ADD A REVIEW </button>
        <ReviewAdder />
      </div>

    )
  }
}


export default RatingsFeed;