import React, {Component, Fragment } from 'react';

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  totalPop = (this.props.settlement.population.number + this.props.settlement.lore.num + this.props.settlement.farming.num + this.props.settlement.fishing.num + this.props.settlement.meadows.num);
  foodGrowth =  (this.props.settlement.farming.effect*this.props.settlement.farming.multiplier*this.props.settlement.farming.num)
                +(this.props.settlement.meadows.effect*this.props.settlement.meadows.multiplier*this.props.settlement.meadows.num)
                +(this.props.settlement.fishing.effect*this.props.settlement.fishing.multiplier*this.props.settlement.fishing.num)
                -this.totalPop;

  render() {
    return (
      <Fragment>
        <div className='nav-bar top-nav'>
          <div className='nav-bar-item year stats'>
            <div id='year' className='single-line-item'>YT {this.props.turn+1050}</div>
          </div>
          <div className='nav-bar-item population stats'>
            <div id='pop-limit'>
              <span id='pop'>{this.totalPop}</span>
              <span>/</span>
              <span id='limit'>{this.props.settlement.population.limit}</span>
            </div>
            <div id='pop-growth'>{Math.round((this.foodGrowth/20)*10)/10}</div>
          </div>
          <div className='nav-bar-item food stats'>
            <div className='food-growth' className='single-line-item'>{Math.round(this.foodGrowth*100)/100}</div>
          </div>
          <div className='nav-bar-item production stats'>
            <div id='total-prod'>total prod</div>
            <div id='prod-growth'>+prod</div>
          </div>
          <div className='nav-bar-item lore stats'>
            <div id='total-lore'>total lore</div>
            <div id='lore-growth'>+lore</div>
          </div>
          <div className='nav-bar-item threat stats'>
            <div id='threat' className='single-line-item'>threat %</div>
          </div>
          <div className='nav-bar-item info info-button' id='info' onClick={(e) => this.props.setConsole(e)}>+</div>
        </div>
      </Fragment>
    )
  }
}

export default TopNav;
