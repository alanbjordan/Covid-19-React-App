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
    if (theWorld != null) { 
        return (
            <div className="homePageWrapper">
                <div className="homePageStats">
                    <h2>Worldwide Statistics</h2>
                    <h3>Total Cases: </h3>{theWorld.cases}
                    <h3>Today's Cases: </h3>{theWorld.todayCases}
                    <h3>Total Deaths: </h3>{theWorld.deaths}
                    <h3>Today's deaths: </h3>{theWorld.todayDeaths}
                    <h3>Recoveries: </h3>{theWorld.recovered}
                    <h3>Active Cases: </h3>{theWorld.active}
                    <h3>Critical Cases: </h3>{theWorld.critical}
                    <h3>Cases Per One Million: </h3>{theWorld.casesPerOneMillion}
                    <h3>Deaths Per One Million: </h3>{theWorld.deathsPerOneMillion}
                    <h3>Updated Cases: </h3>{theWorld.updated}
                    <h3>Affected Countries: </h3>{theWorld.affectedCountries}
                </div>
            </div>
        )
    }
    return <div>Loading Data....</div>
  }
}

export default StateData;
