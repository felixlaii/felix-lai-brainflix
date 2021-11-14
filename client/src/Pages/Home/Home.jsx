import axios from 'axios'
import { Component } from 'react'
import VideoSectionList from '../../components/VideoSectionList/VideoSectionList'
import VideoSectionItem from '../../components/VideoSectionItem/VideoSectionItem'
import CommentListItem from '../../components/CommentListItem/CommentListItem'
import VideoComments from '../../components/VideoComments/VideoComments'
import VideoViews from '../../assets/icons/views.svg'
import VideoLikes from '../../assets/icons/likes.svg'
import './Home.scss'
import '../../components/VideoSectionItem/VideoSectionItem.scss'
import '../../components/VideoSectionList/VideoSectionList.scss'

class Home extends Component {

    state = {
        selectedVideo: {},
        videoList: []
    }

    getSelectedVideo = (videoId) => {
        axios.get(`/videos/${videoId}`)
        .then((response) => {
                this.setState({
                    selectedVideo: response.data
                })
            })
            .catch((error) => (error))
    }

    componentDidMount() {
        axios.get(`/videos`)
            .then((response) => {
                this.setState({
                    videoList: response.data
                })
                const videoId = this.props.match.params.videoId || response.data[0].id

                this.getSelectedVideo(videoId)
            })
            .catch((error) => (error))
    }

    componentDidUpdate(previousProps) {
        const previousVideoId = previousProps.match.params.videoId
        const currentVideoId = this.props.match.params.videoId

    if(previousVideoId !== currentVideoId) {
        this.getSelectedVideo(currentVideoId)
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        
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
            <video className="primary-video__video" poster={this.state.selectedVideo.image} controls></video>
        </div>

        <div className="primary-details">
            <h2 className="primary-details__title">{this.state.selectedVideo.title}</h2>

            <div className="primary-details__metrics">
                <div className="primary-details__container">
                    <p className="primary-details__container-channel"><strong>By {this.state.selectedVideo.channel}</strong></p>
                    <p className="primary-details__container-date">{postedDate}</p>
                </div>
                <div className="primary-details__info">
                    <div className="primary-details__reachability">
                        <img className="primary-details__viewsicon" src={VideoViews} alt='Video Views' />
                        <p className="primary-details__info-views">{this.state.selectedVideo.views}</p>
                   </div>
                    <div className="primary-details__likeability">
                        <img className="primary-details__likesicon" src={VideoLikes} alt='Video Likes' />
                        <p className="primary-details__info-likes">{this.state.selectedVideo.likes}</p>
                    </div>
              </div>
            </div>
           <p className="primary-details__description">{this.state.selectedVideo.description}</p>
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

export default Home