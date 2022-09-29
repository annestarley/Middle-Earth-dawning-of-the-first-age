import React, {Component, Fragment } from 'react';

class Menu extends Component {
  constructor(props) {
        super(props);
        this.state = {}

        this.fetchState = this.fetchState.bind(this);
    }

    fetchState () {}

  render() {
    return (
      <Fragment>
        <h1>Menu to come</h1>
      </Fragment>
    )
  }
}

export default Menu;
