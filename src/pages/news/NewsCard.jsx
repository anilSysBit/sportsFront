import React from 'react'
import { Link } from 'react-router-dom'

const NewsCard = ({header,image,description,date=null,id}) => {
  return (
    <div className="news_card">
                        <div className="img_box">
                            <img src={image} alt="" />
                        </div>
                        <div className="detail_box">
                        <p className="header">{header}</p>
                        <p className='description'>{description}</p>
                        <Link to={`/news/${id}`}><button className="global_btn">View More</button></Link>
                        {/* <p className='sm_text mt-10'>Created on {date}</p> */}
                        </div>
                    </div>
  )
}

export default NewsCard