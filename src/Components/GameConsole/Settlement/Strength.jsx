import React, {Component, Fragment } from 'react';

class Strength extends Component {
  constructor(props) {
        super(props);
        this.state = {}

        this.fetchState = this.fetchState.bind(this);
    }

    fetchState () {}

  render() {
    return (
      <Fragment>
        <div className='strength-div'>
          <div className='settlement-stats'><span>num</span> / <span>limit</span></div>
        </div>
      </Fragment>
    )
  }
}

export default Strength;
