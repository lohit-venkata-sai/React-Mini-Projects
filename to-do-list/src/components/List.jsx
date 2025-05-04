import React from 'react'

const List = ({index,value, setList}) => {
  const removeElement = (index)=>{
    setList(prevList=>prevList.filter((_,ind)=>ind!==index))
  }
  return (
    <div className='bg-yellow-400 p-5 rounded-md flex justify-between'>
      <div className=''>{value}</div>
      <button className='cursor-pointer'  
              onClick={()=>removeElement(index)}>
              &#10006;
      </button>
    </div>
  )
}

export default List
