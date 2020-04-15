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
    const date = new Date('2019-04-01T00:30:00.000Z'); // Date in JSON format in UTC
    if (theWorld != null) { 
        return (
            <div className="homePageWrapper">
                <div className="homePageStats">
                    <h2 className='title'>COVID-19 Worldwide DATA</h2>
                    Last Updated: {new Date().toLocaleString()}
                    <h3 className='dataHome'>Total Cases: </h3>{theWorld.cases}
                    <h3 className='dataHome'>Total Deaths: </h3>{theWorld.deaths}
                    <h3 className='dataHome'>Recoveries: </h3>{theWorld.recovered}
                    <h3 className='dataHome'>Active Cases: </h3>{theWorld.active}
                </div>
            </div>
        )
    }
    return <div>Loading Data....</div>
  }
}

export default StateData;
