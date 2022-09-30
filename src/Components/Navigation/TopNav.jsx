import React, {Component, Fragment } from 'react';

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <div className='nav-bar top-nav'>
          <div className='nav-bar-item year stats'>
            <div id='year' className='single-line-item'>year</div>
          </div>
          <div className='nav-bar-item population stats'>
            <div id='pop-limit'>
              <span id='pop'>pop</span>
              <span>/</span>
              <span id='limit'>limit</span>
            </div>
            <div id='pop-growth'>+pop</div>
          </div>
          <div className='nav-bar-item food stats'>
            <div className='food-growth' className='single-line-item'>+food</div>
          </div>
          <div className='nav-bar-item production stats'>
            <div id='total-prod'>total prod</div>
            <div id='prod-growth'>+prod</div>
          </div>
          <div className='nav-bar-item lore stats'>
            <div id='total-lore'>total lore</div>
            <div id='lore-growth'>+lore</div>
          </div>
          <div className='nav-bar-item threat stats'>
            <div id='threat' className='single-line-item'>threat %</div>
          </div>
          <div className='nav-bar-item info info-button' id='info' onClick={(e) => this.props.setConsole(e)}>+</div>
        </div>
      </Fragment>
    )
  }
}

export default TopNav;
