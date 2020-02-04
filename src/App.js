import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import QuizForm from './QuizForm'
import Header from './Header'
import QuizAnswer from './QuizAnswer'
import css from './App.module.css'
import News from './News'
import QuizList from './QuizList'


class App extends React.Component {
  render() {
    return (
      <div className={css.root}>
        <Router>
          <Header/>
          <div className={css.content}>
            <Switch>
              <Route exact path='/'>
                <Redirect to='/news' />
              </Route>
              <Route exact path='/news'>
                <News />
              </Route>
              <Route exact path='/create-quiz'>
                <QuizForm onSubmit={this.addQuiz} />
              </Route>
              <Route exact path='/quiz'>
                <QuizList/>
              </Route>
              <Route exact path='/quiz/:name'
                component={QuizAnswer}
              />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
