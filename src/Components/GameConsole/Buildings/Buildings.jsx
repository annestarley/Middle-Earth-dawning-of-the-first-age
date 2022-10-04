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

    let divs = document.querySelectorAll('.building');
    divs.forEach(div => {
      e.target.id == div.id ? (div.classList.contains('selected') ? console.log('selected') : div.classList.add('selected')) : (div.classList.contains('selected') ? div.classList.remove('selected') : console.log('unselected'));
    })
  }

  render() {
    return (
      <Fragment>
        <ExitButton exit={() => this.props.exit()} />
        <div className='buildings-console'>
          <div className='buildings-div'>
            <div className='building' id="building1">
              <img src='https://via.placeholder.com/300.png/ccc/fff' id="building1" alt='Building 1 description.' width='100%' height='100px' onClick={(e) => this.setDescription(e)} />
            </div>
            <div className='building' id="building2">
              <img src='https://via.placeholder.com/300.png/ccc/fff' id="building2" alt='Building 2 description.' width='100%' height='100px' onClick={(e) => this.setDescription(e)} />
            </div>
            <div className='building' id="building3">
              <img src='https://via.placeholder.com/300.png/ccc/fff' id="building3" alt='Building 3 description.' width='100%' height='100px' onClick={(e) => this.setDescription(e)} />
            </div>
            <div className='building' id="building4">
              <img src='https://via.placeholder.com/300.png/ccc/fff' id="building4" alt='Building 4 description.' width='100%' height='100px' onClick={(e) => this.setDescription(e)} />
            </div>
            <div className='building' id="building5">
              <img src='https://via.placeholder.com/300.png/ccc/fff' id="building5" alt='Building 5 description.' width='100%' height='100px' onClick={(e) => this.setDescription(e)} />
            </div>
            <div className='building' id="building6">
              <img src='https://via.placeholder.com/300.png/ccc/fff' id="building6" alt='Building 6 description.' width='100%' height='100px' onClick={(e) => this.setDescription(e)} />
            </div>
            <div className='building' id="building7">
              <img src='https://via.placeholder.com/300.png/ccc/fff' id="building7" alt='Building 7 description.' width='100%' height='100px' onClick={(e) => this.setDescription(e)} />
            </div>
            <div className='building' id="building8">
              <img src='https://via.placeholder.com/300.png/ccc/fff' id="building8" alt='Building 8 description.' width='100%' height='100px' onClick={(e) => this.setDescription(e)} />
            </div>
            <div className='building' id="building9">
              <img src='https://via.placeholder.com/300.png/ccc/fff' id="building9" alt='Building 9 description.' width='100%' height='100px' onClick={(e) => this.setDescription(e)} />
            </div>
            <div className='building' id="building10">
              <img src='https://via.placeholder.com/300.png/ccc/fff' id="building10" alt='Building 10 description.' width='100%' height='100px' onClick={(e) => this.setDescription(e)} />
            </div>
            <div className='building' id="building11">
              <img src='https://via.placeholder.com/300.png/ccc/fff' id="building11" alt='Building 11 description.' width='100%' height='100px' onClick={(e) => this.setDescription(e)} />
            </div>
            <div className='building' id="building12">
              <img src='https://via.placeholder.com/300.png/ccc/fff' id="building12" alt='Building 12 description.' width='100%' height='100px' onClick={(e) => this.setDescription(e)} />
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
