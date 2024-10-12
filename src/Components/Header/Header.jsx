import React from 'react'
import './Header.css'
import { MailOutlined, MenuUnfoldOutlined, PhoneOutlined } from '@ant-design/icons'
import q from './1.png'
import w from './2.png'
import e from './3.png'
import r from './4.png'

const Header = () => {
  return (
    <div className='header'>
        <div className="text">
            <div className="pp1">
            <p className='p1'>content</p>
            </div>
            <p className='p2'>Let's stay connected</p>
            <div className="pp3">
            <p className='p3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil assumenda distinctio nulla adipisci maxime perspiciatis, dolor eveniet nisi ipsam animi cum modi, laboriosam molestiae quasi dolore iusto eligendi ea placeat.</p>
            </div>
        </div>
        <div className="boxes" >
            <div className="box">
              <div className="boix">
                <div className="icon">
                   <MailOutlined style={{fontSize:"20px",color:"white"}}/>
                </div>
              </div>
                <p className='email'>Email</p>
                <a href="" className='link'>content@gmail.com</a>
            </div>
            <div className="box">
              <div className="boix">
                <div className="icon">
                   <PhoneOutlined style={{fontSize:"20px",color:"white"}}/>
                </div>
              </div>
                <p className='email'>Phones</p>
                <a href="" className='link'>+7-843-672-431</a>
            </div>
            <div className="box">
              <div className="boix">
                <div className="icon">
                   <MenuUnfoldOutlined style={{fontSize:"20px",color:"white"}}/>
                </div>
              </div>
                <p className='email'>Socials</p>
                  <div className="icons">
                      <img src={q} className='rm room1' />
                      <img src={w} className='rm room2'/>
                      <img src={e} className='rm room3'/>
                      <img src={r} className='rm room4'/>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Header