import React, {Component, Fragment } from 'react';
import ExitButton from '../ExitButton';

class Techs extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <ExitButton exit={() => this.props.exit()} />
      </Fragment>
    )
  }
}

export default Techs;
