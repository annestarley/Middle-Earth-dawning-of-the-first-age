import React, {Component, Fragment } from 'react';

class SecondEra extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <div className='second-era'>
          <div className='date'>
            <h4>Date</h4>
            <div className='roman-date'>ii</div>
          </div>
          <div className='first-era-techs era-techs'>
            <div className='fishing-techs'>
              <div className='boat'>
                <img id='boat' src='https://via.placeholder.com/300.png/ccc/fff' alt='Boat description. Requirements: boat requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
              <div className='oar'>
                <img id='oar' src='https://via.placeholder.com/300.png/ccc/fff' alt='Oar description. Requirements: oar requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
            </div>
            <div className='hunting-techs'>
              <div className='animal-medicine'>
                <img id='animal-medicine' src='https://via.placeholder.com/300.png/ccc/fff' alt='Animal medicine description. Requirements: animal medicine requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
            </div>
            <div className='farming-techs'>
              <div className='irrigation'>
                <img id='irrigation' src='https://via.placeholder.com/300.png/ccc/fff' alt='Irrigation description. Requirements: irrigation requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
              <div className='bread'>
                <img id='bread' src='https://via.placeholder.com/300.png/ccc/fff' alt='Bread description. Requirements: bread requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
              <div className='trade'>
                <img id='trade' src='https://via.placeholder.com/300.png/ccc/fff' alt='Trade description. Requirements: trade requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
            </div>
            <div className='population-techs'>
              <div className='stone-brick-construction'>
                <img id='stone-brick-construction' src='https://via.placeholder.com/300.png/ccc/fff' alt='Stone brick construction description. Requirements: stone brick construction requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
            </div>
            <div className='mining-techs'>
              <div className='copper-working'>
                <img id='copper-working' src='https://via.placeholder.com/300.png/ccc/fff' alt='Copper working description. Requirements: copper working requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
              <div className='copper-weapons'>
                <img id='copper-weapons' src='https://via.placeholder.com/300.png/ccc/fff' alt='Copper weapons description. Requirements: copper weapons requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
              <div className='metallurgy'>
                <img id='metallurgy' src='https://via.placeholder.com/300.png/ccc/fff' alt='Metallurgy description. Requirements: metallurgy requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
            </div>
            <div className='lore-techs'>
              <div className='lore'>
                <img id='lore' src='https://via.placeholder.com/300.png/ccc/fff' alt='Lore description. Requirements: lore requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default SecondEra;
