import React from 'react'

class location extends React.Component {
  render() {
    return (
      <div className='form'>
        <div className='input'>
          <form onSubmit=
            {this.props.handleSubmit}>

            <input
              value={this.props.userInputs}
              onChange={this.props.handleChange}
              placeholder='Ev Charging Station'
            />
            <button id="myBtn">Search</button>
          </form>
        </div>
        <div>
          {this.props.location.map((station) => (
            <div>
              <div key={station.id}>

                {/* {console.log(station.id)} */}

                <h1>{station.title}</h1>
                <p>{station.vicinity}</p>
                <p>Lat: {station.position[0]}</p>
                <p>Lon: {station.position[1]}</p>

              </div>
            </div>


          ))}
        </div>
        {/* {console.log(this.station.position)} */}
      </div>
    )
  }
}


export default location;