import React, {Component, Fragment } from 'react';

class BottomNav extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <div className='nav-bar'>
          <div className='left-bottom-nav'>
            <div className='nav-bar-item settlement button' id='settlement' onClick={(e) => this.props.setConsole(e)}>
              Settlement
            </div>
            <div className='nav-bar-item tech button' id='tech' onClick={(e) => this.props.setConsole(e)}>
              Tech
            </div>
            <div className='nav-bar-item buildings button' id='buildings' onClick={(e) => this.props.setConsole(e)}>
              Buildings
            </div>
            <div className='nav-bar-item help button' id='help' onClick={(e) => this.props.setConsole(e)}>
              Help
            </div>
            <div className='nav-bar-item menu button'>
              Menu
            </div>
          </div>
          <div className='right-bottom-nav'>
            <div className='nav-bar-item turn stats'>
              <div id='turn-text' className='turn-line'>turn</div>
            </div>
            <div className='nav-bar-item end button'>
              End Turn
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default BottomNav;
