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
            <Link to='/questions' className={css.listItem}>Questions</Link>
          </li>
          <li>
            <Link to='/news' className={css.listItem}>News</Link>
          </li>
          <li>
            <Link to='/create-questions' className={css.listItem}>Create Questions</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header
