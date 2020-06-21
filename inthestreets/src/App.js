import React from 'react';
import './App.css';
import './components/MapView/MapView';
import MapView from './components/MapView/MapView';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { Home } from './containers/Home/Home';
import { About } from './containers/About/About';
import { NoMatch } from './containers/NoMatch/NoMatch';
import Sidebar from './components/SideNavigationBar/SideNavigationBar';
import { Events } from './containers/Events/Events';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/events" component={Events} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>

    
  );
}

export default App;