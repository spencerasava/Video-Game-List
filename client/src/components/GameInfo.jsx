import React from 'react'

class GameInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return(
      <div>
      <ul>
        <li>Hours Played: {this.props.game.hours_played}</li>
        <li>Completed: {this.props.game.completed === 1 ? 'yes' : 'no'}</li>
        <li>Platinum Trophy: {this.props.game.platinum === 1 ? 'yes' : 'no'}</li>
      </ul>
      </div>
    )
  }
}

export default GameInfo