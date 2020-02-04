import React from 'react'
import { Link } from 'react-router-dom'
import css from './QuizList.module.css'
import {connect} from "react-redux"

const QuizList = (props) => {
  const {quizList} = props;
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

function mapStateToProps(state) {
    return { quizList: state.quizList }
}

export default connect(mapStateToProps)(QuizList);
