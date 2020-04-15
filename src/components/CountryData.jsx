import React, { Component } from "react";

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
    const url = "https://corona.lmao.ninja/countries";
    fetch (url)
    .then(response => response.json())
    .then(jsondata => this.setState({
        data: jsondata
    })) 
    return this.state.data;
  };
  
  render() {
    const theCountries = this.state.data;
    console.log(theCountries)
    if (theCountries != null) { 
      for (let i = 0; i < theCountries.length; i++) {
        if (this.props.match.params.country === theCountries[i].country) {
          const matchedCountry = theCountries[i];
          return (
            <div> 
                {matchedCountry.country} COVID-19 DATA
                <div>
                  <img src={matchedCountry.countryInfo.flag}/>                  
                </div>
                <div>
                  Total Cases: {matchedCountry.cases}<br></br>
                  Total Deaths: {matchedCountry.deaths}<br></br>
                  Total Active Cases: {matchedCountry.active}<br></br>
                  Total Recoveries: {matchedCountry.recovered}
                </div>

            </div>
          )
        }
      }
    }
    return <div>Loading Data....</div>
  }
}

export default StateData;
