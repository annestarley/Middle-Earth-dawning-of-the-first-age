import React, {Component, Fragment } from 'react';

class LowFood extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <div className='low-food tip'>
          Low food
        </div>
      </Fragment>
    )
  }
}

export default LowFood;
