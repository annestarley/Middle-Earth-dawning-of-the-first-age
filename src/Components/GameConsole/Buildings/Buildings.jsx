import React, {Component, Fragment } from 'react';

class Buildings extends Component {
  constructor(props) {
        super(props);
        this.state = {}

        this.fetchState = this.fetchState.bind(this);
    }

    fetchState () {}

  render() {
    return (
      <Fragment>
        <h1>Buildings to come</h1>
      </Fragment>
    )
  }
}

export default Buildings;
