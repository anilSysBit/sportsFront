import React from 'react'

const NewsCard = ({elem}) => {
  return (
    <div className="news_card">
                        <div className="img_box">
                            <img src={elem?.image} alt="" />
                        </div>
                        <div className="detail_box">
                        <p className="header">{elem?.header}</p>
                        <p className='description'>{elem?.description}</p>
                        <button className="global_btn">View More</button>
                        </div>
                    </div>
  )
}

export default NewsCard