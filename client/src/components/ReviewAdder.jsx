import React from 'react';


class ReviewAdder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product_id: -1,
      rating: -1,
      summary: '',
      body: '',
      recommend: true,
      name: '',
      email: '',
      photos: [],
      characteristics: {
        Size: -1,
        Width: -1,
        Comfort: -1,
        Quality: -1
      }

    }
    this.submitReview = this.submitReview.bind(this);
  }

  submitReview() {
    console.log('Review submitted')
  }

  render() {

    return (
      <div>
        <form onSubmit={this.submitReview}>
          <label>
            Rating:
            <input type="number" max="5" min="1" />
          </label>
          <div> <label>
            Summary:
            <input type="text" />
          </label>
          </div>
          <div> <label>
            Body:
            <input type="text" />
          </label>
          </div>

          <div> <label>
            Recommend:
            <input type="text" />
          </label>
          </div>
          <div> <label>
            Name:
            <input type="text" />
          </label>
          </div>

          <div> <label>
            Email:
            <input type="text" />
          </label>
          </div>

          <div> <label>
            Photo(s) URL:
            <input type="text" />
          </label>
          </div>

          <div> <label>
            Characteristics:
            <input type="text" />
          </label>
          </div>
          <button type="submit">Submit Review</button>
        </form>

      </div>
    )
  }
}


export default ReviewAdder;