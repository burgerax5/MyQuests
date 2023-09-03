import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import AdventurersGuild from '../images/adventurers_guild.png'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData(oldFormData => ({
      ...oldFormData, [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email, password
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="login-book">
      <img src={AdventurersGuild}/>
      <h1>Login</h1>
      <form className="form" onSubmit={onSubmit}>
        <input type="email" className="input-field" placeholder='Email' id="email" name="email" value={ email } onChange={onChange} />
        <input type="password" className="input-field" placeholder='Password' id="password" name="password" value={ password } onChange={onChange} />
        <button className="form-btn">
          <div className="form-btn-circle">
            <span className="confirm-circle"></span>
          </div>
          Sign In
        </button>
      </form>
      <Link to='/'>FORGOT PASSWORD</Link>
      <Link to='/register'>CREATE AN ACCOUNT</Link>
    </div>
  )
}

export default Login