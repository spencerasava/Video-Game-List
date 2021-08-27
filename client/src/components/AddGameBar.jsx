import React from 'react'
import axios from 'axios'

class AddGameBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <form className='bar'>
        <input></input>
        <button>Add Game</button>
      </form>
    )
  }
}

export default AddGameBar