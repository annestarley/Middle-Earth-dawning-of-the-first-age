import React, {Component, Fragment } from 'react';

class Help extends Component {
  constructor(props) {
        super(props);
        this.state = {}

        this.fetchState = this.fetchState.bind(this);
    }

    fetchState () {}

  render() {
    return (
      <Fragment>
        <h1>Help to come</h1>
      </Fragment>
    )
  }
}

export default Help;
