import React from 'react';

class RatingsStats extends React.Component {
 constructor(props) {
   super(props)
 }

render() {

var total = (this.props.samp.recommended.true + this.props.samp.recommended.false)
var rec_percent = this.props.samp.recommended.true / total;
var recommended = Math.round(rec_percent * 100);

  return (
    <div className="statz">
    Ratings & Reviews
    <h1>  4.5  **** </h1>
    <div> {recommended}% of reviews recommended this product </div>
    <div> 1: {this.props.samp.ratings[1]} </div>
    <div> 2: {this.props.samp.ratings[2]} </div>
    <div> 3: {this.props.samp.ratings[3]} </div>
    <div> 4: {this.props.samp.ratings[4]} </div>
    <div> 5: {this.props.samp.ratings[5]} </div>
    <div> Size {this.props.samp.characteristics.Size.value} </div>
    <div> Width {this.props.samp.characteristics.Width.value} </div>
    <div> Comfort {this.props.samp.characteristics.Comfort.value} </div>
    <div> Quality {this.props.samp.characteristics.Quality.value} </div>
    </div>

  )}}

export default RatingsStats;