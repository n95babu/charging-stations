import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl';
import Geocoder from 'react-mapbox-gl-geocoder';
// import MapboxDirections from 'mapbox-gl-directions';
import Locations from './location';

const mapAccess = {
  mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

}
// console.log(mapAccess.mapboxApiAccessToken)
const queryParams = {
  country: 'us'
}

class Map extends React.Component {

  state = {
    viewport: {
      width: '100%',
      height: 400,
      latitude: 43.0731,
      longitude: -89.4012,
      zoom: 8

    }
  };

  onSelected = (viewport, item) => {
    this.setState({ viewport });
    console.log('Selected: ', item)
  }

  render() {


    const { viewport, searchResultLayer } = this.state
    let numm = this.props.position
    console.log(numm)
    console.log(this.props.position)


    return (
      <>
        <Geocoder
          mapboxApiAccessToken='pk.eyJ1IjoibmJhYnUxMjEiLCJhIjoiY2p4aWc5NnczMGk1eDNucDR5YWQ2dThnciJ9.RcVy9Ye2rTcayW3BfWr0YA' onSelected={this.onSelected} viewport={viewport} hideOnSelect={true}
          queryParams={queryParams}
        />

        <ReactMapGL
          mapboxApiAccessToken='pk.eyJ1IjoibmJhYnUxMjEiLCJhIjoiY2p4aWc5NnczMGk1eDNucDR5YWQ2dThnciJ9.RcVy9Ye2rTcayW3BfWr0YA'
          mapStyle="mapbox://styles/nbabu121/cjxlzp3ld17or1cmsl17fh34n"
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({ viewport })
          }
        />
        {/* 
        {this.props.position.map(lat => (
          <Marker
            key={lat.properties.id}
            latitude={lat.geometry.coordinates[1]}
            longitude={lat.geometry.coordinates[1]}
          ></Marker>
        ))} */}
      </>
    );

  }
}

export default Map;