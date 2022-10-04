import React, {Component, Fragment } from 'react';

class FirstEra extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <div className='first-era eras'>
          <div className='date'>
            <h4>Date</h4>
            <div className='roman-date'>i</div>
          </div>
          <div className='first-era-techs era-techs'>
            <div className='fishing-techs'></div>
            <div className='hunting-techs'>
              <div className='primitive-hunting'>
                <img id='primitive-hunting' src='https://via.placeholder.com/300.png/ccc/fff' alt='Primitive hunting description. Requirements: primitive hunting requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
              <div className='spear-hunting'>
                <img id='spear-hunting' src='https://via.placeholder.com/300.png/ccc/fff' alt='Spear hunting description. Requirements: spear hunting requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
            </div>
            <div className='farming-techs'>
              <div className='primitive-farming built'>
                <img id='primitive-farming' src='https://via.placeholder.com/300.png/ccc/fff' alt='Primitive farming description. Requirements: primitive farming requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
              <div className='cultivation'>
                <img id='cultivation' src='https://via.placeholder.com/300.png/ccc/fff' alt='cultivation description. Requirements: cultivation requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
            </div>
            <div className='population-techs'>
              <div className='mudbrick-construction'>
                <img id='mudbrick-construction' src='https://via.placeholder.com/300.png/ccc/fff' alt='mudbrick construction description. Requirements: mudbrick construction requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
            </div>
            <div className='mining-techs'>
              <div className='advanced-stone-tools'>
                <img id='advanced-stone-tools' src='https://via.placeholder.com/300.png/ccc/fff' alt='Advanced stone tools description. Requirements: advanced stone tools requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
              <div className='advanced-stone-weapons'>
                <img id='advanced-stone-weapons' src='https://via.placeholder.com/300.png/ccc/fff' alt='Advanced stone weapons description. Requirements: advanced stone weapons requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
              <div className='mining'>
                <img id='mining' src='https://via.placeholder.com/300.png/ccc/fff' alt='Mining description. Requirements: mining requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
            </div>
            <div className='lore-techs'>
              <div className='meeting-of-tulkas'>
                <img id='meeting-of-tulkas' src='https://via.placeholder.com/300.png/ccc/fff' alt='Meeting of Tulkas description. Requirements: meeting of Tulkas requirements' width='29px' height='29px' onClick={(e) => this.props.setDescription(e)}/>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default FirstEra;
