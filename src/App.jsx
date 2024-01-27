import React from 'react'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import Body from './Components/Body'

const App = () => {
  return (
    <div className='bg-[#14131A] text-white overflow-hidden'>
      <Header/>
      <div className='flex '>
        <div  className='w-[20%]  -mt-10' >
        <SideBar  />
        </div>
        <div className='w-[80%] m-5'>
        <Body />
        </div>
      </div>
    </div>
  )
}

export default App