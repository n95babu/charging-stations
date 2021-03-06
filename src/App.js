import React, { Component } from 'react';
import './App.css';
import { fetchLocations, fethLocation } from './Services/Server';
import Location from './Components/location';
import Map from './Components/Map';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInputs: '',
      location: [],
      title: '',
      position: ''
    }
  }
  componentDidMount = async () => {
    const data = await fetchLocations();
    this.setState({
      location: data,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const All = await fethLocation(this.state.userInputs)
    this.setState({
      userInputs: All
    });
  };

  handleChange = (e) => {
    this.setState({
      userInputs: e.target.value
    });
  };

  render() {
    return (
      <div className='App'>
        <h3>Nav Will Go here </h3>
        <h1>Welcome</h1>
        <Map
          position={this.state.position}
        />
        <Location
          userInputs={this.state.userInputs}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          location={this.state.location}
        />
      </div>
    )
  }
}


export default App;
