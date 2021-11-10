import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import PageHeader from './components/PageHeader/PageHeader';
import UploadPage from './Pages/UploadPage/Upload';
import Home from './Pages/Home/Home';

class App extends React.Component {

  render (){
    
    return (
      <>
      <BrowserRouter>
        <PageHeader />
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
