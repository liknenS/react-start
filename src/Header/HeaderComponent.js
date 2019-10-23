import React from 'react'
import {
  Link
} from 'react-router-dom'
import css from './Header.module.css'

class Header extends React.Component {
  render () {
    return (
      <div className={css.header}>
        <ul className={css.list}>
          <li>
            <Link to='/' className={css.listItem}>Home</Link>
          </li>
          <li>
            <Link to='/news' className={css.listItem}>News</Link>
          </li>
          <li>
            <Link to='/create-quiz' className={css.listItem}>Create quiz</Link>
          </li>
          <li>
            <Link to='/quiz' className={css.listItem}>Quiz List</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header
