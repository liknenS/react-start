import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Header from './Header'
import Questions from './Questions'
import css from './App.module.css'
import News from './News'

const App = () => (
  <div className={css.root}>
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/news' />
        </Route>
        <Route exact path='/news'>
          <News />
        </Route>
        <Route exact path='/questions'>
          <Questions />
        </Route>
      </Switch>
    </Router>
  </div>
)


export default App;
