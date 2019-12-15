import React, { Component } from 'react';
import './App.css';
import { fetchLocations, fethRandomBathrooms } from './Services/Server';
import Location from './Components/location';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInputs: '',
      location: [],
      title: ''
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
    const All = await fethRandomBathrooms(this.state.userInputs)
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
        <h1>Testing App</h1>
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
