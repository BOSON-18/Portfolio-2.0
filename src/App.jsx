import React, { Suspense, lazy } from 'react'
const Header =lazy(()=>import('./Components/Header'))
const SideBar= lazy(()=>import('./Components/SideBar'))  
const Body  = lazy(()=>import('./Components/Body'))
import { useLocation } from 'react-router-dom'
import ContactUs from './Components/Form/ContactUs'
import {motion} from 'framer-motion'

const App = () => {
 
  return (

    <Suspense>
    <motion.div initial={{size:0}} animate={{size:1}} transition={{duration:0.5,delay:1}} className='bg-[#14131A] text-white  w-full '>
      
      <Header location={location} />
      
      <div className='flex flex-row  justify-center gap-5 text-white mt-16 max-sm:mt-0'>
        <div  className=' -mt-2 max-sm:hidden lg:w-fit' >
        <SideBar  />
        </div>
        <div className=' mx-auto'>
          {console.log("Body Rendering")}
       <Body/>
        </div>
      </div>
    </motion.div>
    </Suspense>
  )
}

export default App