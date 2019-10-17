import React from 'react'
import Input from '../elements/Input'
import Select from '../elements/Select'
import css from './CreateQuestions.module.css'

const QUESTION_TYPE_OPTIONS = [
  {
    label: 'Text',
    value: 'text',
  },
  {
    label: 'Select',
    value: 'select',
  },
  {
    label: 'MultiSelect',
    value: 'multi',
  },
]

const TYPES_WITH_ANSWERS = ['select', 'multi']

const AnswersForm = ({ answers = [], onChange }) => {
  const addAnswer = () =>
    onChange({ name: 'answers', value: [...answers, { label: `${answers.length + 1}` }]})
  const onChangeAnswer = ({ name: index, value }) => {
    const result = [...answers]
    result[index] = { label: value }
    onChange({ name: 'answers', value: result })
  }
  return <div>
    <button onClick={addAnswer}>Add Answers</button>
    {
      answers.map((answer, i) => (
        <div>
          <div>{i + 1}:</div>
          <Input name={i} value={answer.label} onChange={onChangeAnswer} />
        </div>
      ))
    }
  </div>
}


const QuestionsForm = ({ question, onChange }) => {
  const updateQuestion = ({ name, value }) => {
    console.log('updateQuestion', { name, value })
    const newQuestion = {
      ...question,
      [name]: value,
    }
    onChange(newQuestion)
  }


  return (
    <div className={css.question}>
      <div>
        <div>type:</div>
        <Select
          name='type'
          value={question.type}
          options={QUESTION_TYPE_OPTIONS}
          onChange={updateQuestion}
        />
      </div>
      <div>
        <div>name:</div>
        <Input name='name' placeholder='name' value={question.name} onChange={updateQuestion}/>
      </div>
      <div>
        <div>text:</div>
        <Input name='text' placeholder='text'  value={question.text} onChange={updateQuestion}/>
      </div>
      {TYPES_WITH_ANSWERS.includes(question.type)
        ? <AnswersForm answers={question.answers} onChange={updateQuestion} />
        : null
      }
    </div>
  )
}


class CreateQuestions extends React.Component {
  state = {
    questions: []
  }
  onAdd = () => {
    const { questions } = this.state
    const newQuestions = [
      ...questions,
      {
        type: '',
        name: '',
        text: '',
      }
    ]

    this.setState({ questions: newQuestions })
  }

  onQuestionChange = (i, data) => {
    const { questions } = this.state
    const newQuestions = [...questions]
    newQuestions[i] = data
    this.setState({ questions: newQuestions })
  }

  render () {
    const { questions } = this.state
    return (
      <div className={css.root}>
        <h1>Create questions</h1>
        <button onClick={this.onAdd}>Add Question</button>
        <div>
          {questions.map((question, i) => (
            <QuestionsForm key={i} question={question} onChange={(q) => this.onQuestionChange(i, q)} />
          ))}
        </div>
      </div>
    )
  }
}

export default CreateQuestions
