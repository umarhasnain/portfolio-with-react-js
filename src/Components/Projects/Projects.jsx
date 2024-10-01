import React from 'react'
import expData from '../../utils/constant/experience'

const Projects = () => {
  return (
    <div className='bg-black mt-12 mb-12 p-4'>
      <div>
        <h1 className='flex justify-center items-center flex-wrap m-2 p-2 mb-12 text-2xl text-white font-bold'>My Projects</h1>
        {
            expData.map((items, index) => (
              <div key={index} className='flex justify-center flex-wrap items-center gap-8 mb-8 '>
                <div className='w-96 border-2 rounded-md'>
                    <img src={items.logo}/>
                </div>
               <div className='w-96  text-md p-4 m-2 text-gray-200'>
               <h1 className='m-2 text-2xl text-white'>{items.id}</h1>
               <h2 className='p-4 text-3xl text-white bold'>{items.subTittle}</h2>
                <p className='mb-4'>{items.discription}</p>
                <a href={items.link}>Visit Site</a>
               </div>

              </div>
            ))

          
        }
      </div>
    </div>
  )
}

export default Projects
