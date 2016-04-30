import React from 'react';
import Loading from './loading';

const VideoDetail = ({video}) => {
    
    if(!video){
        return (  
            <Loading text={"Loading"} speed={300}/>
        );
    }     
    
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
                
    return (
        <div className="video-detail col-sm-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
      
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>  
      </div>  
    );
};

export default VideoDetail;