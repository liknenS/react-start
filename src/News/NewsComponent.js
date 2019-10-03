import React from 'react'
import css from './News.module.css'

const fetchStub = () => {
  return fetch('https://5d962aafa824b400141d24bd.mockapi.io/api/forte/news')
    .then(r => r.json())
}

class News extends React.Component {
  static renderArticle = (item, index) => {
    return (
      <div className={css.item} key={index}>
        <div className={css.itemImage} >
          <img src={item.preview}/>
        </div>
        <div className={css.itemInfo}>
          <h2>{item.author}</h2>
          <p>
            {item.text}
          </p>
        </div>
      </div>
    )
  }
  state = {}

  componentDidMount() {
    fetchStub()
      .then((data) => {
        this.setState({ news: data })
      })

  }

  onReload = () => {
    console.log(this)
    this.setState({ news: [] })
    fetchStub()
      .then((data) => {
        this.setState({ news: data })
      })
  }

  render() {
    const { news = [] } = this.state
    console.log('render', this.state)
    return (
      <div>
        <button onClick={this.onReload}>reload</button>
        {news.map(News.renderArticle)}
      </div>
    )
  }
}

export default News
