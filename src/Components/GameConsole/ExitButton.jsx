import React, {Component, Fragment } from 'react';

class ExitButton extends Component {
  constructor(props) {
        super(props);
        this.state = {}

        this.fetchState = this.fetchState.bind(this);
    }

    fetchState () {}

  render() {
    return (
      <Fragment>
        <div className='exit-button-container' onClick={() => this.props.exit()}>
          <div className='exit button-round'>x</div>
        </div>
      </Fragment>
    )
  }
}

export default ExitButton;
