import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
// import VideoSectionList from './components/VideoSectionList/VideoSectionList';
import videoDetailsJSON from './data/video-details.json';
import VideoComments from './components/VideoComments/VideoComments';
import CommentList from './components/CommentList/CommentList';
import UploadPage from './Pages/UploadPage/Upload';
import Home from './Pages/Home/Home';

class App extends React.Component {

  render (){
    
    return (
      <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/video/:videoId" component={Home} />
          <Route path="/Upload" component={UploadPage} />
        </Switch>
        </BrowserRouter>  

        
    </>
  );
}
}

export default App;
