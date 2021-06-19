import React, {Component} from 'react';
import Selection from './Selection';

interface ResultComponentProps {
    title: string, //the title the user wants to search for
    numResults: number //the number of API pages per page of user results
}

interface ResultComponentState {
    results: any; //a formatted list of ten or less buttons with the titles of the result's movies
    totalResults: number; //number of total results for the search
    pageNumber: number; //the page number the results came from
    selectedTitle: string; //the title the movie the user has selected
    selectedID: string; //the ID of the movie the user has selected
}

class ResultComponent extends Component<ResultComponentProps, ResultComponentState> {

    constructor(props: any) {
        super(props);
        this.state = {
            results: [],
            totalResults: 0,
            pageNumber: 0,
            selectedTitle: "Iron Man",
            selectedID: "tt0371746"
        }
    }

    componentDidMount() {
        this.getMovieData();
    }

    //If title changed, reset page number and request data. If page number changed, re-request the data.
    componentDidUpdate(prevProps: any, prevState: any) {
        if (this.props.title !== prevProps.title || this.props.numResults !== prevProps.numResults) {
            this.setState({
                pageNumber: 0,
            }, () => {
                this.getMovieData();
            });
        } else if (this.state.pageNumber !== prevState.pageNumber) {
            this.getMovieData();
        }

    }

    //Makes a query to the API using this.props.title and this.state.pageNumber. Sets this.state.results and
    // this.state.numResults accordingly.
    async getMovieData() {
        try {
            let apiPageNumber: number = this.state.pageNumber * this.props.numResults + 1;
            let titles: any[] = [];

            for (let i: number = apiPageNumber; i < Number(apiPageNumber) + Number(this.props.numResults); i++) {
                console.log(i);

                //Request a list of movies from the API.
                let response = await fetch("https://www.omdbapi.com/?s=" + encodeURI(this.props.title)
                    +"&page="+ i +"&apikey=fa79688c");
                if (!response.ok) {
                    alert("Bad status: " + response.status);
                    return;
                }
                let result = await response.json();

                //If the response has search results, format into a list of button elements with the imdbID as the key.
                //Update state with the total number of results accordingly.
                if (result.Response === "True") {
                    let movieTitles: any[] = result.Search;
                    let parsedResult = movieTitles.map(movie => (
                        <li className="title-button">
                            <button onClick={this.onTitleButtonClick} key={movie.imdbID}
                                    value={movie.imdbID}><b>{movie.Title}</b></button>
                        </li>
                    ));
                    titles = titles.concat(parsedResult);

                    this.setState({
                        totalResults: result.totalResults
                    });

                    //If this is the last page of results, exit.
                    if ((i+1)*10 > result.totalResults) {
                        break;
                    }

                } else {
                    //Otherwise, indicate that the search was unsuccessful and exit.
                    titles = [<li>I'm sorry, I couldn't find anything for that search.</li>];
                    this.setState({
                        totalResults: 0
                    });
                    break;
                }
            }

            this.setState({
                results: titles,
            });


        } catch (e) {
            alert("There was a problem connecting with the server.")
            console.log(e);
        }
    }

    //Increment this.state.pageNumber by one.
    onNextButtonClick = () => {
        if (Math.ceil(this.state.totalResults / (this.props.numResults * 10) - 1) > this.state.pageNumber) {
            let temp: number = this.state.pageNumber + 1;
            this.setState({
                pageNumber: temp
            })
        }

    }

    //Decrement the this.state.pageNumber by one.
    onPrevButtonClick = () => {
        if (this.state.pageNumber > 0) {
            let temp: number = this.state.pageNumber - 1;
            this.setState({
                pageNumber: temp
            })
        }
    }

    //Update which movie title is currently selected.
    onTitleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        this.setState({
            selectedTitle: event.currentTarget.innerText,
            selectedID: event.currentTarget.value
        })
    }

    render() {
        return (
            <div className='inline-display'>
                <div id="titles-list">
                    <ul className="titles">{this.state.results}</ul>

                    <div id="pagination">
                    <button className='search-button' onClick={this.onPrevButtonClick}>Previous page</button>
                    <button className='search-button' onClick={this.onNextButtonClick}>Next page</button>
                    <p>Currently displaying results {(this.state.pageNumber+1)*this.props.numResults*10-(this.props.numResults*10-1)} through {Math.min((this.state.pageNumber+1)*this.props.numResults*10,
                        this.state.totalResults)} of {this.state.totalResults}</p>
                    </div>
                </div>

                <Selection title={this.state.selectedTitle} id={this.state.selectedID}/>


            </div>
        )

    }

}

export default ResultComponent;