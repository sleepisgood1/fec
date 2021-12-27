import React from 'react';

class RatingsStats extends React.Component {
 constructor(props) {
   super(props)
 }

render() {
  return (
    <div>
    Stats and stars oh my
    <div> {JSON.stringify(this.props.samp)} </div>
    </div>
  )
}
}


export default RatingsStats;