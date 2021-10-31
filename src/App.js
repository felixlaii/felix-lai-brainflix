import React from 'react';
import './App.css';
import Header from './components/header/Header';
import VideoSection from './components/VideoSection/VideoSection';
import VideoSectionList from './components/VideoSectionList/VideoSectionList';
// import VideoSectionItem from './components/VideoSectionItem/VideoSectionItem';
import videoDetailsJSON from './data/video-details.json';
import VideoComments from './components/VideoComments/VideoComments';
import CommentList from './components/CommentList/CommentList';

class App extends React.Component {
  state = {
    selectedVideo: videoDetailsJSON[0],
    videoList: videoDetailsJSON,
  }

  handleVideoSelect = id => {
    this.setState({
      selectedVideo:videoDetailsJSON.find(video => id === video.id)
    })
  }
  render (){
    const filteredVideo = this.state.videoList.filter(video => video.id !== this.state.selectedVideo.id)
    
    return (
      <>
        <Header />
        <VideoSection 
        selectedVideo={this.state.selectedVideo}
        />

        <VideoComments
        selectedVideo={this.state.selectedVideo} />
        
        <CommentList
        selectedVideo={this.state.selectedVideo}
        />

        <VideoSectionList
        videoList={filteredVideo}
        handleVideoSelect={this.handleVideoSelect}/>


    
        
    </>
  );
}
}

export default App;
