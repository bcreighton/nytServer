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
      <main className="App">
        <h1>NYT Best Sellers</h1>
        <div className='search'>
          <form onSubmit={e => this.handleSubmit(e)}>
            <label htmlFor='search'>Search: </label>
            <input
              type='text'
              id='search'
              name='search'
              value={this.state.search}
              onChcnage={e => this.setSearch(e.target.value)}
            />

            <label htmlFor='sort'>Sort: </label>
            <select
              id='sort'
              name='sort'
              onChange={e => this.setSort(e.target.value)}
            >
              <option value=''>None</option>
              <option value='title'>Title</option>
              <option value='rank'>Rank</option>
            </select>
            <button type='submit'>Search</button>
          </form>

          <div className='App_error'>{this.state.error}</div>
        </div>
        {books}
      </main>
    )
  }
}

export default App;
