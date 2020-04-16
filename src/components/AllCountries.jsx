import React, { Component } from 'react';
import {
    Link,
  } from 'react-router-dom';

class AllCountries extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    } 

    async componentDidMount() {
        const data = await this.generateStates();
        this.setState({
          data
        });
      }
    
      generateStates = async () => {
        const url = "https://corona.lmao.ninja/countries";
        fetch (url)
        .then(response => response.json())
        .then(jsondata => this.setState({
            data: jsondata
        })) 
        return this.state.data;
      };

    render() {
        const country = this.state.data;
        if (country != null) {
          console.log(country);
          return (
            <div className='allCountriesWrapper'>
                <div class="ui breadcrumb">
                  <a href='/' class="section">Home</a>
                  <i class="right chevron icon divider"></i>
                  <div class="active section">Country</div>
                </div>
                <h1>Global COVID-19 Data</h1> 
              <div className='allStates'>
                <table className='ui selectable celled table'>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Total Cases</th>
                            <th>Today's Cases</th>
                            <th>Total Deaths</th>
                            <th>Today's Deaths</th>
                            <th>Recoveries</th>
                            <th>Active Cases</th>
                            <th>Critical Cases</th>
                            <th>Total Tests</th>
                        </tr>
                    </thead>
                    <tbody>
                        {country.map(element => (
                            <tr key={element.country}>
                                <td>{element.country}  <Link to={`/country/${element.country}`}> more info</Link></td>
                                <td>{element.cases}</td>
                                <td>{element.todayCases}</td>
                                <td>{element.deaths}</td>
                                <td>{element.todayDeaths}</td>
                                <td>{element.recovered}</td>
                                <td>{element.active}</td>
                                <td>{element.critical}</td>
                                <td>{element.tests}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
              </div> 
            </div>
          )
        }
        return (
      <div class="ui segment">
        <div class="ui active inverted dimmer">
          <div class="ui large text loader">Loading</div>
        </div>
        <p></p>
        <p></p>
        <p></p>
      </div>)
    }
}

export default AllCountries;