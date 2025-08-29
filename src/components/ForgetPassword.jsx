import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// Styled Components
const AuthContainer = styled.div`
  max-width: 350px;
  margin: 100px auto;
  padding: 1.5rem;
  background: #fff;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: #333;
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    padding: 0.7rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 0.8rem;
  }

  button {
    padding: 0.7rem;
    background-color: black;
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const Message = styled.p`
  text-align: center;
  color: black;
`

const Footer = styled.div`
  margin-top: 1.5rem;
  font-size: 0.9rem;

  a {
    color: black;
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// Component
const ForgetPassword = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    console.log('Request Submitted to', email)
  }

  return (
    <AuthContainer>
      <Title>Reset Your Password</Title>
      {!submitted ? (
        <AuthForm onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter The Email You Registered with"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button>Send Reset Link</button>
        </AuthForm>
      ) : (
        <Message>
          If an account with this email exists, a password reset link has been sent.
        </Message>
      )}
      <Footer>
        <p>
          Remembered your password? <Link to="/login">Back to Login</Link>
        </p>
      </Footer>
    </AuthContainer>
  )
}

export default ForgetPassword