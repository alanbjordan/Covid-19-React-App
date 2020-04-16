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
            <div className='allStatesWrapper'> 
              <div class="ui breadcrumb">
                <a href='/' class="section">Home</a>
                <i class="right chevron icon divider"></i>
                <a href='/country' class="section">Country</a>
                <i class="right chevron icon divider"></i>
                <div class="active section">{this.props.match.params.country}<br></br></div>
              </div> 
              <div>
                {matchedCountry.country} COVID-19 DATA                
              </div>
              <div class="ui centered card">
              <div class="image">
              <img src={matchedCountry.countryInfo.flag}/>  
              </div>
              <div class="content">
                Total Cases: {matchedCountry.cases}<br></br>
                Total Deaths: {matchedCountry.deaths}<br></br>
                Total Active Cases: {matchedCountry.active}<br></br>
                Total Recoveries: {matchedCountry.recovered}
              </div>
            </div>
            </div>
          )
        }
      }
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
