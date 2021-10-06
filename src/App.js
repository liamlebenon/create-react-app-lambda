import './App.css';
import { Header } from './components/Header/Header';
import { PostList } from './components/PostList/PostList'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { UserProfile } from './components/UserProfile/UserProfile';

const App = () => {

  return (
    <Router>
      <div className="App">
          <Header />
          <div class='body-container'>
            <Switch>
              <Route path='/' exact component={PostList} />
              <Route path='/users/:username' component={UserProfile} />
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
