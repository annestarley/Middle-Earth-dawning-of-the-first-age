import React, {Component, Fragment } from 'react';
import ExitButton from './ExitButton';

class Info extends Component {
  constructor(props) {
        super(props);
        this.state = {}

        this.fetchState = this.fetchState.bind(this);
    }

    fetchState () {}

  render() {
    return (
      <Fragment>
        <ExitButton exit={() => this.props.exit()} />
        <div className='info-console'>
          <div className='info-div info-pop'>
            <h2>Population</h2>
            <p>Laboring kinsman produce valuable resources</p>
            <ul>
              <li>Current population: pop</li>
              <li>Maximum population: max</li>
              <li>Pop. growth rate: rate</li>
            </ul>
          </div>
          <div className='info-div info-food'>
            <h2>Food</h2>
            <p>Every 20 food adds 1 human.</p>
            <ul>
              <li>Food growth/turn: growth</li>
              <li>Food consumed/turn: cons</li>
              <li>Food from farming: farm</li>
              <li>Food from hunting: hunt</li>
              <li>Food from fishing: fish</li>
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
