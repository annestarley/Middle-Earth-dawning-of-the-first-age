import React, {Component, Fragment } from 'react';
import Farming from './Farming';
import Meadows from './Meadows';
import Fishing from './Fishing';
import Lore from './Lore';
import Mining from './Mining';
import Strength from './Strength';

class Settlement extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <div className='settlement-console'>
          <Strength population={this.props.settlement.population} />
          <Farming farming={this.props.settlement.farming} />
          <Meadows meadows={this.props.settlement.meadows} />
          <Mining mining={this.props.settlement.mining} />
          <Fishing fishing={this.props.settlement.fishing} />
          <Lore lore={this.props.settlement.lore} />
        </div>
      </Fragment>
    )
  }
}

export default Settlement;
