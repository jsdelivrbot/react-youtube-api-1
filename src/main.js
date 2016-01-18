import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';  // Youtube API Search
import {API_KEY} from '../keys';
import SearchBar from './components/search_bar';  // from components file

// Search response

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({
      key: API_KEY, term: 'books'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
