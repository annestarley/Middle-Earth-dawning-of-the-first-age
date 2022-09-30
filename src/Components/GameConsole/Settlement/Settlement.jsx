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

        this.fetchState = this.fetchState.bind(this);
    }

    fetchState () {}

  render() {
    return (
      <Fragment>
        <div className='settlement-console'>
          <Strength />
          <Farming />
          <Meadows />
          <Mining />
          <Fishing />
        </div>
      </Fragment>
    )
  }
}

export default Settlement;
