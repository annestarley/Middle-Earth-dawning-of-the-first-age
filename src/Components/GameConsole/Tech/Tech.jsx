import React, {Component, Fragment } from 'react';
import ExitButton from '../ExitButton';
import FirstEra from './Eras/FirstEra';
import SecondEra from './Eras/SecondEra';
import ThirdEra from './Eras/ThirdEra';
import TechInfo from './TechInfo';

class Techs extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.setDescription = this.setDescription.bind(this);
  }

  setDescription (e) {
    let title = document.querySelector('.tech-description > .title')
    let description = document.querySelector('.tech-description > .description');
    let requirements = document.querySelector('.tech-description > .requirements');

    let newTitle = e.target.id.split('-').join(' ');
    let alt = e.target.alt.split('Requirements:');
    let newDescription = alt[0];
    let newRequirements = '';
    if (alt.length > 0) newRequirements = `Requirements: ${alt[1]}`;

    document.querySelector('.tech-description .description').innerText = newDescription;
    document.querySelector('.tech-description .title').innerText = newTitle;
    document.querySelector('.tech-description .requirements').innerText = newRequirements;

    let divs = document.querySelectorAll('.era-techs > div > div');
    divs.forEach(div => {
      e.target.id == div.childNodes[0].id ? (div.classList.contains('selected') ? console.log('selected') : div.classList.add('selected')) : (div.classList.contains('selected') ? div.classList.remove('selected') : console.log('unselected'));
    })
  }

  render() {
    return (
      <Fragment>
        <ExitButton exit={() => this.props.exit()} />
        <div className='tech-console'>
          <div className='techs-div'>
            <FirstEra setDescription={(e) => this.setDescription(e)} />
            <SecondEra setDescription={(e) => this.setDescription(e)} />
            <ThirdEra setDescription={(e) => this.setDescription(e)} />
          </div>
          <TechInfo />
        </div>
      </Fragment>
    )
  }
}

export default Techs;
