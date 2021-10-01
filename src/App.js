import React, { Component } from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import Result from './Result.js';
import Input from './Input.js';
import Header from './Header.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router> <Header />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Input {...routerProps} />} 
                        />
                        <Route 
                            path="/result" 
                            exact
                            render={(routerProps) => <Result {...routerProps} />} 
                        />
                    </Switch>
                </Router>
      </div>
    )
  }
}


