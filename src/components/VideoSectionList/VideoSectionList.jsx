import VideoSectionItem from '../VideoSectionItem/VideoSectionItem';
import './videosectionlist.scss';
import axios from 'axios';
import {Component} from 'react';

class VideoSectionList extends Component {
  
    render () {
    return(
        <div className="video-list">
            <h2 className="video-list__title">NEXT VIDEOS</h2>
            <div className="video-list__suggestions">
                
            </div>
        </div>
    )
}
}

export default VideoSectionList;