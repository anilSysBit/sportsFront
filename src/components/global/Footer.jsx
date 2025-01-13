import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const Footer = () => {

  const [isHomeLocation,setIsHomeLocation] = useState(false);
  const location = useLocation()
  

  console.log(location.pathname)
  useEffect(()=>{
    if(location.pathname === '/'){
      setIsHomeLocation(true)
    }else{
      setIsHomeLocation(false)
    }
  },[location])

  return (
    <div className="footer_container">
      {isHomeLocation && <div className='home_footer_space'></div>}
      <div className={`other_details ${isHomeLocation ? '' : 'expand'}`}>
        <div className="description">
          <h2>Game Plan Nepal</h2>
          <p className='sm_text'>Game Plan Nepal is a cutting-edge platform designed to revolutionize football event management in Nepal. From organizing local matches to displaying real-time scores, our software ensures seamless coordination and efficient data management. It empowers event organizers to plan and execute matches effortlessly while providing a robust system to manage team and player details. With features tailored to Nepal's vibrant football community, Game Plan Nepal simplifies event logistics, tracks player and team stats, and delivers an exceptional experience for players, organizers, and fans alike. Whether you're hosting or participating, Game Plan Nepal is your ultimate solution for managing football events with precision and ease.</p>
        </div>

        <ul>
          <li className='bold'><strong>Recent Links</strong></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Teams</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Sponsers</a></li>
        </ul>

        <div className="button_group">
          {/* <img src="/src/assets/images/loginorganizer.png" alt="" /> */}
          <button className="global_btn">Register Your Team</button>
          <button className="global_btn outline">Apply as Sponser</button>
        </div>
      </div>
        <div className="copyright">
            <p>Game Plan Nepal , ©
            Copyright All right reserved 2025</p>
        </div>
    </div>
  )
}

export default Footer