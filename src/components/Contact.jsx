import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({name: "", message: ""});
  const [status, setStatus] = useState("");
  const [sureState, setSureState] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleCheckboxChange = (e) => {
    setSureState(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post("https://srizan.me/api/messages", formData);
      console.log("Response from server:", response);
      setStatus(response.data.message);
      setFormData({name: "", message: ""});
      setSureState(false);
      toast.success("Message sent successfully!");
    }
    catch(error){
      const msg = "Something went wrong!";
      toast.error(msg);
    }
  };

    return (
        <>
        {/* This is a section for my contact information */}
        <div className="w-full my-10 md:mt-6">
            <h2 className="w-full text-center text-3xl text-white md:text-5xl font-['headerFont']">Let's Make a Connection</h2>
            <span className="w-full block text-center text-[15px] md:text-xl font-['codeFont'] text-gray-400 font-semibold">You can check it out following social media accounts or contact details for any queries.</span>
            <div className="w-full mt-10 grid gap-0 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 rounded-xl overflow-hidden">

               {/* This is a section for my contact details */}
                <section className="contact_section bg-[#00000025] backdrop-blur-[20px] p-5 font-['codeFont'] md:border-r-2 border-gray-800">
                    <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-5">Contact Details</h2>
                    <ul className="w-full text-[1.2pc] md:text-xl font-semibold flex flex-col gap-4 mt-3">
                        <li><Link to="/contact" className="flex items-center text-[#abcfff] whitespace-break-spaces"><FaLinkedin className="text-4xl text-blue-600" /> Make a Connection</Link></li>
                        <li><Link to="/contact" className="flex items-center text-[#abcfff] whitespace-break-spaces"><FaGithub className="text-4xl text-gray-400" /> Let's Collaborate</Link></li>
                        <li><Link to="/contact" className="flex items-center text-[#abcfff] whitespace-break-spaces"><IoIosMail className="text-4xl text-gray-400" /> srijanlimbu355@gmail.com</Link></li>
                        <li><Link to="/contact" className="flex items-center text-[#abcfff] whitespace-break-spaces"><FaWhatsappSquare className="text-4xl text-green-400" /> 9745262729</Link></li>
                    </ul>
                    <h3 className="w-full text--[1.2pc] md:text-xl text-justify text-gray-400 font-semibold mt-10"><span className="font-serif">Note:</span> As being an introvert, my mind behaves null with strangers. Trying to overcome my mental issue. I confess the weaken point of me. Love to progress in silence, Yet a normal guy dreaming the future.</h3>
                </section>

                {/* This is a section for my message form */}
                <section className="message_form bg-[#00000022] backdrop-blur-[20px] p-5 font-['codeFont']">
                    <h2 className="w-full text-center text-2xl text-white md:text-3xl font-semibold">Wanna Send Me a Message !</h2>
                    <h5 className="w-full text-center text-white text-xl font-semibold">Here, you go <FaArrowDown className="inline-block" /></h5>

{/* This is a message form */}
<form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
  <div className="mb-5">
    <label htmlFor="name" className="block mb-2 text-xl font-medium text-gray-100 dark:text-white">Your Name</label>
    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="bg-gray-90 border border-gray-500 text-gray-100 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-1 dark:outline-1 shadow-lg dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required />
  </div>
  <div className="mb-5">
    <label htmlFor="msg" className="block mb-2 text-xl font-medium text-gray-100 dark:text-white">Your Message</label>
    <textarea id="msg" name="message" value={formData.message} onChange={handleChange} rows="4" className="bg-gray-90 border border-gray-500 text-gray-100 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-1 dark:outline-1 shadow-lg dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Message" required></textarea>
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="sure" type="checkbox" checked={sureState} onChange={handleCheckboxChange} className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label htmlFor="sure" className="ms-2 text-white text-md font-semibold">Are you sure to send?</label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-xl w-full sm:w-auto px-5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
</form>

                </section>
            </div>
        </div>
        </>
    )
}