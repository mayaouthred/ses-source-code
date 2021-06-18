import React, {Component} from 'react';

interface SearchComponentProps {
    onInputChange(query: string): void; //updates App.tsx when the query changes
    onRangeChange(number: any): void; //updates App.tsx when the page range changes
}

interface SearchComponentState {
    text: any; //text input by the user
    dropdownOptions: any[]; //options for the number of results per page
    numResults: number; //current number of results per page
}

/**
 * A search bar that receives the user's query.
 */
class SearchComponent extends Component<SearchComponentProps, SearchComponentState> {

    MAX_RESULTS_PER_PAGE: number = 5;

    constructor(props: any) {
        super(props);
        this.state = {
            text: "What movie are you thinking of?",
            dropdownOptions: this.setDropdownOptions(),
            numResults: 1
        }
    }

    //Update the state to reflect the new search text.
    onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            text: event.target.value
        });
    }

    //Update the state to reflect the new results page range.
    onRangeInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            numResults: parseInt(event.target.value)
        });
        this.props.onRangeChange(event.target.value);
    }

    //Updates App.tsx with the new query.
    onButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        this.props.onInputChange(this.state.text);
    }


    setDropdownOptions = (): any[] => {
        let options: any[] = [];
        for (let i = 1; i <= this.MAX_RESULTS_PER_PAGE; i++) {
            options.push(<option value={i}>{i*10}</option>);
        }
        return options;
    }

    render() {
        return (
            <div className='inline-display'>
                    <input id="search-bar"
                        value={this.state.text}
                        onChange={this.onSearchInputChange}
                        type="text"
                        />
                <button className="search-button" onClick={this.onButtonClick}>Search</button>
                <p>Results per page: <select value={this.state.numResults} onChange={this.onRangeInputChange}>{this.state.dropdownOptions}</select></p>
            </div>
        )
    }





}

export default SearchComponent;