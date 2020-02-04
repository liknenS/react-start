import React from 'react'
import CheckBoxGroup from '../elements/CheckBoxGroup'
import Input from '../elements/Input'
import RadioGroup from '../elements/RadioGroup'
import css from './QuizAnswer.module.css';
import {connect} from "react-redux";
const QUESTION_COMPONENT = {
  text: Input,
  select: RadioGroup,
  multi: CheckBoxGroup,
}


class QuizAnswer extends React.Component {

  state = {
    answers: {}
  }

  onChange = ({ name, value }) => {
    this.setState({
      answers: {
        ...this.state.answers,
        [name]: value,
      }
    })
  }

  onSubmit = () => {
    alert(JSON.stringify(this.state.answers, null, 2))
  }

  renderQuestion = (q) => {
    const { answers } = this.state
    const Component = QUESTION_COMPONENT[q.type]
    return (
      <div key={q.name} className={css.question}>
        <div>{q.text} </div>
        <Component
          name={q.name}
          options={q.answers}
          onChange={this.onChange}
          value={answers[q.name]}
        />
      </div>
    )
  }

  render () {
    const { quiz } = this.props
    const { questions = [] } = quiz
    return (
      <div className={css.root}>
        {questions.map(this.renderQuestion)}
        <div className={css.buttons}>
          <button onClick={this.onSubmit}>Submit</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return { quiz: state.quizList.find(quiz => quiz.name === ownProps.match.params.name) || {} }
}

export default connect(mapStateToProps)(QuizAnswer);
