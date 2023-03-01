import React, { useState } from 'react'
import './styling/Login.css'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

  return (
    <div className='login'>

        <Link to='/'>
            <h2>Back to Home</h2>
        </Link>

        <div className='login_container'>
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={
                    e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} onChange={
                        e => setPassword(e.target.value)} />

                <button className='login_signInButton'  type='submit' onClick>
                    Sign In
                </button>
            </form>


            <button className='login_registerButton' onClick>
                Create your Account
            </button>
            
        </div>

    </div>
  )
}

export default Login