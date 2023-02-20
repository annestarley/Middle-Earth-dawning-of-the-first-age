import React, {Component, Fragment } from 'react';
import Farming from './Settlement/Farming';
import Meadows from './Settlement/Meadows';
import Fishing from './Settlement/Fishing';
import Lore from './Settlement/Lore';
import Mining from './Settlement/Mining';
import Strength from './Settlement/Strength';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <div className='menu-console'>
          <div className='menu-popup'>
            <div className='exit-restart-div'>
              <button className='exit-button button'>Exit</button>
              <button className='restart-button button'>Restart</button>
            </div>
            <button className='close-button button' onClick={() => this.props.close()}>Close</button>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Menu;
