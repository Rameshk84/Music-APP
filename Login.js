import React from 'react'
import './Login.css'
import { loginUrl } from './spotify'


export default function Login() {
  return (
    <div className='login'>
      <img className='spotify__logo' src='https://i.pinimg.com/originals/ab/04/74/ab047407148e53e2c3ad0761af494925.jpg' />

      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}
  