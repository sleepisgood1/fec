import React from 'react';
import RatingsFeedCard from './RatingsFeedCard.jsx'
import ReviewAdder from './ReviewAdder.jsx'

class RatingsFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sampleReview: this.props.sampleReview,
      showAdder: false

    }
    this.addReview = this.addReview.bind(this);
    this.moreReviews = this.moreReviews.bind(this);
  }

  moreReviews() {
    console.log('More reviews to be generated')
  }

  addReview() {
    console.log('ReviewAdder shown!')
    let opposite = !this.state.showAdder;
    this.setState({ showAdder: opposite });
  }


  render() {
    return (
      <div className="feed">
        <div> X reviews, sorted by <u>relevant/helpful/newest v </u> </div>
        <div> <RatingsFeedCard review={this.state.sampleReview.results[0]} /> </div>
        <div> <RatingsFeedCard review={this.state.sampleReview.results[1]} /> </div>

        <button onClick={this.moreReviews}> MORE REVIEWS </button>
        <button onClick={this.addReview}> ADD A REVIEW </button>
        {this.state.showAdder ? <ReviewAdder /> : ''}
      </div>

    )
  }
}


export default RatingsFeed;