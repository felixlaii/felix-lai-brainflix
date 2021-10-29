import React from 'react';
import './App.css';
import Header from './components/header/Header';
import VideoSection from './components/VideoSection/VideoSection';
import VideoSectionList from './components/VideoSectionList/VideoSectionList';
// import VideoSectionItem from './components/VideoSectionItem/VideoSectionItem';
import videoDetailsJSON from './data/video-details.json';


class App extends React.Component {
  state = {
    videos: videoDetailsJSON[0],
  }

  handleVideoSelect = id => {
    this.setState({
      videos:videoDetailsJSON.find(video => id === video.id)
    })
  }
  render () {
    // const filteredVideo = this.state.videos.filter(
    //   video => video.id !== this.state.videos.id)
    // const filteredVideo = this.state.selectedVideo.filter(selectedVideo => selectedVideo.id !== this.state.selectedVideo.id)
    
    return (
      <>
        <Header />
        <VideoSection 
        image={this.state.videos.image}
        title={this.state.videos.title}
        description={this.state.videos.description}
        channel={this.state.videos.channel}/>
        likes={this.state.videos.likes}
        views={this.state.videos.views}
        date={this.state.videos.timestamp}


        {/* <VideoSectionList
        // videos={filteredVideo}
        handleVideoSelect={this.handleVideoSelect}/> */}

    
        
    </>
  );
}
}

export default App;
