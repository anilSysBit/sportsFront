import React, { useEffect, useState } from 'react'
import { staticNews } from '../../components/static/static_news'
import NewsCard from './NewsCard'


const NewsBox = () => {
  const [fetchedData,setFetchedData] = useState({
    data:null
})

  useEffect(()=>{
    setFetchedData(prev =>({
        ...prev,
        data:staticNews
    }))
  },[])
  return (
    <div className="news_page_container">
      <h2>News</h2>
      <div className="news_list">
            {fetchedData.data && fetchedData.data.map((elem,index)=>{
                return(
                    <NewsCard elem={elem} key={index}/>
                )
            })}
        </div>
    </div>
  )
}

export default NewsBox