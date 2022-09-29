import React, {Component, Fragment } from 'react';

class TopNav extends Component {
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
          <div className='nav-bar-item year'>
            <div id='year'>year</div>
          </div>
          <div className='nav-bar-item population'>
            <div id='pop-limit'>
              <span id='pop'>pop</span>
              <span>/</span>
              <span id='limit'>limit</span>
            </div>
            <div id='pop-growth'>+pop</div>
          </div>
          <div className='nav-bar-item food'>
            <div className='food-growth'>+food</div>
          </div>
          <div className='nav-bar-item production'>
            <div id='total-prod'>total prod</div>
            <div id='prod-growth'>+prod</div>
          </div>
          <div className='nav-bar-item lore'>
            <div id='total-lore'>total lore</div>
            <div id='lore-growth'>+lore</div>
          </div>
          <div className='nav-bar-item threat'>
            <div id='threat'>threat %</div>
          </div>
          <div className='nav-bar-item info'>
            <div id='info'>+</div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default TopNav;
