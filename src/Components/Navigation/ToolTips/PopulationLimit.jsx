import React, {Component, Fragment } from 'react';

class PopulationLimit extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <div className='population-limit tip'>
          Population limit
        </div>
      </Fragment>
    )
  }
}

export default PopulationLimit;
