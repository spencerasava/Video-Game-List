import React from 'react';
import axios from 'axios';
import GameList from './GameList.jsx';
import AddGameBar from './AddGameBar.jsx';
import SearchBar from './SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      games: [],
    }
    this.searchGames = this.searchGames.bind(this)
    this.getGameList = this.getGameList.bind(this)
  }

  componentDidMount() {

  }



  render() {
    return (
      <div>
        <h1 className='header'>Playstation 5 Game List!</h1>
        <button className='header' onClick={this.getGameList}>Refresh</button>
        <button>Add Game to Library</button>
        <SearchBar
          search={this.searchGames}
          getGames={this.getGameList}
        />
        <ul>
          {this.state.games.map(game => <GameList game={game} />)}
        </ul>
      </div>

    )
  }
}

// const App = (props) => (
//   <div>Hello World!</div>
// );

export default App;