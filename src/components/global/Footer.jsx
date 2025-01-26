import { Email, LocationCity, Phone, WhatsApp } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

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
      <div className={`other_details`}>
        <div className="description">
          <h2>Game Plan Nepal</h2>
          <p className='sm_text'>Game Plan Nepal is a cutting-edge platform designed to revolutionize football event management in Nepal. From organizing local matches to displaying real-time scores, our software ensures seamless coordination and efficient data management. It empowers event organizers to plan and execute matches effortlessly while providing a robust system to manage team and player details. With features tailored to Nepal's vibrant football community, Game Plan Nepal simplifies event logistics, tracks player and team stats, and delivers an exceptional experience for players, organizers, and fans alike. Whether you're hosting or participating, Game Plan Nepal is your ultimate solution for managing football events with precision and ease.</p>
        </div>

        <ul>
          <li className='bold'><strong>Recent Links</strong></li>
          <li><a href="/news">News</a></li>
          <li><a href="/teams">Teams</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/sponsers">Sponsers</a></li>
          <li><a href="/privacy-and-policy">Privacy and Policy</a></li>
        </ul>

        <div className="button_group">
          {/* <img src="/src/assets/images/loginorganizer.png" alt="" /> */}
          <Link to={'/register'}><button className="global_btn">Register Your Team</button></Link>
          {/* <Link><button className="global_btn outline">Apply as Sponser</button></Link> */}
        </div>
      </div>
      <div className="midline_block">
      <div className="contact_info">
        <p className='underline bold'>Contact Information</p>
          <p><a href="tel:+9779816284342"><Phone/> 9816284342</a></p>
          <p><a href="mailto:anil.wagle808@gmail.com"><Email/> gpn2025@gmail.com</a></p>
          <p> <LocationCity/>Khairahani-1, Chitwan</p>
      </div>
      <div className="contact_info">
        <p className='underline bold'>For Support</p>
        <p><a href="mailto:anil.wagle808@.com"><Email/> support@gpn.com</a></p>

      </div>
      <div className="contact_info">
        <p className='underline bold'>Messaging</p>
            <a href="https://wa.me/9779816284342" target="_blank" rel="noopener noreferrer">
      <WhatsApp/> Chat via WhatsApp
</a>

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