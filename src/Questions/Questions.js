import React from 'react'
import CheckBoxGroup from '../elements/CheckBoxGroup'
import Input from '../elements/Input'
import RadioGroup from '../elements/RadioGroup'
import css from './Questions.module.css'

const TMP = [
  {
    type: 'text',
    name: 'name',
    text: 'Your name?',
  },
  {
    type: 'text',
    name: 'age',
    text: 'Your Age?',
  },
  {
    type: 'select',
    name: 'language',
    text: 'Your Language?',
    answers: [
      {
        label: 'C#'
      },
      {
        label: 'JS'
      },
      {
        label: 'Java'
      },
    ]
  },
  {
    type: 'multi',
    name: 'hobby',
    text: 'Your Hobby?',
    answers: [
      {
        label: 'Snowboard'
      },
      {
        label: 'Football'
      },
      {
        label: 'Programming'
      },
    ]
  },
]

const QUESTION_COMPONENT = {
  text: Input,
  select: RadioGroup,
  multi: CheckBoxGroup,
}


class Questions extends React.Component {

  state = {
    questionsList: TMP,
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
    const { questionsList } = this.state
    return (
      <div className={css.root}>
        {questionsList.map(this.renderQuestion)}
      </div>
    )
  }
}

export default Questions
