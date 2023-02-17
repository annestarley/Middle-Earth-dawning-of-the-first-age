import React, {Component, Fragment } from 'react';
import MiningWorkers from './Workers/MiningWorkers';

class Mining extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <MiningWorkers population={this.props.mining.num}/>
        <div className='mining-div'>
          <div className='round-button-container'>
            <div className='plus button-round' onClick={(e) => this.props.editWorkers(e)}>+</div>
          </div>
          <div className='settlement-stats'><span>{this.props.mining.num}</span> / <span>{this.props.mining.limit}</span></div>
          <div className='round-button-container'>
            <div className='minus button-round' onClick={(e) => this.props.editWorkers(e)}>-</div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Mining;
