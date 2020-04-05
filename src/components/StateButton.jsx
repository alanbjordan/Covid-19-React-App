import React from 'react';

const StateButton = () => {

    return (
        <div>
            <h2>Select Your State</h2>
            <p>{this.state.thestate}</p>
            <form onChange={(e) => this.setState({ thestate: e.target.value })}>
            <select>
                {this.state.theData.map(element => 
                <option key={element.state} value={element.state}>{element.state}</option>
                )}
            </select>
            <input type="submit" onClick={this.handleClick} />
            </form>
        </div>
    )
} 

export default StateButton;