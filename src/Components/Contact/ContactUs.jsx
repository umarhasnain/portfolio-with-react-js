import React from 'react'
import contactData from '../../utils/constant/contact'

const ContactUs = () => {
  return (
    <div>
      <div className='flex justify-center flex-wrap p-12'>
        <div className='flex flex-col w-96'>
            <input className='h-8 w-72 border-2 rounded m-2 p-2'   type="text" placeholder='Your Name' />
            <input  className='h-8 w-72 border-2 rounded m-2 p-2'  type="text" placeholder='Email'/>
            <input   className='h-8 w-72 border-2 rounded m-2 p-2'  type="text" placeholder='Your Website (If exists)'/>
            <input   className='h-20 w-72 border-2 rounded m-2 p-2' type="text" placeholder='How Can I Help You??'/>
            <div className='flex gap-2'>
                <button className='h-8 w-24 bg-black text-white rounded'>Get in Touch</button>
                <button className='h-8 w-10 bg-black text-white rounded'>FB</button>
                <button className='h-8 w-10 bg-black text-white rounded'>Ing</button>
                <button className='h-8 w-10 bg-black text-white rounded'>In</button>
                <button className='h-8 w-10 bg-black text-white rounded'>GH</button>
            </div>
        </div>


        <div className='w-96'>
            <h1 className='font-bold text-3xl w-72 m-2'>{contactData.tittle}</h1>
            <p>{contactData.discription}</p>
            <h5 className='font-bold mt-2 mb-2'>{contactData.email}</h5>
            <h5 className='font-bold'>{contactData.number}</h5>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
