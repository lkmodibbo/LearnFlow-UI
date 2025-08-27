import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
     // State to hold the entered email
    const [email, setEmail] = useState('');
     // State to track if the form has been submitted
    const [submitted, setSubmitted] = useState(false);

      // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true); // Set the submission
        console.log("Request Submitted to", email)
    }
  return (
    <div className='auth-container'>
        <h2>Reset Your Password</h2>
        {!submitted ? (
            <form onSubmit={handleSubmit} className='auth-form'>
                <input 
                    type='email' 
                    placeholder='Enter The Email You Registered with'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
        <button>Send Reset Link</button>
    </form>

) : (
    <p style={{ textAlign: 'center', color: '#4f8ef7'}}>
         If an account with this email exists, a password reset link has been sent.
    </p>
)}
    <div className="authcontainer">
        <p>Remebered Your password? <Link to='/login'>Back to Login</Link></p>
    </div>
</div>
  )
}

export default ForgetPassword
