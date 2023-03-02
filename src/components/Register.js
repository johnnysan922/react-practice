import React, {useState} from 'react'
import './styling/Register.css'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate();
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

  return (
    <div className='register'>
        <Link to='/'>
            <h2>Back to Home</h2>
        </Link>

        <div className='register_container'>
            <h1>Register</h1>
            <form>
                <h5>First Name</h5>
                <input type='text' value={firstName} onChange={
                    e => setFirstName(e.target.value)} />

                <h5>Last Name</h5>
                <input type='text' value={lastName} onChange={
                    e => setLastName(e.target.value)} />
                    
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={
                    e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} onChange={
                        e => setPassword(e.target.value)} />

            </form>


            <button className='register_signInButton'>
                Register
            </button>

            <h4 className='login_text'>
                Already have an account? <Link to='/login'>Login</Link>
            </h4>

            
        </div>
    </div>
  )
}

export default Register