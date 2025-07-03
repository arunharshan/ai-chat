import React, { useState,useEffect } from 'react';
import Header from '../../components/header/Header';
import {useAuthorization}  from '../../context/AuthContext';
import { useNavigate  } from 'react-router-dom';
import './login.scss'

type UserTypes = {
  email:string,
  password:string,
  isloading:boolean,
  message?:string,
  error?:string,
}
const Login:React.FC = () => {  
  const navigate = useNavigate();
  const { token,logInUser } = useAuthorization();
  const [user, setUser] = useState<UserTypes>({
    email:'',
    password:'',
    isloading:false,
    message: '',
    error:'',
  });
  useEffect(() => {
    if(token?.id)
   navigate('/');
  }, [token])
  const loginHandler = async(e:React.FormEvent) => {
    e.preventDefault();
      setUser({ ...user, isloading: true, error: '', message: '' });
    try {
      const resp = await fetch('http://localhost:5001/login',{
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
          email: user.email,
          password: user.password
        })
      });
      const data = await resp.json();
      if (resp.ok) {
      setUser({ ...user, isloading: false, message: data.message || 'Login successful' });
      logInUser(data.user);
      navigate('/');
    } else {
      setUser({ ...user, isloading: false, error: data.error || 'Login failed' });
    }
      
    } catch (error) {
      setUser({
        ...user,isloading: false,
        error: error instanceof Error ? error.message : 'An unknown error occurred',
      })
    }
  }

  
  return (
    <div className='login'>
      <Header/>
      <section className="login__body" aria-label="Login form">
        <div className='login__container'>
        <h1>Login</h1>
        <div className='ai-toast ai-toast--message'>
          email: arun@test.com <br/>
          password: test
        </div>
        {
          user.message && <div className='ai-toast ai-toast--success'>
            {user.message}
          </div>
}
          {user.error && <div className='ai-toast ai-toast--alert'>
            {user.error}
          </div>
        }
        <form onSubmit={loginHandler}>
          <div className="login__form-group">
          <label htmlFor="email">Email</label>
          <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          placeholder="arun@test.com"
          value={user.email}
          onChange={(e)=> {
            setUser({
              ...user,
              email:e.target.value
            })
          }
          }
          />
          </div>
        <div className="login__form-group">
        <label htmlFor="password">Password</label>
        <input 
        type="password" 
        id="password" 
        name="password" 
        required
        placeholder="Enter your password"
        value={user.password}
        onChange={
          (e)=>{
            setUser({
              ...user,
              password:e.target.value
            })
          }
        }
        />
        </div>
        <button type="submit">Log In</button>
        <div className="login__form-footer">
          <small>Sign up page in progress</small>
        </div>
        </form>
        </div>
      </section>
    </div>
  )
}

export default Login