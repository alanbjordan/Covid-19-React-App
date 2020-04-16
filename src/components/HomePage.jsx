import React, { Component } from "react";
import './components.css'

class StateData extends Component {
  state = {
    state: [],
    cases: [],
    todayCases: [],
    deaths: [],
    todayDeaths: [],
    active: []
  };

  async componentDidMount() {
    const data = await this.generateState();
    this.setState({
      data
    });
  }

  generateState = async () => {
    const url = "https://corona.lmao.ninja/all";
    fetch (url)
    .then(response => response.json())
    .then(jsondata => this.setState({
        data: jsondata
    })) 
    return this.state.data;
  };
  
  render() {
    const theWorld = this.state.data;
    console.log(theWorld);
    const date = new Date('2019-04-01T00:30:00.000Z'); 
    if (theWorld != null) { 
        return (
            <div className="homePageWrapper">
                <div className="homePageStats">
                    <h2 className='title'>COVID-19 Worldwide DATA</h2>
                    Last Updated: {new Date().toLocaleString()}
                    <hr />
                    <div class="ui statistic">
                      <div className='label'>Total Cases: </div>
                      <div className='value'>{theWorld.cases}</div>
                      <div className='label'>Total Deaths: </div>
                      <div className='value'>{theWorld.deaths}</div>
                      <div className='label'>Recoveries: </div>
                      <div className='value'>{theWorld.recovered}</div>
                      <div className='label'>Active Cases: </div>
                      <div className='value'>{theWorld.active}</div>
                    </div>
                </div>
            </div>
        )
    }
    return (<div class="ui segment">
    <div class="ui active inverted dimmer">
      <div class="ui large text loader">Loading</div>
    </div>
    <p></p>
    <p></p>
    <p></p>
  </div>)
  }
}

export default StateData;
