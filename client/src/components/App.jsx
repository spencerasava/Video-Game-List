import React from 'react';
import GameList from './GameList.jsx';
import AddGameBar from './AddGameBar.jsx';
import SearchBar from './SearchBar.jsx';
import exampleGameData from '../data/exampleGameData.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      games: [],
    }
  }

  componentDidMount() {
    this.setState({
      games: exampleGameData,
    })
  }



  render() {
    return (
      <div>
        <h1 className='header'>Video Game List!</h1>
        <button>Add Game to Library</button>
        <SearchBar />
        <ul>
          {this.state.games.map(game => <GameList game={game} />)}
        </ul>
        <AddGameBar />
      </div>

    )
  }
}

// const App = (props) => (
//   <div>Hello World!</div>
// );

export default App;