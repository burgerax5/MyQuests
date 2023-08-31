import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AdventurersGuild from '../images/adventurers_guild.png'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

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
      <h1>Login</h1>
      <form className="form">
        <input type="email" className="input-field" placeholder='Email' id="email" name="email" value={ email } onChange={onChange} />
        <input type="password" className="input-field" placeholder='Password' id="password" name="password" value={ password } onChange={onChange} />
        <button className="form-btn">Sign In</button>
      </form>
      <Link to='/'>FORGOT PASSWORD</Link>
      <Link to='/register'>CREATE AN ACCOUNT</Link>
    </div>
  )
}

export default Login