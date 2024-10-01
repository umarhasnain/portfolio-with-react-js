import React from 'react'
import testData from '../../utils/constant/testonomialData'

const Testonomial = () => {
    console.log(testData);
    
  return (
      <div className=''>
        <h1 className='flex justify-center items-center m-6 p-2 mb-2 text-3xl text-black font-bold'>Testimonials</h1>
       <div className='flex justify-center'>
       <div className='flex  items-center flex-wrap gap-6 m-8'>
            {
                testData.map((items, index) => (
                    <div key={index} className='flex justify-center items-center flex-col shadow-md w-72 h-96 rounded bg-white border-2 text-black text-center'>
                        <img className='h-32 w-28 p-2 mb-4' src={items.img} alt="" />
                        <p className='border-b-2 pb-6 p-4'>{items.description}</p> 
                        <hr />
                        <h2 className='mt-4 text-3xl'>{items.name}</h2>
                        <p>{items.tittle}</p>
                    </div>
                ))
            }
        </div>
   
       </div>
      
    </div>
  )
}

export default Testonomial
