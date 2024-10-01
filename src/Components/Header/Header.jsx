import React from 'react'
import "./header.css"
import Button from '../Button/Button'
const Header = () => {
  return (
    <div className='flex justify-evenly items-center flex-wrap p-6'>
        {/* Logo Section */}
      <div className="logo">
        
        <div className='flex gap-2 font-bold'>
          <h4 className='bold'><span>U</span>mar</h4>
          <h4><span>H</span>asnain</h4>
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

      {/* ResumeBtn In Navlinks */}
      <Button/>
    </div>
  )
}

export default Header
