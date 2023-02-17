import React, {Component, Fragment } from 'react';

class Farming extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <div className='farming-div'>
          <div className='round-button-container'>
            <div className='plus button-round' onClick={(e) => this.props.editWorkers(e)} >+</div>
          </div>
          <div className='settlement-stats'><span>{this.props.farming.num}</span> / <span>{this.props.farming.limit}</span></div>
          <div className='round-button-container'>
            <div className='minus button-round'onClick={(e) => this.props.editWorkers(e)} >-</div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Farming;
