import React, {Component, Fragment } from 'react';

class ThirdEra extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <div className='third-era'>
          <div className='date'>
            <h4>Date</h4>
            <div className='roman-date'>iii</div>
          </div>
          <div className='first-era-techs era-techs'>
            <div className='fishing-techs'>
              <div className='sail'>
                <img id='sail' src='https://via.placeholder.com/300.png/ccc/fff' alt='Sail description. Requirements: sail requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
            </div>
            <div className='hunting-techs'>
              <div className='animal-breeding'>
                <img id='animal-breeding' src='https://via.placeholder.com/300.png/ccc/fff' alt='Animal breeding description. Requirements: animal breeding requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
            </div>
            <div className='farming-techs'>
              <div className='plow'>
                <img id='plow' src='https://via.placeholder.com/300.png/ccc/fff' alt='Plow description. Requirements: plow requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
              <div className='currency'>
                <img id='currency' src='https://via.placeholder.com/300.png/ccc/fff' alt='Currency description. Requirements: currency requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
              <div className='writing'>
                <img id='writing' src='https://via.placeholder.com/300.png/ccc/fff' alt='Writing description. Requirements: writing requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
              <div className='code-of-law'>
                <img id='code-of-law' src='https://via.placeholder.com/300.png/ccc/fff' alt='Code of law description. Requirements: code of law requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
              <div className='city-planning'>
                <img id='city-planning' src='https://via.placeholder.com/300.png/ccc/fff' alt='City planning description. Requirements: city planning requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
            </div>
            <div className='population-techs'>
              <div className='megastructure' id="megastructure-div">
                <img id='megastructure' src='https://via.placeholder.com/300.png/ccc/fff' alt='Megastructure description. Requirements: megastructure requirements' width='39px' height='39px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
            </div>
            <div className='mining-techs'>
              <div className='bronze-working'>
                <img id='bronze-working' src='https://via.placeholder.com/300.png/ccc/fff' alt='Bronze working description. Requirements: sail requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
              <div className='riding'>
                <img id='riding' src='https://via.placeholder.com/300.png/ccc/fff' alt='Riding description. Requirements: riding requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
              <div className='bronze-weapons'>
                <img id='bronze-weapons' src='https://via.placeholder.com/300.png/ccc/fff' alt='Bronze weapons description. Requirements: bronze weapons requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
            </div>
            <div className='lore-techs'>
              <div className='valar'>
                <img id='valar' src='https://via.placeholder.com/300.png/ccc/fff' alt='Valar description. Requirements: valar working requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ThirdEra;
