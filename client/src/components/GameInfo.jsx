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
        <li>Platform: {this.props.game.platform}</li>
        <li>Completed: {this.props.game.completed}</li>
      </ul>
      </div>
    )
  }
}

export default GameInfo