import React, {Component} from 'react';
import './App.css';
import SearchComponent from './SearchComponent';
import ResultComponent from "./ResultComponent";


interface AppState {
    query: string; //search input by the user
    numResults: number; //number of results per page
}

/**
 * A movie database that searches for movies based on the user's query and allows them to
 * select titles the results to get more information. The query flows from SearchComponent to
 * App to ResultComponent. The selected title flows from ResultComponent to Selection.
 *
 * Defaults to showing information about Iron Man.
 */
class App extends Component<{}, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
        query: "Iron Man",
        numResults: 1
    };
  }

  //Update this.state with new query text.
  updateQuery = (newQuery: string) => {
    this.setState({
        query: newQuery,
    });
  }

  //Updates this.state with new range of search results.
  updateRange = (newRange: any) => {
      this.setState({
          numResults: newRange
      });
  }

  render() {
    return (
        <div>
          <h1 id='heading'>Movie Metadata</h1>
          <SearchComponent onInputChange={this.updateQuery} onRangeChange={this.updateRange}/>
          <ResultComponent title={this.state.query} numResults={this.state.numResults}/>
        </div>
    )
  }

}

export default App;
