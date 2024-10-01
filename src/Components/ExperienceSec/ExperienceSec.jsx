import expData from "../../utils/constant/experience"


const ExperienceSec = () => {
    console.log(expData);
    
  return (
    <div className="flex justify-center items-center flex-wrap flex-col bg-black p-20 mb-14">
        <h1 className="text-white text-2xl p-2 border-2 mb-8">My Experience</h1>
      {
        expData.map((item, index) => (
          <div key={index} className="justify-center flex-wrap border-2 rounded bg-white p-4 m-2">
            <div  className="flex justify-between items-center flex-wrap  gap-24">
           <div className="flex gap-4 items-center flex-wrap">
           <img className="w-14 h-12" src={item.logo} />
           <h4 >{item.tittle}</h4>
           </div>
            <p>{item.date}</p>
            </div>
            <h3 className="font-bold">{item.subTittle}</h3>
            <p>{item.discription}</p>
          </div>
        ))
      }
    </div>
  )
}

export default ExperienceSec
