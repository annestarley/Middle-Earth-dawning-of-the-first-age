import React, {Component, Fragment } from 'react';

class Settlement extends Component {
  constructor(props) {
        super(props);
        this.state = {}

        this.fetchState = this.fetchState.bind(this);
    }

    fetchState () {}

  render() {
    return (
      <Fragment>
        <h1>Settlement to come</h1>
      </Fragment>
    )
  }
}

export default Settlement;
