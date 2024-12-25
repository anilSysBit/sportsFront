import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const OtpValidation = () => {
    const [buttonLoader,setButtonLoader] = useState(false);

    const [otp, setOtp] = useState(["", "", "", "",]); // Array to store OTP digits
    const inputRefs = useRef([]);
 
    const navigate = useNavigate();

   // Function to handle input change
   const handleChange = (index, event) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value;
    setOtp(newOtp);

    // Move focus to the next input field if a digit is entered
    if (event.target.value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Function to handle backspace key
  const handleBackspace = (index, event) => {
    if (event.key === 'Backspace' && index > 0 && !otp[index]) {
      inputRefs.current[index - 1].focus();
    }
  };



  const handleSubmitOtpValidation =(e)=>{
    e.preventDefault();
    setButtonLoader(true);
      navigate("/join-now/change-password")
  }

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  return (
    <div className="login-card">
        <style jsx>{`
            .otp-container {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.otp-box {
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 24px;
  background-color:transparent;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;
}

.otp-box:focus {
  border-color: #007bff;
}

.otp-box:invalid {
  border-color: red;
}
        `}</style>
    <h2>Verify Your OTP</h2>
    {/* <img src={'https://picsum.photos/200'} alt="Player" className="player-image" /> */}
    <form onSubmit={handleSubmitOtpValidation}>
    <div className="otp-container">
      {otp.map((digit, index) => (
         <input
         key={index}
         type="text"
         maxLength="1"
         value={digit}
         onChange={(e) => handleChange(index, e)}
         onKeyDown={(e) => handleBackspace(index, e)}
         ref={(ref) => (inputRefs.current[index] = ref)} // Assign ref to input field
         className="otp-box"
       />
      ))}
    </div>

      <button type="submit" className="login-btn mt-10">
        Verify
      </button>

      <a href="/forgot-password" className="forgot-password">
        New Team ! Register as New Team
      </a>
    </form>
  </div>
  )
}

export default OtpValidation