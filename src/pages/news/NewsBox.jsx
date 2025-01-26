import React, { useEffect, useState } from 'react'
import { staticNews } from '../../components/static/static_news'
import NewsCard from './NewsCard'
import LoadingPageLayout from '../../layouts/LoadingPageLayout'
import { Link } from 'react-router-dom'


const NewsBox = ({onFront=false}) => {
  const [fetchedData,setFetchedData] = useState({
    data:null,
    pagination:1,
})

const url = onFront ? `${import.meta.env.VITE_API_URL}/api/recent-news?count=4` : `${import.meta.env.VITE_API_URL}/api/recent-news/`

  return (
   <LoadingPageLayout apiUrl={url} loaderStatus={!onFront}  setFetchedData={setFetchedData} isResponseArray>
 <div className="news_box_container">
      <h2>{onFront ? 'Recent News':'News'}</h2>
      <div className="news_list">
            {fetchedData.data && fetchedData.data.map((elem,index)=>{
                return(
                    <NewsCard
                      header={elem?.title}
                      image={elem?.image}
                      description={elem?.sm_text}
                      date={elem?.start_date}
                    />
                )
            })}
        </div>
        <Link to="/news"><button className="global_btn outline">View More News</button></Link>
    </div>
   </LoadingPageLayout>
  )
}

export default NewsBox