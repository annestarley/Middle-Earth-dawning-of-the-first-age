import React, {Component, Fragment } from 'react';

class SecondEra extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <div className='second-era'>
          <div className='date'>
            <h4>Date</h4>
            <div className='roman-date'>ii</div>
          </div>
          <div className='first-era-techs era-techs'>
            <div className='fishing-techs'>

            </div>
            <div className='hunting-techs'>

            </div>
            <div className='farming-techs'>

            </div>
            <div className='population-techs'>

            </div>
            <div className='mining-techs'>

            </div>
            <div className='lore-techs'>

            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default SecondEra;
