import React from 'react'
import { IoPersonOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className='flex flex-row justify-between  mx-auto  sticky top-0 z-10 bg-[#14131A]' >
        <div className='gap-6 pt-5 pl-6 '>
            <div className='fill-[#ffffff] bg-[#2BD576] h-4 w-4 inline-block rounded-full mx-3'>  </div>
            <div className='fill-[#ffffff] bg-[#2BD576] h-4 w-4 inline-block rounded-full'>  </div>

        </div>
        <div className='p-6'>
            <button className=' bg-[#207448] p-2 rounded-lg flex gap-5 items-center hover:bg-[#28D576] mr-8 text-[16px]'>Contact Me <IoPersonOutline/></button>
        </div>
    </div>
  )
}

export default Header