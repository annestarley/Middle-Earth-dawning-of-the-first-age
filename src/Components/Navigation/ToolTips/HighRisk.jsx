import React, {Component, Fragment } from 'react';

class HighRisk extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <div className='high-risk tip bounce'>
          High risk
        </div>
      </Fragment>
    )
  }
}

export default HighRisk;
