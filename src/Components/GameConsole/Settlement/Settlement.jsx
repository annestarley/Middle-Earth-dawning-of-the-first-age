import React, {Component, Fragment } from 'react';
import Farming from './Farming';
import Meadows from './Meadows';
import Fishing from './Fishing';
import Lore from './Lore';
import Mining from './Mining';
import Strength from './Strength';
import Menu from '../Menu';
import PopulationLimit from '../../Navigation/ToolTips/PopulationLimit';
import Starvation from '../../Navigation/ToolTips/Starvation';
import LowFood from '../../Navigation/ToolTips/LowFood';
import HighRisk from '../../Navigation/ToolTips/HighRisk';

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
          {(this.props.settlement.population.number === this.props.settlement.population.limit) ? <PopulationLimit /> : ''}
          {(this.props.settlement.farming.num+this.props.settlement.meadows.num+this.props.settlement.fishing.num < 0) ? <Starvation /> : ''}
          {(((this.props.settlement.farming.effect*this.props.settlement.farming.multiplier*this.props.settlement.farming.num)
                        +(this.props.settlement.meadows.effect*this.props.settlement.meadows.multiplier*this.props.settlement.meadows.num)
                        +(this.props.settlement.fishing.effect*this.props.settlement.fishing.multiplier*this.props.settlement.fishing.num)
                        -(this.props.settlement.population.number + this.props.settlement.lore.num + this.props.settlement.farming.num + this.props.settlement.fishing.num + this.props.settlement.meadows.num))/20) < 0.2 ? <LowFood /> : ''}
          <HighRisk />
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
