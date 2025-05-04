import React from 'react';
import List from './components/List';
import { useState } from 'react';
function App() {
  const [content,setContent] = useState('');
  const [list,setList] = useState([]);

  const addToList=(e)=>{
    e.preventDefault()
    setList((prevList)=>[...prevList,content]);
    setContent('')
  }
  return (
    <>
      <div className='text-center font-bold text-4xl pt-4 text-violet-800'>To-Do-List</div>
      <div className='bg-gray w-screen flex flex-col items-center justify-center'>
        <div className='bg-violet-500 p-2 mt-20 rounded-md flex flex-col gap-10'>
          <div className='bg-yellow-400 p-2 rounded-md'>
            <form onSubmit={(e)=>addToList(e)}>
              <label htmlFor="name" className='font-bold'>Task : </label>
              <input className='border-2 p-2 rounded-2xl' name='name' value={content} onChange={(e)=>setContent(e.target.value)} type="text" placeholder='Next Task'/>
              <button className='bg-yellow-400 text-l p-1 border-2 m-3 rounded-sm cursor-pointer text-purple-800 font-bold' type='submit'>Add</button>
            </form>
          </div>
          {
              list.length>0 && <div className='flex flex-col gap-3'>
              {
                list?.map((val,ind)=> <List key={ind} index = {ind} setList = {setList} value={val}/>)
              }
              </div>
          }
        </div>
        
      </div>
    </>
  )
}

export default App
