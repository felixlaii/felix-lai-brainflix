import './Home.scss'
import '../../components/VideoSectionItem/videosectionitem.scss';
import '../../components/VideoSectionList/videosectionlist.scss';

import VideoViews from '../../assets/icons/views.svg';
import VideoLikes from '../../assets/icons/likes.svg';
import axios from 'axios';
import { Component } from 'react'
import VideoSectionList from '../../components/VideoSectionList/VideoSectionList';
import VideoSectionItem from '../../components/VideoSectionItem/VideoSectionItem';
import CommentListItem from '../../components/CommentListItem/CommentListItem'
import VideoComments from '../../components/VideoComments/VideoComments';


class Home extends Component {

    state = {
        selectedVideo: {},
        videoList: []
    }

    getSelectedVideo = (videoId) => {
        axios.get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=dc4a6b49-ab20-4995-a836-bec86ffba736`)
            .then((response) => {
                this.setState({
                    selectedVideo: response.data
                })
            })
            .catch((error) => console.log(error))
    }

    componentDidMount() {
        axios.get("https://project-2-api.herokuapp.com/videos?api_key=dc4a6b49-ab20-4995-a836-bec86ffba736")
            .then((response) => {
                this.setState({
                    videoList: response.data
                })
                const videoId = this.props.match.params.videoId || response.data[0].id

                this.getSelectedVideo(videoId)
            })
            .catch((error) => console.log(error))
    }


    componentDidUpdate(previousProps) {
        const previousVideoId = previousProps.match.params.videoId
        const currentVideoId = this.props.match.params.videoId

    if(previousVideoId !== currentVideoId) {
        this.getSelectedVideo(currentVideoId)
    }
}
    render() {
        if (!this.state.selectedVideo.id) return <div><p className="loading">Loading...</p></div>

        const filteredVideo = this.state.videoList.filter(video => video.id !== this.state.selectedVideo.id)
        
        let postedDate = new Date(this.state.selectedVideo.timestamp);

        postedDate = postedDate.toLocaleString().slice(0,9);
        postedDate = postedDate.replace(/ ,/g, '')
        postedDate = postedDate.trim();

    return (
        <>
        <div className="primary-video">
            <div className="primary-video__videoicon">
                <video className="primary-video__video" poster={this.state.selectedVideo.image} controls></video>
            </div>

            <h2 className="primary-video__title">{this.state.selectedVideo.title}</h2>

            <div className="primary-video__metrics">
                <div className="primary-video__container">
                    <p className="primary-video__container-channel"><strong>By {this.state.selectedVideo.channel}</strong></p>
                    <p className="primary-video__container-date">{postedDate}</p>
                </div>
                <div className="primary-video__info">
                    <div className="primary-video__reachability">
                        <img className="primary-video__viewsicon" src={VideoViews} alt='Video Views' />
                        <p className="primary-video__info-views">{this.state.selectedVideo.views}</p>
                   </div>
                    <div className="primary-video__likeability">
                        <img className="primary-video__likesicon" src={VideoLikes} alt='Video Likes' />
                        <p className="primary-video__info-likes">{this.state.selectedVideo.likes}</p>
                    </div>
              </div>
            </div>
           <p className="primary-video__description">{this.state.selectedVideo.description}</p>
        </div>

        <VideoComments />

        <div className="comment-list__container">
                <ul className="comment-list__nextcomment">
                    {this.state.selectedVideo.comments.map(comment => (
                        <CommentListItem
                        key={comment.id}
                        id={comment.id}
                        name={comment.name}
                        timestamp={comment.timestamp}
                        comment={comment.comment}
                        />
                        ))}   
                </ul>
        </div>
        
        <VideoSectionList />
  
        <ul className="video-list__nextvideo">
            {filteredVideo.map(video => (
                <VideoSectionItem
                key={video.id}
                id={video.id}
                title={video.title} 
                image={video.image}
                channel={video.channel}
                />
            ))}
        </ul>
    
        </>
    )
}
}



export default Home;