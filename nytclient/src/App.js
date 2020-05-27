import React, { Component } from 'react';
import './App.css';

class App extends Component {
  stete = {
    books: [],
    search: '',
    sort: '',
    error: null,
  }

  setSearch(search) {
    this.setState({
      search,
    })
  }

  setSor(sort) {
    this.setState({
      sort,
    })
  }

  render() {
    return (
      <div className="App">
      </div>
    )
  }
}

export default App;
