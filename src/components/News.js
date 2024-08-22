import React, { useState,useEffect } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import { PropTypes } from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=>{
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const CapitalizeFirstLetter=(str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const updateNews= async ()=>{
    props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}` ;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parseData= await data.json();
    props.setProgress(70);
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }
  useEffect(() => {
    document.title=`${CapitalizeFirstLetter(props.category)} - SnayNews`;
    updateNews();
    //eslint-disable-next-line
  }, [])

  // const handlePrevClick= async()=>{
  //   setPage(page-1)
  //   updateNews();
  // }
  // const handleNextClick= async()=>{
  //   setPage(page+1)
  //   updateNews();
  // }

  const fetchMoreData = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

    return (
        <>
        <div className="container">
          <h2 className="text-center" style={{margin: '35px 0px', marginTop:'90px'}} >SnayNews - Top {CapitalizeFirstLetter(props.category)} Headlines</h2>
          {loading && <Spinner/>}
          </div>
          
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults} 
            loader={<Spinner/>}>
            <div className="container">
              <div className="row">
               {/* !this.state.loading && */}
                  { articles.map((element)=>{
                      return <div className="col-md-4" key={element.url}>
                      <NewsItems  title={element.title } description={element.description } imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                      </div>
                  })}
              </div>
            </div>
          </InfiniteScroll>
        </>
    )
  }

News.defaultProps={
    country : 'in', category : 'general', pageSize : 10
}
News.propTypes={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}


export default News


