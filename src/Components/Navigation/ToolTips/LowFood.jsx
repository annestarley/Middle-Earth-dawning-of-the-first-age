import React, {Component, Fragment } from 'react';

class LowFood extends Component {
  constructor(props) {
        super(props);
        this.state = {}

        this.fetchState = this.fetchState.bind(this);
    }

    fetchState () {}

  render() {
    return (
      <Fragment>
        <div className='settlement-console'>
        </div>
      </Fragment>
    )
  }
}

export default LowFood;
