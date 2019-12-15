import React from 'react'
import ReactMapGL from 'react-map-gl';

class Map extends React.Component {

  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 40.730610,
      longitude: -73.935242,
      zoom: 8
    }
  };

  render() {
    return (
      <ReactMapGL
        mapboxApiAccessToken='pk.eyJ1IjoibmJhYnUxMjEiLCJhIjoiY2p4aWc5NnczMGk1eDNucDR5YWQ2dThnciJ9.RcVy9Ye2rTcayW3BfWr0YA'
        mapStyle="mapbox://styles/nbabu121/cjxlzp3ld17or1cmsl17fh34n"


        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({ viewport })}
      />
    );
  }
}

export default Map;