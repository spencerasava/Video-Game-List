import React from 'react'
import axios from 'axios'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: ''
    }
  }



  render() {
    return (
      <form className='bar'>
        <input
          type='text'
          value={this.state.searchText}
          onChange={(e)=> {
            // this.props.getGames()
            this.setState({searchText: (e.target.value)})
            this.props.search(e.target.value)
          }}
        ></input>
        <button>Search Games</button>
      </form>
    )
  }
}

export default SearchBar