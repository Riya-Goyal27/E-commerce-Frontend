import React from 'react'
import Path from './Path'
import Header from './Header'

const Login = ({cartItems}) => {
  return (
    <>
      <Header cartItems={cartItems} />
      <Path title='login' />
      <div className='w-laptop mx-auto py-20 max-w-maxw min-h-minh'>
        <h1 className='text-2.5 text-center'>Login Page !</h1>
      </div>
    </>
  )
}

export default Login