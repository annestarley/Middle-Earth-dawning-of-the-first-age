import React, {Component, Fragment } from 'react';
import Farming from './Farming';
import Meadows from './Meadows';
import Fishing from './Fishing';
import Lore from './Lore';
import Mining from './Mining';
import Strength from './Strength';
import Menu from '../Menu';

class Settlement extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <div className='settlement-console'>
          {this.props.menu ? <Menu close={() => this.props.close()}/> : ''} 
          <Strength population={this.props.settlement.population} />
          <Farming farming={this.props.settlement.farming} editWorkers={(e) => this.props.editWorkers(e)} />
          <Meadows meadows={this.props.settlement.meadows} editWorkers={(e) => this.props.editWorkers(e)} />
          <Mining mining={this.props.settlement.mining} editWorkers={(e) => this.props.editWorkers(e)} />
          <Fishing fishing={this.props.settlement.fishing} editWorkers={(e) => this.props.editWorkers(e)} />
          <Lore lore={this.props.settlement.lore} editWorkers={(e) => this.props.editWorkers(e)} />
        </div>
      </Fragment>
    )
  }
}

export default Settlement;
