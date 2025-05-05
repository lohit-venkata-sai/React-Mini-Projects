import React, { useEffect, useState } from 'react'
import Meals from './meals'

const Main = () => {
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    const fetchData=async()=>{
      try {
        setLoading(true)
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        const res = await response.json();
        console.log(res);
        setData(res?.meals);
        setLoading(false)
      } catch (error) {
        console.log(error.message);
        setLoading(false)
      }
    }
    fetchData()
  },[])
  return (
    <div className='py-2 flex flex-wrap gap-x-10 gap-y-5'>
      {
        loading && <div className='m-0 p-0 min-h-screen min-w-screen flex justify-center items-center font-extrabold text-5xl'>LOADING....</div>
      }
      {
        data.length > 0 && data.map((val,ind)=> <Meals key={ind} title={val.strMeal} imgSrc={val.strMealThumb} mealId={val.idMeal} />)
      }
    </div>
  )
}

export default Main
