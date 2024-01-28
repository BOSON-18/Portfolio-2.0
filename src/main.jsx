import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ContactUs from './Components/Form/ContactUs.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={appRouter}> */}
      <div className='bg-[#14131A]'> <App /></div>
     
      {/* </RouterProvider> */}

    
  </React.StrictMode>,
)
