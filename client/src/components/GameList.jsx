import React from 'react'
import axios from 'axios'
import GameInfo from './GameInfo.jsx'

class GameList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showInfo: false,
    }
    this.onTitleClick = this.onTitleClick.bind(this)
  }

  onTitleClick () {
    this.setState({
      showInfo: !this.state.showInfo,
    })
  }

  render() {
    return (
      <div>
        <li className='title' onClick={this.onTitleClick}>{this.props.game.title}</li>
        <div>
        {this.state.showInfo
        ? <GameInfo game={this.props.game}/>
        : null}

        </div>
      </div>
    )
  }
}

export default GameList