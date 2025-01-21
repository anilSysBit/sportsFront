import React, { useState } from 'react'
import SubImage from '/images/youngman.png'
import axios from 'axios';
const SubscribeBox = () => {
  const [email,setEmail] = useState('');
  const [error,setError] = useState('');
  const [loading,setLoading] = useState(false)
  const [status,setStatus] = useState(false);


  const handleSubmit =async(e)=>{
    e.preventDefault();
    try{
      setLoading(true)
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/add-subscriber/`,{email:email});
      console.log(response)
      setLoading(false)
      if(response.status){
        setStatus(true);
        setError('')
        setEmail('')
      }
    }catch(error){
      setLoading(false)
      setError(error.response.data.email || 'Something Went Wrong')
      console.log(error)
    }

  }
  return (
    <div className="subscribe_container">
      <div className="subscribe_box attach_with_footer">
        <div className="img_box">
            <img src={SubImage} alt="subscribe image" />
        </div>
        <div className="detail_box">
            <h2>Subscribe to out site</h2>
         <form action="" onSubmit={handleSubmit}>
                {!status ? <div className="flex-content">
                <input type="email" placeholder='Enter Email Address' onChange={e => setEmail(e.target.value)} value={email}/>
                <button className='global_btn'>Subscribe</button>
                </div> : <p>Successfully Subscribed</p>}
                <p className='sm_text red'>{error}</p>
                <p className='sm_text mt-10'>Stay updated with upcoming matches, events, and real-time results—never miss a moment!</p>
            </form>
        </div>
    </div>
    </div>
  )
}

export default SubscribeBox