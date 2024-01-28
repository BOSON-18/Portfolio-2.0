import React from 'react'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import Body from './Components/Body'
import { useLocation } from 'react-router-dom'
import ContactUs from './Components/Form/ContactUs'

const App = () => {
 
  return (
    <div className='bg-[#14131A] text-white  sticky '>
      <Header location={location} />
      <div className='flex  mt-16'>
        <div  className='w-[20%]  -mt-2' >
        <SideBar  />
        </div>
        <div className='w-[80%] m-5'>
       <Body/>
        </div>
      </div>
    </div>
  )
}

export default App