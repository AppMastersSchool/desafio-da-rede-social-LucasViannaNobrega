import React, {Component} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Timeline from './components/timeline';
import PostDetails from './components/postDetails';

class App extends Component { 

    showNotFound(){
      return(
        <div>
          Page not Found :(
        </div>
      )
    }

    aboutPage(){
      const page = (
        <div>
          <h1>About System</h1>
          <h3>I'm make with REACT!</h3>
        </div>
      )
      return page;
    }
    render(){
      return(
        <div>
          <BrowserRouter>
            <Switch>
              <Route path='/post/:id' component={PostDetails} />
              <Route path='/sobre' component={this.aboutPage} />
              <Route exact path='/' component={Timeline}/>
              <Route path='*' component={this.showNotFound} />
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
}

export default App;