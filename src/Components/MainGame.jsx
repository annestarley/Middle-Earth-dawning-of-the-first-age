import React, {Component, Fragment } from 'react';
import TopNav from './Navigation/TopNav';
import BottomNav from './Navigation/BottomNav';
import Settlement from './GameConsole/Settlement/Settlement';
import Info from './GameConsole/Info';
import Tech from './GameConsole/Tech/Tech';
import Buildings from './GameConsole/Buildings/Buildings';
import Help from './GameConsole/Help';
import Menu from './GameConsole/Menu';
import LowFood from './Navigation/ToolTips/LowFood';
import Starvation from './Navigation/ToolTips/Starvation';
import HighRisk from './Navigation/ToolTips/HighRisk';
import PopulationLimit from './Navigation/ToolTips/PopulationLimit'

class MainGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: {
        settlement: true,
        info: false,
        tech: false,
        buildings: false,
        help: false,
        menu: false
      },
      settlement: {
        farming: {
          num: 0,
          limit: 15,
          effect: 2,
          multiplier: 1
        },
        meadows: {
          num: 0,
          limit: 2,
          effect: 3,
          multiplier: 1
        },
        fishing: {
          num: 0,
          limit: 2,
          effect: 4,
          multiplier: 1
        },
        mining: {
          num: 0,
          limit: 5,
          effect: 2,
          multiplier: 1,
          passive: 2.4
        },
        lore: {
          num: 0,
          limit: 2,
          effect: 2,
          multiplier: 1,
          passive: 4.8
        },
        population: {
          number: 12,
          limit: 25,
          multiplier: 1
        }
      },
      turn: 1
    }

    this.setConsole = this.setConsole.bind(this);
    this.exit = this.exit.bind(this);
    this.editWorkers = this.editWorkers.bind(this);
    this.endTurn = this.endTurn.bind(this);
  }

  setConsole (e) {
    let navState = this.state.nav;
    for (let prop in navState) {
      prop == e.target.id ? navState[prop] = true : navState[prop] = false;
      this.setState({nav: navState})
      prop == e.target.id ? e.target.classList.add('active') : document.getElementById(prop).classList.remove('active')
    }
  }

  exit () {
    let navState = this.state.nav;
    for (let prop in navState) {
      prop == 'settlement' ? navState[prop] = true : navState[prop] = false;
      this.setState({nav: navState})
      prop == 'settlement' ? (document.getElementById(prop).classList.contains('active') ? console.log('already active') : document.getElementById(prop).classList.add('active')) : (document.getElementById(prop).classList.contains('active') ? document.getElementById(prop).classList.remove('active') : console.log('not active'));
    }
  }

  editWorkers (e) {
    let div = e.target.parentNode.parentNode.classList.value;
    let category = div.slice(0, div.length-4)
    if (e.target.classList.contains('plus')) {
      if (this.state.settlement[category].num < this.state.settlement[category].limit && this.state.settlement.population.number > 0) {
        let newState = this.state.settlement;
        newState[category].num += 1;
        newState.population.number -= 1;
        this.setState({settlement: newState});
      }
    } else if (e.target.classList.contains('minus')) {
      if (this.state.settlement[category].num > 0) {
        let newState = this.state.settlement;
        newState[category].num -= 1;
        newState.population.number += 1;
        this.setState({settlement: newState});
      }
    }
  }

  endTurn() {
    let newTurn = this.state.turn + 1;
    this.setState({turn: newTurn});
  }

  render() {
    return (
      <Fragment>
        <div className="main-game">
          <h1>Middle Earth: The Dawning of the First Age</h1>
          <h3>A precivilization game.</h3>
          <TopNav setConsole={(e) => this.setConsole(e)} settlement={this.state.settlement} turn={this.state.turn} />
          <div className='console'>
            <LowFood />
            <Starvation />
            <HighRisk />
            <PopulationLimit />
            {(this.state.nav.settlement) ? <Settlement settlement={this.state.settlement} editWorkers={(e) => this.editWorkers(e)} /> : ''}
            {(this.state.nav.tech) ? <Tech exit={() => this.exit()} /> : ''}
            {(this.state.nav.buildings) ? <Buildings exit={() => this.exit()} /> : ''}
            {(this.state.nav.help) ? <Help exit={() => this.exit()} /> : ''}
            {(this.state.nav.info) ? <Info exit={() => this.exit()} /> : ''}
            {(this.state.nav.menu) ? <Menu exit={() => this.exit()} /> : ''}
          </div>
          <BottomNav setConsole={(e) => this.setConsole(e)} turn={this.state.turn} endTurn={() => this.endTurn()}/>
        </div>
      </Fragment>
    )
  }
}

export default MainGame;
