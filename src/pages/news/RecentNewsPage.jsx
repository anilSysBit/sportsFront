import React, { useState,useEffect } from 'react'
import NewsCard from './NewsCard';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RecentNewsPage = () => {
    const [fetchedData,setFetchedData] = useState({
        data:null
    })

    const fetchData =async()=>{
      try{
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/recent-news?count=4`)
        setFetchedData(prev =>({
          ...prev,
          data:response.data
        }))

        console.log(response)
      }catch(error){
        console.log(error)
      }
    }

      useEffect(()=>{
        fetchData();
      },[])
      
  return (
    <div className="news_box_container">
        <h2>Recent News</h2>
    
        <div className="news_list">
            {fetchedData.data && fetchedData.data.map((elem,index)=>{
                return(
                    <NewsCard 
                      header={elem?.title}
                      description={elem?.sm_text}
                      image={elem?.image}
                      date={elem?.start_date}
                    />
                )
            })}
        </div>

        <Link to={'/news'}><button className="global_btn outline">View More News</button></Link>
    </div>
  )
}

export default RecentNewsPage