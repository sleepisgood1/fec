import React from 'react';


class RatingsFeedCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      review: this.props.review
    }
  }

  render() {

    return (
      <div className="review_card" >

        <div> ****  {this.state.review.reviewer_name} &nbsp; &nbsp; {this.state.review.date}  </div>
        <div><b> {this.state.review.summary} </b> </div>
        <div>{this.state.review.body} </div>
        <div>{this.state.review.response ? this.state.review.response : ''} </div>
        <div>Helpful? Yes ({this.state.review.helpfulness}) | <u>Report</u> </div>

      </div>

    )
  }
}


export default RatingsFeedCard;