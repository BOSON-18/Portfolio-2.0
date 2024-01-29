import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactUs from "./Components/Form/ContactUs.jsx";
import { ToastContainer, toast } from 'react-toastify';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={appRouter}> */}
    <div className="bg-[#14131A]">
      {" "}
      <App />
      <ToastContainer />
    </div>

    {/* </RouterProvider> */}
  </React.StrictMode>
);
