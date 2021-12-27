import React from 'react';
import Ratings from './Ratings.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>Hello World!
        <Ratings />
      </div>

    )
  }
}


export default App;