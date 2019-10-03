import React from 'react'
import css from './test.module.css'

const news = [
  {
    imageUrl: '',
    header: 'What is Lorem Ipsum?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  },
  {
    imageUrl: '',
    header: 'What is Lorem Ipsum?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  },
  {
    imageUrl: '',
    header: 'What is Lorem Ipsum?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  },
  {
    imageUrl: '',
    header: 'What is Lorem Ipsum?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  },
  {
    imageUrl: '',
    header: 'What is Lorem Ipsum?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  },
]

const renderArticle = (item, index) => {
  return (
    <div className={css.newsItem} key={index}>
      <div className={css.newsItemImage} />
      <div className={css.newsItemInfo}>
        <h2>{item.header}</h2>
        <p>
          {item.text}
        </p>
      </div>
    </div>
  )
}

const renderHeader = () => {
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


function App() {
  return (
    <div className={css.root}>
      {renderHeader()}
      <div className={css.content}>

        {news.map(renderArticle)}

      </div>
    </div>
  );
}

export default App;
