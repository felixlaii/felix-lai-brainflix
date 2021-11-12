// import React from 'react'
// import { Component } from 'react'
// import VideoViews from '../../assets/icons/views.svg'
// import VideoLikes from '../../assets/icons/likes.svg'

// class VideoSectionInfo extends Component {
//     state = {
//         selectedVideo: {},
//         videoList: []
//     }

//     getSelectedVideo = (videoId) => {
//         axios.get(`/videos/${videoId}`)
//         .then((response) => {
//             console.log(response.data)
//                 this.setState({
//                     selectedVideo: response.data
//                 })
//             })
//             .catch((error) => (error))
//     }

//     componentDidMount() {
//         axios.get(`/videos`)
//             .then((response) => {
//                 this.setState({
//                     videoList: response.data
//                 })
//                 const videoId = this.props.match.params.videoId || response.data[0].id

//                 this.getSelectedVideo(videoId)
//             })
//             .catch((error) => (error))
//     }

//     componentDidUpdate(previousProps) {
//         const previousVideoId = previousProps.match.params.videoId
//         const currentVideoId = this.props.match.params.videoId

//     if(previousVideoId !== currentVideoId) {
//         this.getSelectedVideo(currentVideoId)
//             window.scrollTo({
//                 top: 0,
//                 behavior: "smooth"
//             })
        
//     }
// }

//     render(){
//         if (!this.state.selectedVideo.id) return <div><p className="loading">Loading...</p></div>
//         // const filteredVideo = this.state.videoList.filter(video => video.id !== this.state.selectedVideo.id)

//         let postedDate = new Date(this.state.selectedVideo.timestamp);

//         postedDate = postedDate.toLocaleString().slice(0,9);
//         postedDate = postedDate.replace(/ ,/g, '')
//         postedDate = postedDate.trim();

//     return (
//         <div className="video-section-info">
//             <h2 className="video-section-info__title">{this.state.selectedVideo.title}</h2>
//             <div className="video-section-info__metrics">
//                 <div className="video-section-info__container">
//                     <p className="video-section-info__container-channel"><strong>By {this.state.selectedVideo.channel}</strong></p>
//                     <p className="video-section-info__container-date">{postedDate}</p>
//                 </div>
//                 <div className="video-section-info__info">
//                     <div className="video-section-info__reachability">
//                         <img className="video-section-info__viewsicon" src={VideoViews} alt='Video Views' />
//                         <p className="video-section-info__info-views">{this.state.selectedVideo.views}</p>
//                    </div>
//                     <div className="video-section-info__likeability">
//                         <img className="video-section-info__likesicon" src={VideoLikes} alt='Video Likes' />
//                         <p className="video-section-info__info-likes">{this.state.selectedVideo.likes}</p>
//                     </div>
//               </div>
//             </div>
//            <p className="video-section-info__description">{this.state.selectedVideo.description}</p>
//         </div>
//     )
// }
// }

// export default VideoSectionInfo
