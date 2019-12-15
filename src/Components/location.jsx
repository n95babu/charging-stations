import React from 'react'

class location extends React.Component {
  render() {
    return (
      <div className='form'>
        {/* <div className='input'>
          <form onSubmit=
            {this.props.handleSubmit}>

            <input type='text'
              value={this.props.userInputs}
              onChange={this.props.handleChnage}
              placeholder='Ev Charging Station'
            />
            <button id="myBtn">Search</button>
          </form>
        </div> */}
        <div>
          {this.props.location.map(station => (
            <div>
              <h1>{station.title}</h1>
              <p1>{station.vicinity}</p1>
            </div>

          )

          )}
        </div>

      </div>
    )
  }
}

export default location;