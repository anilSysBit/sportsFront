import React from 'react'
import { Link } from 'react-router-dom'

const ThankPage = ({message = "Thank you for Registering"}) => {
  return (
    <div className="login-card">
        <h2>{message}</h2>
        <p className='sm_text'>After Checking your details. The GPN team will send you email later with confirmation id and a link for filling further details.</p>

        <Link to='/'><button className='global_btn'>Back to Homepage</button><br /></Link>
        <a href="https://gmail.com" className='sm_text underline mt-5' target='_blank'>Click here to go to Gmail</a>
    </div>
  )
}

export default ThankPage