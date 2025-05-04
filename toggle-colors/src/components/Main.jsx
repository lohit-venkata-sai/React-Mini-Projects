import React, { useState } from 'react'

const Main = () => {
    const [color,setColor] = useState('bg-red-400')
  return (
    <div className=' min-h-96 flex flex-col gap-10 items-center text-center justify-center'>
      <div className= {`h-50 w-50 ${color} border-dashed border-2 border-cyan-800  transition-colors duration-400 shadow-lg shadow-blue-500/50 rounded-4xl`}>
      </div>
      <div className='flex flex-row border-emerald-700 justify-between gap-16 border-2 p-4 rounded-2xl '>
        <button className='border-1 px-2 py-1 rounded-md cursor-pointer bg-red-400' onClick={()=>{setColor('bg-red-400')}}>Red</button>
        <button className='border-1 px-2 py-1 rounded-md cursor-pointer bg-green-400' onClick={()=>{setColor('bg-green-400')}}> Green</button>
        <button className='border-1 px-2 py-1 rounded-md cursor-pointer bg-blue-400' onClick={()=>{setColor('bg-blue-400')}}>Blue</button>
      </div>
    </div>
  )
}

export default Main
