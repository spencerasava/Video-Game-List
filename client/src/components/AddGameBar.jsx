import React from 'react'
import axios from 'axios'

class AddGameBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      platform: '-',
      completed: '-',
    }
  }
  render() {
    return (
      <form className='bar'>
        <input value={this.state.title} onChange={(e) => {this.setState({title: event.target.value})}}></input>
        <select value={this.state.platform} onChange={(e) => {this.setState({platform: event.target.value})}}>
          <option value="-">-</option>
          <option value="Playstation">Playstation</option>
          <option value="Xbox">Xbox</option>
          <option value="PC">PC</option>
          <option value="Multiple">Multiple</option>
        </select>
        <select value={this.state.completed} onChange={(e) => {this.setState({completed: event.target.value})}}>
          <option value="-">-</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <button>Add Game</button>
      </form>
    )
  }
}

export default AddGameBar