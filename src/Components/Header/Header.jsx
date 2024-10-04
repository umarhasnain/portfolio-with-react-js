import React from 'react'
import Button from '../Button/Button'
import contactData from '../../utils/constant/contact'

const Header = () => {
  return (
    <div className='flex justify-evenly items-center flex-wrap p-6'>
        {/* Logo Section */}
      <div className="logo">
        
        <div className='flex gap-2 font-bold italic font-serif'>
          {contactData.name}
         
        </div>

      </div>

      {/* Navlinks Section */}
      <div >
        <ul className='flex gap-4 flex-wrap	m-4'>
            <li>About Me</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact Me</li>
        </ul>
      </div>

     
      <Button/>
    </div>
  )
}

export default Header
