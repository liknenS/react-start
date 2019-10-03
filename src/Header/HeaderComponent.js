import React from 'react'
import css from './Header.module.css'

class Header extends React.Component {
  render () {
    return (
      <div className={css.header}>
        <ul className={css.list}>
          <li>
            <a href='#/profile' className={css.listItem}>Profile</a>
          </li>
          <li >
            <a href='#/news' className={css.listItem}>News</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header
