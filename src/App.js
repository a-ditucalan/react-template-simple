import React, { Component } from 'react'
import { 
  HashRouter, 
  Route,
  Switch,
} from 'react-router-dom'
import { hot } from 'react-hot-loader'

import Header from './components/header'
import Footer from './components/footer'
import Home from './containers/home'
import About from './containers/about'
import NoRouteMatch from './containers/404'
class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
          <Header />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route component={NoRouteMatch} />
          </Switch>

          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default hot(module)(App);
