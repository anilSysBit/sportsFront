import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const RegisterTeam = () => {
  const [initialValues,setInitialValues] = useState({
    name:'',
    email:"",
    phone:'',
    address:"",
    short_name:''
  })

  const [errors,setErrors] = useState({});


  const handleChange =(e)=>{
    const {name,value} = e.target;

    setInitialValues(prev =>({
      ...prev,
      [name]:value
    }))
  }


  const navigate = useNavigate();
  const handleSubmit =async(event)=>{
    
    event.preventDefault();
    
    try{
      console.log('body',initialValues)
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/team-requests/`,initialValues)

      console.log(response)

      navigate("/register/success");
    }catch(error){

      console.log(error)
      if (error.response.status == 400){
        setErrors(error.response.data)
      }
    }
  }
  return (
    <div className="login-card">
          <h2>Register for Team</h2>
          {/* <img src={'https://picsum.photos/200'} alt="Player" className="player-image" /> */}
          <form onSubmit={handleSubmit} method='post'>
            <div className="input-group">
            <p className='label' >Team Name</p>
                <input 
                  type="text"
                  name='name'
                  className='login-input'
                  onChange={handleChange}
                  value={initialValues?.name}
                />
            <p className='sm_text red'>{errors?.name}</p>

            </div>

            <div className="input-group">
            <p className='label' >Short Name</p>
                <input 
                type="text" 
                name='short_name'
                maxLength={10} 
                className='login-input'
                onChange={handleChange}
                value={initialValues?.short_name}
                />
            <p className='sm_text red'>{errors?.short_name}</p>

            </div>
            <div className="input-group">
            <p className='label'>Email</p>
              <input
                type="text"
                // placeholder="Email"
                name='email'
                className="login-input"
                required
                onChange={handleChange}
                value={initialValues?.email}
              />
            <p className='sm_text red'>{errors?.email}</p>
            </div>

            <div className="input-group">
            <p className='label'>Phone Number</p>
              <input
                type="text"
                // placeholder="Email"
                name='phone'
                maxLength={10}
                className="login-input"
                required
                onChange={handleChange}
                value={initialValues?.phone}
              />
            <p className='sm_text red'>{errors?.phone}</p>
            </div>

            <div className="input-group">
                <p htmlFor="" className='label'>Address / Location</p>
                <input 
                type="text" 
                name='address'
                className='login-input'
                value={initialValues?.address}
                onChange={handleChange}
                />
            <p className='sm_text red'>{errors?.address}</p>

            </div>

            <div className="input-group">
              <p>{}</p>
            </div>

            <button type="submit" className="login-btn">
              Register
            </button>

            <a href="http://127.0.0.1:8000/login"   className="forgot-password">
              Already Registerd! Login to Panel
            </a>
          </form>
        </div>
  )
}

export default RegisterTeam