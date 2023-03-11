import React from 'react'
import "./login.scss"

function Login() {
  return (
    <div className='login'>
        <form action="">
            <h2 className='form__Title'>Registration</h2>
            <input type="text" placeholder='Enter your name' />
            <input type="email" placeholder='Enter your email' />
            <input type="password" placeholder='Enter your password' />
            <input type="password" placeholder='Confirm your password' />

            <button type='submit' className='form__btn'>Check in</button>
        </form>
    </div>
  )
}

export default Login