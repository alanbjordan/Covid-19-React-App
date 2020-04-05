import React, { Component } from 'react';
import {
    Link,
  } from 'react-router-dom';

class AllStates extends Component {
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
        const url = "https://corona.lmao.ninja/states";
        fetch (url)
        .then(response => response.json())
        .then(jsondata => this.setState({
            data: jsondata
        })) 
        return this.state.data;
      };

    render() {
        if (this.state.data != 0) {
        const statesData = this.state.data;

            return (
                <div>
                    {statesData.map(element => (
                        <div key={element.state}>
                            {element.state} <br></br>
                            <Link to={`/states/${element.state}`}>Get Stats</Link>
                        </div>
                    ))}
                </div>
            )
        } else {
            return <div>Loading Data....</div>
        }        
    }
}

export default AllStates;