import React from 'react'
import Input from '../elements/Input'
import Select from '../elements/Select'
import css from './QuizForm.module.css'

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
        <div key={i}>
          <div>{i + 1}:</div>
          <Input name={i} value={answer.label} onChange={onChangeAnswer} />
        </div>
      ))
    }
  </div>
}

class QuestionsForm extends React.PureComponent {

  updateQuestion = ({ name, value }) => {
    const { onChange, question, index } = this.props
    console.log('updateQuestion', { name, value })
    const newQuestion = {
      ...question,
      [name]: value,
    }
    onChange({ index, data: newQuestion })
  }

  render() {
    const { question  } = this.props
    return (
      <div className={css.question}>
        <div>
          <div>type:</div>
          <Select
            name='type'
            value={question.type}
            options={QUESTION_TYPE_OPTIONS}
            onChange={this.updateQuestion}
          />
        </div>
        <div>
          <div>name:</div>
          <Input name='name' placeholder='name' value={question.name} onChange={this.updateQuestion}/>
        </div>
        <div>
          <div>text:</div>
          <Input name='text' placeholder='text'  value={question.text} onChange={this.updateQuestion}/>
        </div>
        {TYPES_WITH_ANSWERS.includes(question.type)
          ? <AnswersForm answers={question.answers} onChange={this.updateQuestion} />
          : null
        }
      </div>
    )
  }
}


const INITIAL_STATE = {
  name: 'q',
  questions: []
}

class QuizForm extends React.Component {
  state = INITIAL_STATE
  onAdd = () => {
    const { questions } = this.state
    const newQuestions = [
      ...questions,
      {
        type: 'text',
        name: 'age',
        text: 'Age?',
      }
    ]

    this.setState({ questions: newQuestions })
  }

  onQuestionChange = ({ index, data }) => {
    const { questions } = this.state
    const newQuestions = [...questions]
    newQuestions[index] = data
    this.setState({ questions: newQuestions })
  }

  onChangeName = ({ value, name }) => this.setState({ [name]: value })

  onSubmit = () => {
    const { onSubmit } = this.props
    onSubmit(this.state)
    this.setState(INITIAL_STATE)
  }

  render () {
    const { questions, name } = this.state
    return (
      <div className={css.root}>
        <h1>Create Quiz</h1>
        <div>
          <div>Quiz name:</div>
          <Input name='name' value={name} onChange={this.onChangeName} />
        </div>
        <div>
          {questions.map((question, i) => (
            <QuestionsForm key={i} question={question} index={i} onChange={this.onQuestionChange} />
          ))}
        </div>
        <div className={css.buttons}>
          <button onClick={this.onAdd}>Add Question</button>
          <button onClick={this.onSubmit}>Submit</button>
        </div>
      </div>
    )
  }
}

export default QuizForm
