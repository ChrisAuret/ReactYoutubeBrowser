
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'YOUTR YOUTUBE KEY';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.videoSearch('vevo');
        this.state = { 
            videos: [],
            selectedvideo: null
        }; 
    }
    
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => { 
            this.setState({ 
                videos: videos,
                selectedvideo: videos[0] 
            });
        }); 
    }
    
    render()  {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedvideo} />
                <VideoList
                    onVideoSelect={selectedvideo => this.setState({selectedvideo})}
                    videos={this.state.videos} />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));


//https://github.com/webpack/extract-text-webpack-plugin