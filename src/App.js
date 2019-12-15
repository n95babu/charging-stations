import React, { Component } from 'react';
import './App.css';
import { fetchLocations } from './Services/Server';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      location: [],

    }
  }
  componentDidMount = async () => {
    const data = await fetchLocations();
    this.setState({
      location: data,
    });
  }

  render() {
    return (
      <div className='App'>
        <h1>Testing App</h1>
      </div>
    )
  }
}


export default App;
