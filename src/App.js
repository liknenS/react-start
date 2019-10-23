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
  state = { quizList: [] }

  addQuiz = (quiz) => {
    const { quizList } = this.state
    this.setState({ quizList: [...quizList, quiz] })
  }

  render() {
    const { quizList } = this.state
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
                <QuizList quizList={quizList} />
              </Route>
              <Route
                exact
                path='/quiz/:name'
                quizList={quizList}
                component={
                  ({ match }) => {
                    const quiz = quizList.find(quiz => quiz.name === match.params.name) || {}
                    return <QuizAnswer quiz={quiz} />
                  }
                }
              />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
