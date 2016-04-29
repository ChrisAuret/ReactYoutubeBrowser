import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = '';

///
/// Main App Component
///
class App extends Component{
    constructor(props) {
        super(props);
        
        // this.setState = { videos: [] }; 
        // YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
        //     this.setState({ videos });
        // }); 
    }
    
    render()  {
        return (
            <div>
                input: <SearchBar />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));