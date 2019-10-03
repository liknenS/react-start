import React from 'react'
import Header from './Header'
import css from './test.module.css'
import News from './News'


function App() {
  return (
    <div className={css.root}>
      <Header />
      <div className={css.content}>
        <News />
      </div>
    </div>
  );
}

export default App;
