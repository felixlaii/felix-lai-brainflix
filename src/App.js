import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import VideoSection from './components/VideoSection/VideoSection';
import VideoSectionList from './components/VideoSectionList/VideoSectionList';
import videoDetailsJSON from './data/video-details.json';
import VideoComments from './components/VideoComments/VideoComments';
import CommentList from './components/CommentList/CommentList';
import UploadPage from './components/UploadPage/Upload';


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
      {/* <VideoSection 
            selectedVideo={this.state.selectedVideo}
            /> */}
      <BrowserRouter>
        <Header />
        <Switch>
          
          <Route path="/" exact render={() => {
            return <VideoSection selectedVideo={this.state.selectedVideo} />;
          }}/>
          <Route path="/Upload" component={UploadPage} />
          {/* <Route path="/VideoSection/:id" component={VideoSection} /> */}
          
        </Switch>
        </BrowserRouter>

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
