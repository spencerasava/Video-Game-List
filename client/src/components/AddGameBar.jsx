import React from 'react';
import axios from 'axios';

class AddGameBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      platform: '-',
      completed: '-',
    }
    this.postNewGame = this.postNewGame.bind(this);
  }


  handlePost = (event) => {
    event.preventDefault()
    this.postNewGame()
  }

  postNewGame = (event) => {
    event.preventDefault();
    axios.post('/games', {
      title: this.state.title,
      platform: this.state.platform,
      completed: this.state.complete === "Yes" ? true : false,
    }).then(response => {
      console.log(response);
      this.props.getGames();
    })
      .catch(error => console.log(error))
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
        <button onClick={this.postNewGame}>Add Game</button>
      </form>
    )
  }
}

export default AddGameBar