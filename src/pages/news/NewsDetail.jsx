import React, { useState } from 'react'
import LoadingPageLayout from '../../layouts/LoadingPageLayout'
import { useParams } from 'react-router-dom'

const NewsDetail = () => {
    const [fetchedData,setFetchedData] = useState({
        data:null
    })
    const params = useParams()
    const news_id = params.news_id;
    const apiUrl = `${import.meta.env.VITE_API_URL}/api/recent-news/${news_id}/`
    const data = fetchedData?.data
  return (
    <LoadingPageLayout apiUrl={apiUrl} setFetchedData={setFetchedData} isResponseObject>
        <div className="news_detail_container">
            <h2 className='header'>{data?.title}</h2>
            <div className="img_box">
                <img src={data?.image} alt=""  height={200}/>
            </div>
            <div 
            className="news-text"
            dangerouslySetInnerHTML={{__html:data?.text}}
            ></div>
            {data?.link && <a href={data?.link} className='underline mt-5'> Open This Link for more details about {data?.title}</a>}
            <p className='mt-5'>Created at - {data?.created_at}</p>
        </div>
    </LoadingPageLayout>
  )
}

export default NewsDetail