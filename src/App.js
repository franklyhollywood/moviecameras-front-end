import React, { Component } from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import Result from './Result.js';
import Input from './Input.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
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


