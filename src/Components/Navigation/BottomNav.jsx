import React, {Component, Fragment } from 'react';

class BottomNav extends Component {
  constructor(props) {
        super(props);
        this.state = {}

        this.fetchState = this.fetchState.bind(this);
    }

    fetchState () {}

  render() {
    return (
      <Fragment>
        <div className='nav-bar'>
          <div className='nav-bar-item settlement'>
            <div id='settlement'>Settlement</div>
          </div>
          <div className='nav-bar-item tech'>
            <div id='tech'>Tech</div>
          </div>
          <div className='nav-bar-item buildings'>
            <div id='buildings'>Buildings</div>
          </div>
          <div className='nav-bar-item help'>
            <div id='help'>Help</div>
          </div>
          <div className='nav-bar-item menu'>
            <div id='menu'>Menu</div>
          </div>
          <div className='nav-bar-item turn'>
            <div id='turn'>turn</div>
          </div>
          <div className='nav-bar-item end'>
            <div id='end'>End Turn</div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default BottomNav;
