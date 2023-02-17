import React, {Component, Fragment } from 'react';
import StrengthWorkers from './Workers/StrengthWorkers';

class Strength extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <StrengthWorkers population={this.props.population.number}/>
        <div className='strength-div'>
          <div className='settlement-stats'><span>{this.props.population.number}</span> / <span>{this.props.population.limit}</span></div>
        </div>
      </Fragment>
    )
  }
}

export default Strength;
