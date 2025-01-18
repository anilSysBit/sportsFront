import React from 'react'

const NewsCard = ({header,image,description}) => {
  return (
    <div className="news_card">
                        <div className="img_box">
                            <img src={image} alt="" />
                        </div>
                        <div className="detail_box">
                        <p className="header">{header}</p>
                        <p className='description'>{description}</p>
                        <button className="global_btn">View More</button>
                        </div>
                    </div>
  )
}

export default NewsCard