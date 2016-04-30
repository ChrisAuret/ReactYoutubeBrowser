import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAJfQa65rUxbzo4WV49eEo4vTi-FvIHxQ4';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            videos: [],
            selectedvideo: null
        }; 
        
        YTSearch({key: API_KEY, term: 'vevo'}, (videos) => { 
            this.setState({ 
                videos: videos,
                selectedvideo: videos[0] 
            });
        }); 
    }
    
    render()  {
        return (
            <div>
                <SearchBar />
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