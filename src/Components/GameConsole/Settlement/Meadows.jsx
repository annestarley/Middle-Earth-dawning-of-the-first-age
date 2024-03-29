import React, {Component, Fragment } from 'react';
import MeadowWorkers from './Workers/MeadowWorkers';

class Meadows extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <MeadowWorkers population={this.props.meadows.num}/>
        <div className='meadows-div'>
          <div className='round-button-container'>
            <div className='plus button-round' onClick={(e) => this.props.editWorkers(e)}>+</div>
          </div>
          <div className='settlement-stats'><span>{this.props.meadows.num}</span> / <span>{this.props.meadows.limit}</span></div>
          <div className='round-button-container'>
            <div className='minus button-round' onClick={(e) => this.props.editWorkers(e)}>-</div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Meadows;
