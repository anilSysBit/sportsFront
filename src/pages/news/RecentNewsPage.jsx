import React, { useState,useEffect } from 'react'
import NewsCard from './NewsCard';

const RecentNewsPage = () => {
    const [fetchedData,setFetchedData] = useState({
        data:null
    })

    const fakeData = [
        {
          id: 1,
          header: "Nature's Beauty",
          image: "https://picsum.photos/200/300?random=1",
          description: "Explore the serene landscapes and breathtaking views of nature.",
        },
        {
          id: 2,
          header: "Urban Vibes",
          image: "https://picsum.photos/200/300?random=2",
          description: "Dive into the hustle and bustle of city life with vibrant architecture.",
        },
        {
          id: 3,
          header: "Adventure Awaits",
          image: "https://picsum.photos/200/300?random=3",
          description: "Get ready for thrilling adventures and explore the unexplored.",
        },
        {
          id: 4,
          header: "Cultural Heritage",
          image: "https://picsum.photos/200/300?random=4",
          description: "Discover rich traditions and cultural landmarks around the world.",
        },
        
      ];


      useEffect(()=>{
        setFetchedData(prev =>({
            ...prev,
            data:fakeData
        }))
      },[])
      
  return (
    <div className="news_box_container">
        <h2>Recent News</h2>

        <div className="news_list">
            {fetchedData.data && fetchedData.data.map((elem,index)=>{
                return(
                    <NewsCard elem={elem} key={index}/>
                )
            })}
        </div>

        <button className="global_btn outline">View More News</button>
    </div>
  )
}

export default RecentNewsPage