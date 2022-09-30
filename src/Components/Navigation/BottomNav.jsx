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
          <div className='left-bottom-nav'>
            <div className='nav-bar-item settlement'>
              <div id='settlement' onClick={(e) => this.props.setConsole(e)}>Settlement</div>
            </div>
            <div className='nav-bar-item tech'>
              <div id='tech' onClick={(e) => this.props.setConsole(e)}>Tech</div>
            </div>
            <div className='nav-bar-item buildings'>
              <div id='buildings' onClick={(e) => this.props.setConsole(e)}>Buildings</div>
            </div>
            <div className='nav-bar-item help'>
              <div id='help' onClick={(e) => this.props.setConsole(e)}>Help</div>
            </div>
            <div className='nav-bar-item menu'>
              <div id='menu'>Menu</div>
            </div>
          </div>
          <div className='right-bottom-nav'>
            <div className='nav-bar-item turn'>
              <div id='turn'>turn</div>
            </div>
            <div className='nav-bar-item end'>
              <div id='end'>End Turn</div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default BottomNav;
