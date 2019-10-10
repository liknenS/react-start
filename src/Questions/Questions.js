import React from 'react'
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

const TextQuestion = ({ name, onChange, value }) => (
  <div>
    <input
      value={value}
      name={name}
      onChange={(e) => onChange({ name, value: e.target.value })}
    />
  </div>
)

const SelectQuestion = ({ answers, name, value, onChange }) => (
  <div>
    {answers.map((a, i) => (
      <div key={i}>
        <input
          checked={value === a.label}
          name={name}
          type='radio'
          onChange={() => onChange({ name, value: a.label })}
        />
        <label>{i}: {a.label}</label>
      </div>
    ))}
  </div>
)

const MultiSelectQuestion = ({ answers, name, value = [], onChange  }) => (
  <div>
    {answers.map((a, i) => (
      <div key={i}>
        <input
          name={name}
          checked={value.includes(a.label)}
          type='checkbox'
          onChange={(e) => {
            let newValue = value.filter(l => l !== a.label)
            if (e.target.checked) {
              newValue.push(a.label)
            }
            onChange({ name, value: newValue })
          }}
        />
        <label>{i}: {a.label}</label>
      </div>
    ))}
  </div>
)

const QUESTION_COMPONENT = {
  text: TextQuestion,
  select: SelectQuestion,
  multi: MultiSelectQuestion,
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
    const C = QUESTION_COMPONENT[q.type]
    return (
      <div key={q.name} className={css.question}>
        <div>{q.text} </div>
        <C {...q} onChange={this.onChange} value={answers[q.name]} />
      </div>
    )
  }

  render () {
    const { questionsList, answers } = this.state
    return (
      <div className={css.root}>
        {questionsList.map(this.renderQuestion)}
      </div>
    )
  }
}

export default Questions
