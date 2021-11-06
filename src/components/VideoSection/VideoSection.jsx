// import './videosection.scss';
// import VideoViews from '../../assets/icons/views.svg';
// import VideoLikes from '../../assets/icons/likes.svg';
// import axios from 'axios';
// import { Component } from 'react'
// import VideoSectionList from '../VideoSectionList/VideoSectionList';
// import VideoSectionItem from '../VideoSectionItem/VideoSectionItem';


// class VideoSection extends Component {
//     // const { title, channel, image, description, views, likes, timestamp } = props.selectedVideo;

//     // let postedDate = new Date(timestamp);

//     // postedDate = postedDate.toLocaleString().slice(0,9);
//     // postedDate = postedDate.replace(/ ,/g, '')
//     // postedDate = postedDate.trim();
//     // console.log(postedDate)
//     // render (props) {
//     // const { title, channel, image, description, views, likes, timestamp } = props.selectedVideo;

//     // let postedDate = new Date(timestamp);

//     // postedDate = postedDate.toLocaleString().slice(0,9);
//     // postedDate = postedDate.replace(/ ,/g, '')
//     // postedDate = postedDate.trim();
//     // console.log(postedDate)

//     state = {
//         selectedVideo: {},
//         videoList: []
//     }
 
//     getSelectedVideo = (videoId) => {
//         axios.get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=dc4a6b49-ab20-4995-a836-bec86ffba736`)
//             .then((response) => {
//                 this.setState({
//                     selectedVideo: response.data
//                 })
//             })
//             .catch((error) => console.log(error))
//     }

//     componentDidMount() {
//         console.log("hello this has mounted")
//         axios.get("https://project-2-api.herokuapp.com/videos?api_key=dc4a6b49-ab20-4995-a836-bec86ffba736")
//             .then((response) => {
//                 console.log(response.data)
//                 this.setState({
//                     videoList: response.data
//                 })
//                 const videoId = this.props.match.params.videoId || response.data[0].id

//                 this.getSelectedVideo(videoId)
//             })
//             .catch((error) => console.log(error))
//     }

//     componentDidUpdate(previousProps) {
//         const previousVideoId = previousProps.match.params.videoId
//         const currentVideoId = this.props.match.params.videoId
//     console.log(previousVideoId === currentVideoId)    

//     if(previousVideoId !== currentVideoId) {
//         this.getSelectedVideo(currentVideoId)
//     }
// }
//     render() {
//         console.log(this.state.selectedVideo)
//     return (
//         <>
//         <div className="primary-video">
//             <div className="primary-video__videoicon">
//                 <video className="primary-video__video" poster={this.state.selectedVideo.image} controls></video>
//             </div>

//             <h2 className="primary-video__title">{this.state.selectedVideo.title}</h2>

//             <div className="primary-video__metrics">
//                 <div className="primary-video__container">
//                     <p className="primary-video__container-channel"><strong>By {this.state.selectedVideo.channel}</strong></p>
//                     <p className="primary-video__container-date">{this.state.selectedVideo.timestamp}</p>
//                 </div>
//                 <div className="primary-video__info">
//                     <div className="primary-video__reachability">
//                         <img className="primary-video__viewsicon" src={VideoViews} alt='Video Views' />
//                         <p className="primary-video__info-views">{this.state.selectedVideo.views}</p>
//                    </div>
//                     <div className="primary-video__likeability">
//                         <img className="primary-video__likesicon" src={VideoLikes} alt='Video Likes' />
//                         <p className="primary-video__info-likes">{this.state.selectedVideo.likes}</p>
//                     </div>
//               </div>
//             </div>
//            <p className="primary-video__description">{this.state.selectedVideo.description}</p>
//         </div>
        
//         <ul className="video-list__nextvideo">
//             {this.state.videoList.map(video => (
//                 <VideoSectionItem
//                 key={video.id}
//                 id={video.id}
//                 title={video.title} 
//                 image={video.image}
//                 chnnel={video.channel}/>
//             ))}
//         </ul>
//         </>
//     )
// }
// }
// // }


// export default VideoSection;