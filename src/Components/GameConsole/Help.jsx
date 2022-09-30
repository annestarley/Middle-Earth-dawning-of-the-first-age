import React, {Component, Fragment } from 'react';
import ExitButton from './ExitButton';

class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <ExitButton exit={() => this.props.exit()} />
        <div className='help-console'>
          <div className='help-div'>
            <img src='https://via.placeholder.com/300.png/ccc/fff' alt='Building 12 description.' width='293' height="182" />
            <div><p>1. Distribute your people among many labors to get a balanced income of food, production, and cultural growth.</p></div>
          </div>
          <div className='help-div'>
            <img src='https://via.placeholder.com/300.png/ccc/fff' alt='Building 12 description.' width='293' height="182" />
            <div><p>2. If their is a high threat in your lands, transfer your people to defense of the village.</p></div>
          </div>
          <div className='help-div'>
            <img src='https://via.placeholder.com/300.png/ccc/fff' alt='Building 12 description.' width='293' height="182" />
            <div><p>3. Press the End Turn button to continue on to the next time period.</p></div>
          </div>
          <div className='help-div'>
            <img src='https://via.placeholder.com/300.png/ccc/fff' alt='Building 12 description.' width='293' height="182" />
            <div><p>4. Discover new magic and lore, construct buildings, and develop your people's abilities.</p></div>
          </div>
          <div className='help-div'>
            <img src='https://via.placeholder.com/300.png/ccc/fff' alt='Building 12 description.' width='293' height="182" />
            <div><p>5. Press any tech or building in an appropriate menu to get information about it.</p></div>
          </div>
          <div className='help-div'>
            <img src='https://via.placeholder.com/300.png/ccc/fff' alt='Building 12 description.' width='293' height="182" />
            <div><p>6. Your primary win goal is to build the final grand building before 120 turns have passed, signifying the end of the first age.</p></div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Help;
