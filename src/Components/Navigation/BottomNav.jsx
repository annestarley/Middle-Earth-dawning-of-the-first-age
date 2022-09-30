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
            <div className='nav-bar-item settlement button'>
              <div id='settlement' onClick={(e) => this.props.setConsole(e)}>Settlement</div>
            </div>
            <div className='nav-bar-item tech button'>
              <div id='tech' onClick={(e) => this.props.setConsole(e)}>Tech</div>
            </div>
            <div className='nav-bar-item buildings button'>
              <div id='buildings' onClick={(e) => this.props.setConsole(e)}>Buildings</div>
            </div>
            <div className='nav-bar-item help button'>
              <div id='help' onClick={(e) => this.props.setConsole(e)}>Help</div>
            </div>
            <div className='nav-bar-item menu button'>
              <div id='menu'>Menu</div>
            </div>
          </div>
          <div className='right-bottom-nav'>
            <div className='nav-bar-item turn stats'>
              <div id='turn' className='single-line-item'>turn</div>
            </div>
            <div className='nav-bar-item end button'>
              <div id='end'>End Turn</div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default BottomNav;
