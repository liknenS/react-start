import React from 'react'
import { Link } from 'react-router-dom'
import css from './QuizList.module.css'

const QuizList = ({ quizList = [] }) => {
  return (
    <div className={css.root}>
      QuizList
      <div>
        {quizList.map((quiz, i) => (
          <Link className={css.link} to={`/quiz/${quiz.name}`} key={i}>{quiz.name}</Link>
        ))}
      </div>
    </div>
  )
}

export default QuizList
