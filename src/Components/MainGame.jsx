import React, {Component, Fragment } from 'react';
import TopNav from './Navigation/TopNav';
import BottomNav from './Navigation/BottomNav'

class MainGame extends Component {
  constructor(props) {
        super(props);
        this.state = {}

        this.fetchState = this.fetchState.bind(this);
    }

    fetchState () {}

  render() {
    return (
      <Fragment>
        <div className="main-game">
          <h1>Middle Earth: The Dawning of the First Age</h1>
          <h3>A precivilization game.</h3>
          <TopNav />
          <div className='console'>
          </div>
          <BottomNav />
        </div>
      </Fragment>
    )
  }
}

export default MainGame;
