import React, {Component, Fragment } from 'react';
import TopNav from './Navigation/TopNav';
import BottomNav from './Navigation/BottomNav';
import Settlement from './GameConsole/Settlement/Settlement';
import Info from './GameConsole/Info';
import Tech from './GameConsole/Tech/Tech';
import Buildings from './GameConsole/Buildings/Buildings';
import Help from './GameConsole/Help'

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
          }
        }

        this.setConsole = this.setConsole.bind(this);
    }

    setConsole (e) {
      let navState = this.state.nav;
      for (let prop in navState) {
        prop == e.target.id ? navState[prop] = true : navState[prop] = false
      }
      this.setState({nav: navState})
    }

  render() {
    return (
      <Fragment>
        <div className="main-game">
          <h1>Middle Earth: The Dawning of the First Age</h1>
          <h3>A precivilization game.</h3>
          <TopNav setConsole={(e) => this.setConsole(e)} />
          <div className='console'>
            {(this.state.nav.settlement) ? <Settlement /> : ''}
            {(this.state.nav.tech) ? <Tech /> : ''}
            {(this.state.nav.buildings) ? <Buildings /> : ''}
            {(this.state.nav.help) ? <Help /> : ''}
            {(this.state.nav.info) ? <Info /> : ''}
          </div>
          <BottomNav setConsole={(e) => this.setConsole(e)} />
        </div>
      </Fragment>
    )
  }
}

export default MainGame;
