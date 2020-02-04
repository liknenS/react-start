import React from 'react'
import css from './News.module.css'
import {connect} from "react-redux";
import { getNewsAction } from '../actions';

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

  componentDidMount() {
      this.props.getNews()
  }

  render() {
    const {news} = this.props;
    if(news.error) return(<div>{news.error}</div>)
    if(news.loading) return(<div>Loading...</div>)
    return (
      <div>
        <button onClick={this.props.getNews}>reload</button>
        {news.data.map(News.renderArticle)}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
        getNews: () => dispatch(getNewsAction())
    }
}

function mapStateToProps(state) {
    return { news: state.news }
}

export default connect(mapStateToProps,mapDispatchToProps,null)(News);