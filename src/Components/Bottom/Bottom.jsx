import React from 'react'
import './Bottom.css'
import { SignalFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Bottom = () => {
  return (
   <div className='bottom'>
      <p className='signal'><SignalFilled className='sign'/><span>Flex</span></p>
      <div className="cont">
        <Link className='a'>Product</Link>
        <Link className='a'>Features</Link>
        <Link className='a'>Pricing</Link>
        <Link className='a'>Resoures</Link>
        <Link className='a'>Corects</Link>
        <Link className='a'>Help</Link>
        <Link className='a' to='/reg'>Account</Link>
      </div>
      <p className='www'>@ 2021 Flex. All rights reserved</p>
   </div>
  )
}

export default Bottom