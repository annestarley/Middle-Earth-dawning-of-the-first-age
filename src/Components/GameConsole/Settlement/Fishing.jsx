import React, {Component, Fragment } from 'react';
import FishingWorkers from './Workers/FishingWorkers';

class Fishing extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <FishingWorkers population={this.props.fishing.num}/>
        <div className='fishing-div'>
          <div className='round-button-container'>
            <div className='plus button-round' onClick={(e) => this.props.editWorkers(e)}>+</div>
          </div>
          <div className='settlement-stats'><span>{this.props.fishing.num}</span> / <span>{this.props.fishing.limit}</span></div>
          <div className='round-button-container'>
            <div className='minus button-round' onClick={(e) => this.props.editWorkers(e)}>-</div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Fishing;
