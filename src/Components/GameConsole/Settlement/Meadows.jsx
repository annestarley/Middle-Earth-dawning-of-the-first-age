import React, {Component, Fragment } from 'react';

class Meadows extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <div className='meadows-div'>
          <div className='round-button-container'>
            <div className='plus button-round'>+</div>
          </div>
          <div className='settlement-stats'><span>num</span> / <span>limit</span></div>
          <div className='round-button-container'>
            <div className='minus button-round'>-</div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Meadows;
