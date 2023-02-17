import React, {Component, Fragment } from 'react';
import LoreWorkers from './Workers/LoreWorkers';

class Lore extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <LoreWorkers population={this.props.lore.num}/>
        <div className='lore-div'>
          <div className='round-button-container'>
            <div className='plus button-round' onClick={(e) => this.props.editWorkers(e)}>+</div>
          </div>
          <div className='settlement-stats'><span>{this.props.lore.num}</span> / <span>{this.props.lore.limit}</span></div>
          <div className='round-button-container'>
            <div className='minus button-round' onClick={(e) => this.props.editWorkers(e)}>-</div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Lore;
