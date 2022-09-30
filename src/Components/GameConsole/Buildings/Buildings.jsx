import React, {Component, Fragment } from 'react';
import ExitButton from '../ExitButton';

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
        <ExitButton exit={() => this.props.exit()} />
        <div className='buildings-console'>
          <div className='buildings'>
            <div className='building'></div>
            <div className='building'></div>
            <div className='building'></div>
            <div className='building'></div>
            <div className='building'></div>
            <div className='building'></div>
            <div className='building'></div>
            <div className='building'></div>
            <div className='building'></div>
            <div className='building'></div>
            <div className='building'></div>
          </div>
          <div className='buildings-info'></div>
        </div>
      </Fragment>
    )
  }
}

export default Buildings;
