import React from 'react'
import SubImage from '/images/youngman.png'
const SubscribeBox = () => {
  return (
    <div className="subscribe_container">
      <div className="subscribe_box attach_with_footer">
        <div className="img_box">
            <img src={SubImage} alt="subscribe image" />
        </div>
        <div className="detail_box">
            <h2>Subscribe to out site</h2>
            <form action="">
                <div className="flex-content">
                <input type="email" placeholder='Enter Email Address'/>
                <button className='global_btn'>Subscribe</button>
                </div>
                <p className='sm_text mt-10'>Stay updated with upcoming matches, events, and real-time results—never miss a moment!</p>
            </form>
        </div>
    </div>
    </div>
  )
}

export default SubscribeBox