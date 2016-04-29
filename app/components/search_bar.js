import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component{
        
    render() {
        console.log('Render: SearchBar');
        
        return <input onChange={ this.onInputChange } />
    }
    
    onInputChange(event){
        console.log(event.target.value);
    }
}

export default SearchBar;
