import React from 'react';
import axios from 'axios';
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
    this.getGames = this.getGames.bind(this);
  }

  componentDidMount() {
    // this.setState({
    //   games: exampleGameData,
    // })
    this.getGames();
    // console.log(this.state.games)
  }

  // componentDidUpdate(prevProps) {
  //   this.getGames();
  // }

  getGames() {
    axios.get('/games')
      .then(results => {
        // console.log(results.data);
        this.setState({games: results.data});
        // console.log(this.state.games)
      })
      // .catch(console.log);
  }

  // getGamesTitles() {
  //   axios.get('/games/titles')
  //     .then(results =>  console.log(results.data))
  // }




  render() {
    return (
      <div>
        <h1 className='header'>Video Game List!</h1>
        <button>Add Game to Library</button>
        <SearchBar />
        <ul>
          {this.state.games.map(game => <GameList game={game} />)}
        </ul>
        <AddGameBar getGames={this.getGames}/>
      </div>

    )
  }
}

// const App = (props) => (
//   <div>Hello World!</div>
// );

export default App;