import React, {Component, Fragment } from 'react';
import ExitButton from './ExitButton';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  totalPop = (this.props.settlement.population.number + this.props.settlement.lore.num + this.props.settlement.farming.num + this.props.settlement.fishing.num + this.props.settlement.meadows.num);
  foodGrowth =  (this.props.settlement.farming.effect*this.props.settlement.farming.multiplier*this.props.settlement.farming.num)
                +(this.props.settlement.meadows.effect*this.props.settlement.meadows.multiplier*this.props.settlement.meadows.num)
                +(this.props.settlement.fishing.effect*this.props.settlement.fishing.multiplier*this.props.settlement.fishing.num)
                -this.totalPop;

  render() {
    return (
      <Fragment>
        <ExitButton exit={() => this.props.exit()} />
        <div className='info-console'>
          <div className='info-div info-pop'>
            <h2>Population</h2>
            <p>Laboring kinsman produce valuable resources</p>
            <ul>
              <li>Current population: {this.totalPop}</li>
              <li>Maximum population: {this.props.settlement.population.limit}</li>
              <li>Pop. growth rate: {Math.round((this.foodGrowth/20)*10)/10}</li>
            </ul>
          </div>
          <div className='info-div info-food'>
            <h2>Food</h2>
            <p>Every 20 food adds 1 human.</p>
            <ul>
              <li>Food growth/turn: {Math.round(this.foodGrowth*100)/100}</li>
              <li>Food consumed/turn: {this.totalPop}</li>
              <li>Food from farming: {this.props.settlement.farming.effect}</li>
              <li>Food from hunting: {this.props.settlement.meadows.effect}</li>
              <li>Food from fishing: {this.props.settlement.fishing.effect}</li>
            </ul>
          </div>
          <div className='info-div info-mining'>
            <h2>Mining</h2>
            <p>Mining effects the construction of buildings.</p>
            <ul>
              <li>Production growth/turn: growth</li>
              <li>Total production points: pts</li>
              <li>Passive production points/turn: pts</li>
              <li>Production from mining: prod</li>
            </ul>
          </div>
          <div className='info-div info-lore'>
            <h2>Lore</h2>
            <p>The study of history, lore, and magic unlocks new cultural growth.</p>
            <ul>
              <li>Culture growth/turn: growth</li>
              <li>Total culture: pts</li>
              <li>Points needed for next level: pts</li>
              <li>Technology level: pts</li>
              <li>Culture from study/turn: pts</li>
            </ul>
          </div>
          <div className='info-div info-strength'>
            <h2>Strength</h2>
            <p>Watchmen provide protection from uninvited guests.</p>
            <ul>
              <li>Strenght level: pts</li>
              <li>Chance of attach: %%</li>
              <li>Strenght bonus: %%</li>
            </ul>
          </div>
          <div className='info-div info-turn'>
            <h2>Turns</h2>
            <p>Turns reflect the progress of time through the first age.</p>
            <ul>
              <li>Current turn: turn</li>
              <li>Years remaining until second age: years</li>
              <li>Turns remaining until second age: tunrs</li>
            </ul>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Info;
