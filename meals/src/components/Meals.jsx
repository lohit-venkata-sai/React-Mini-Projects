import React from 'react'

const Meals = ({title, imgSrc , mealId}) => {
  return (
    <div className='w-64 flex flex-col items-center max-w-sm mx-auto bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 p-2 border cursor-pointer'>
    <img className="w-full h-54 object-cover rounded-xl " src={imgSrc} alt="image" />
        <p className='font-semibold mt-2 h-12 text-center'>{title}</p>
        <mark>#{mealId}</mark>
    </div>
  )
}

export default Meals
