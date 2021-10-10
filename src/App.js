import React, { Component } from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
  NavLink
} from 'react-router-dom';
import ListPage from './ListPage.js'
import CreatePage from './CreatePage.js'
import EditPage from './EditPage.js'


export default class App extends Component {
  render() {
    return (
      <div>
        <Router> 
        <header>
                    <NavLink exact activeClassName='active-link' to="/">Home</NavLink>
                    <NavLink exact activeClassName='active-link' to="/CreatePage">Create</NavLink>
                    {/* <NavLink exact activeClassName='active-link' to="/EditPage">Edit</NavLink> */}
                  </header>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <ListPage {...routerProps} />} 
                        />
                        <Route 
                            path="/CreatePage" 
                            exact
                            render={(routerProps) => <CreatePage {...routerProps} />} 
                        />
                        <Route 
                            path="/EditPage/:id" 
                            exact
                            render={(routerProps) => <EditPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
      </div>
    )
  }
}


