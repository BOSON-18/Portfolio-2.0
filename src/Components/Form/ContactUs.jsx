import React from "react";
import { useFormik } from "formik";
import Cover from "../../assets/Contact.jpg";
import Header from "../Header";
import SideBar from "../SideBar";
import Contact from '../../assets/Contactus.lottie'
import { DotLottiePlayer } from "@dotlottie/react-player";

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  return (
    <div className=" flex flex-row ml-8   items-center justify-between  rounded-xl opacity-80  bg-[#1c1b23] p-10 mr-5 gap-x-11  ">
      <div>
        <DotLottiePlayer src={Contact} loop autoplay className="w-[400px]"></DotLottiePlayer>
      </div>
      <span className="flex flex-col">
      <div>
        <h1 className="text-4xl text-white font-semibold p-5 text-center">
          DISCUSS A PROJECT OR JUST WANT TO SAY HI?
          <br /> <span className="">MY INBOX IS OPEN FOR ALL..!</span>
        </h1>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-between text-center "
      >
        <span className="m-5  ">
          <input
            id="name"
            type="text"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className=" w-[30%] mx-5 border-b-4 text-white border-white  outline-none bg-transparent"
          />

          <input
            id="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email"
            className="w-[40%] mx-5 border-b-4 text-white border-white  outline-none bg-transparent"
          />
        </span>

        <span className="m-5  ">
          <input
            id="phone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phone}
            placeholder="Phone"
            className="w-[30%] mx-5 border-b-4 text-white border-white  outline-none bg-transparent"
          />

          <input
            id="subject"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.subject}
            placeholder="Subject"
            className="w-[40%] mx-5 border-b-4 text-white border-white  outline-none bg-transparent"
          />
        </span>
        <span>
          <input
            id="message"
            type="text"
            onChange={formik.handleChange}
            placeholder="Message..."
            value={formik.values.message}
            className="w-9/12 m-3 pl-3 bg-transparent ml-5 border-b-4 text-white border-white  outline-none"
          />
        </span>

        <span className="text-center">
          <button
            type={`${formik.isSubmitting}?"submit":"null"`}
            className="bg-orange-400 rounded-2xl text-center p-1 m-5 w-[40%]"
          >
            Submit
          </button>
        </span>
      </form>
      </span>
    </div>
  );
};

export default ContactUs;
