import React, { useRef } from "react";
import { useFormik } from "formik";

import Contact from "../../assets/Contactus.lottie";
import { DotLottiePlayer } from "@dotlottie/react-player";
import emailjs from "@emailjs/browser";
// ContactUs.jsx or ContactUs.vue

const service_ID = import.meta.env.VITE_service_ID;
const template_id = import.meta.env.VITE_template_id;
const user_key = import.meta.env.VITE_public_Key;

// Now you can use serviceID, templateID, and userKey in your code
import {motion} from "framer-motion"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const form = useRef();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    onSubmit: (values) => {
      // console.log("Sending ")
      console.log(values);

      emailjs.sendForm(service_ID, template_id, form.current, user_key).then(
        (result) => {
          //console.log(result.text);
          toast.success("Mail Sent", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          // console.log("success")
        },
        (error) => {
          // console.log(error.text);
          toast.error("Something Went Wrong !", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );

      formik.resetForm();
    },
  });

  return (
    <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:0.8,delay:0.1}} className=" flex flex-row    items-center justify-between  rounded-xl opacity-80  bg-[#1c1b23] p-5   ">
      <div>
        <DotLottiePlayer
          src={Contact}
          loop
          autoplay
          className="w-[400px]"
        ></DotLottiePlayer>
      </div>
      <span className="flex flex-col">
        <div>
          <h1 className="text-4xl text-white font-semibold p-5 text-center">
            DISCUSS A PROJECT OR JUST WANT TO SAY HI?
            <br /> <span className="">MY INBOX IS OPEN FOR ALL..!</span>
          </h1>
        </div>
        <form
          ref={form}
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-between text-center "
        >
          <span className="m-5  ">
            <input
              name="name"
              type="text"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className=" w-[30%] mx-5 border-b-4 text-white border-white  outline-none bg-transparent"
            />

            <input
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="Email"
              className="w-[40%] mx-5 border-b-4 text-white border-white  outline-none bg-transparent"
            />
          </span>

          <span className="m-5  ">
            <input
              name="phone"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.phone}
              placeholder="Phone"
              className="w-[30%] mx-5 border-b-4 text-white border-white  outline-none bg-transparent"
            />

            <input
              name="subject"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.subject}
              placeholder="Subject"
              className="w-[40%] mx-5 border-b-4 text-white border-white  outline-none bg-transparent"
            />
          </span>
          <span>
            <input
              name="message"
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
    </motion.div>
  );
};

export default ContactUs;
