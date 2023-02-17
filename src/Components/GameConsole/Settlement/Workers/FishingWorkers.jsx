import React, {Component, Fragment } from 'react';

class FishingWorkers extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <div className='workers fishing-workers'>
          <img id='worker-1' src='./images/workers/worker.jpeg' alt='Working stickman.'/>
          <img id='worker-2' src='./images/workers/worker.jpeg' alt='Working stickman.'/>
          <img id='worker-3' src='./images/workers/worker.jpeg' alt='Working stickman.'/>
        </div>
      </Fragment>
    )
  }
}

export default FishingWorkers;
