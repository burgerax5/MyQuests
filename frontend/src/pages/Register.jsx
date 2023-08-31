import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AdventurersGuild from '../images/adventurers_guild.png'

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { username, email, password, confirmPassword } = formData

  const onChange = (e) => {
    setFormData(oldFormData => ({
      ...oldFormData, [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="login-book">
      <img src={AdventurersGuild}/>
      <h1>Register</h1>
      <form className="form">
        <input type="text" className="input-field" placeholder='Username' id="username" name="username" value={ username } onChange={onChange} />
        <input type="email" className="input-field" placeholder='Email' id="email" name="email" value={ email } onChange={onChange} />
        <input type="password" className="input-field" placeholder='Password' id="password" name="password" value={ password } onChange={onChange} />
        <input type="password" className="input-field" placeholder='Confirm Password' id="confirmPassword" name="confirmPassword" value={ confirmPassword } onChange={onChange} />
        <button className="form-btn">Sign Up</button>
      </form>
      <Link to='/login'>ALREADY HAVE AN ACCOUNT</Link>
    </div>
  )
}

export default Register