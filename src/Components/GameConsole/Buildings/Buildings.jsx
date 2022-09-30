import React, {Component, Fragment } from 'react';
import ExitButton from '../ExitButton';

class Buildings extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.setDescription = this.setDescription.bind(this);
  }

  setDescription (e) {
    let descriptionBox = document.querySelector('.building-description');
    descriptionBox.innerText = e.target.alt;
  }

  render() {
    return (
      <Fragment>
        <ExitButton exit={() => this.props.exit()} />
        <div className='buildings-console'>
          <div className='buildings-div'>
            <div className='building'>
              <img src='https://via.placeholder.com/300.png/ccc/fff' alt='Building 1 description.' width='100%' height='102px' onClick={(e) => this.setDescription(e)} />
            </div>
            <div className='building'>
              <img src='https://via.placeholder.com/300.png/ccc/fff' alt='Building 2 description.' width='100%' height='102px' onClick={(e) => this.setDescription(e)} />
            </div>
            <div className='building'>
              <img src='https://via.placeholder.com/300.png/ccc/fff' alt='Building 3 description.' width='100%' height='102px' onClick={(e) => this.setDescription(e)} />
            </div>
            <div className='building'>
              <img src='https://via.placeholder.com/300.png/ccc/fff' alt='Building 4 description.' width='100%' height='102px' onClick={(e) => this.setDescription(e)} />
            </div>
            <div className='building'>
              <img src='https://via.placeholder.com/300.png/ccc/fff' alt='Building 5 description.' width='100%' height='102px' onClick={(e) => this.setDescription(e)} />
            </div>
            <div className='building'>
              <img src='https://via.placeholder.com/300.png/ccc/fff' alt='Building 6 description.' width='100%' height='102px' onClick={(e) => this.setDescription(e)} />
            </div>
            <div className='building'>
              <img src='https://via.placeholder.com/300.png/ccc/fff' alt='Building 7 description.' width='100%' height='102px' onClick={(e) => this.setDescription(e)} />
            </div>
            <div className='building'>
              <img src='https://via.placeholder.com/300.png/ccc/fff' alt='Building 8 description.' width='100%' height='102px' onClick={(e) => this.setDescription(e)} />
            </div>
            <div className='building'>
              <img src='https://via.placeholder.com/300.png/ccc/fff' alt='Building 9 description.' width='100%' height='102px' onClick={(e) => this.setDescription(e)} />
            </div>
            <div className='building'>
              <img src='https://via.placeholder.com/300.png/ccc/fff' alt='Building 10 description.' width='100%' height='102px' onClick={(e) => this.setDescription(e)} />
            </div>
            <div className='building'>
              <img src='https://via.placeholder.com/300.png/ccc/fff' alt='Building 11 description.' width='100%' height='102px' onClick={(e) => this.setDescription(e)} />
            </div>
            <div className='building'>
              <img src='https://via.placeholder.com/300.png/ccc/fff' alt='Building 12 description.' width='100%' height='102px' onClick={(e) => this.setDescription(e)} />
            </div>
          </div>
          <div className='buildings-info-div'>
            <div className='building-description'>Press any building to see its description.</div>
            <div className='building-production'>
              <div className='production-points'>
                <h4>Production points</h4>
                <div className='production-pts'>Pts</div>
              </div>
              <div className='build-button button'>Build</div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Buildings;
