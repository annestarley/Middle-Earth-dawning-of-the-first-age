import React, {Component, Fragment } from 'react';

class TechInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
      <div className='tech-info-div'>
        <div className='tech-description'>
          <p className='title'></p>
          <p className='description'>Press any building to see its description.</p>
          <p className='requirements'></p>
        </div>
        <div className='tech-production'>
          <div className='tech-pts-headers'>
            <h4>Culture points</h4>
            <h4>Research points</h4>
          </div>
          <div className='tech-pts'>
            <div className='culture-pts'>Pts</div>
            <div className='research-pts'>Pts</div>
          </div>
        </div>
        <div className='build-button button'>Build</div>
      </div>
      </Fragment>
    )
  }
}

export default TechInfo;
