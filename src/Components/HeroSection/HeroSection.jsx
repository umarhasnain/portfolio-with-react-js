import React from 'react'
import HeroSecData from '../../utils/constant/HeroSection'
// import "./heroSection.css"

const HeroSection = () => {
    console.log(HeroSecData);
    const {tittle,possition,discription} = HeroSecData
    
  return (
    <div className='flex justify-center items-center m-20'>
                     
        {/* Text Section */}
      <div className="w-1/2 font-8">
        <h1>{tittle}</h1>
        <h2>{possition}</h2>
        <p>{discription}</p>

      </div>
      {/* Img Section */}
      <div>
        <img src="./assets/imgs/boy1.svg" />
      </div>
    </div>
  )
}

export default HeroSection
