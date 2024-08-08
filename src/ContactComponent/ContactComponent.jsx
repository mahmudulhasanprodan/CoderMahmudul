import React from 'react'
import ContactLogo from "../assets/Contact2.png"
import Button from '../CommonItem/Button/Button';
import Location from '../CommonItem/ContactItem/Location';

const ContactComponent = () => {
  return (
    <>
      <div className="bg-BgColor">
        <div className="container">
          <div className="py-16">
            <h2 className="font-FontFamily font-bold text-3xl text-BtnColor mb-10 px-4 lg:px-0">
              Contact Me
            </h2>
          </div>
          <div className="flex py-20 gap-x-2 ">
            <div className="w-1/2 h-[700px] hidden lg:block">
              <picture>
                <img
                  src={ContactLogo}
                  alt={ContactLogo}
                  className="w-[500px] h-[700px]"
                />
              </picture>
            </div>
            <div className="w-full lg:w-1/2 bg-blue-200 lg:bg-CommonColor h-[700px] rounded-md shadow-lg px-4 lg:px-4">
              <div className="py-6">
                <h2 className="font-FontFamily font-bold text-3xl flex items-center justify-center">
                  Send me a message
                </h2>
              </div>
              <div className="pt-3">
                <div className="flex items-center justify-center">
                  <label
                    htmlFor="messege"
                    className="font-FontFamily text-lg font-bold text-[#465979] w-full lg:w-[500px] pb-1"
                  >
                    First Name*
                  </label>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <input
                    className="w-full lg:w-[500px] py-3 bg-gray-200 pl-3 focus:border-[3px] focus:border-blue-400 rounded-sm"
                    type="text"
                    name="FirstName"
                    id="FirstName"
                    placeholder="Enter your first name here..."
                  ></input>
                </div>
              </div>
              {/* last name here  */}
              <div className="pt-3">
                <div className="flex items-center justify-center">
                  <label
                    htmlFor="messege"
                    className="font-FontFamily text-lg font-bold text-[#465979] w-full lg:w-[500px] pb-1"
                  >
                    Last Name
                  </label>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <input
                    className="w-full lg:w-[500px] py-3 bg-gray-200 pl-3 focus:border-[3px] focus:border-blue-400 rounded-sm"
                    type="text"
                    name="LastName"
                    id="LastName"
                    placeholder="Enter your last name here..."
                  ></input>
                </div>
              </div>
              {/* last name here  */}
              {/* Email here  */}
              <div className="pt-3">
                <div className="flex items-center justify-center">
                  <label
                    htmlFor="messege"
                    className="font-FontFamily text-lg font-bold text-[#465979] w-full lg:w-[500px] pb-1"
                  >
                    Email*
                  </label>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <input
                    className="w-full lg:w-[500px] py-3 bg-gray-200 pl-3 focus:border-[3px] focus:border-blue-400 rounded-sm"
                    type="email"
                    name="Email"
                    id="Email"
                    placeholder="Enter your email here..."
                  ></input>
                </div>
              </div>
              {/* Email here  */}

              <div className="pt-3">
                <div className="flex items-center justify-center">
                  <label
                    htmlFor="messege"
                    className="font-FontFamily text-lg font-bold text-[#465979] w-full lg:w-[500px] pb-1"
                  >
                    Number
                  </label>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <input
                    className="w-full lg:w-[500px] py-3 bg-gray-200 pl-3 focus:border-[3px] focus:border-blue-400 rounded-sm"
                    type="number"
                    name="Number"
                    id="Number"
                    placeholder="Enter your number here..."
                  ></input>
                </div>
              </div>

              <div className="pt-3">
                <div className="flex items-center justify-center">
                  <label
                    htmlFor="messege"
                    className="font-FontFamily text-lg font-bold text-[#465979] w-full lg:w-[500px] pb-1"
                  >
                    Write Your Comment
                  </label>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <textarea
                    className="w-full lg:w-[500px] min-h-20 bg-gray-200 pl-3 focus:border-[3px] focus:border-blue-400 rounded-sm"
                    name="message"
                    id="message"
                    placeholder="Messege here"
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-center pt-10 cursor-pointer">
                <Button
                  className={
                    "py-3 w-[320px] lg:w-[500px] bg-blue-400 font-bold text-CommonColor text-xl rounded-md hover:bg-BtnColor"
                  }
                  title={"Send Messege"}
                />
              </div>
            </div>
          </div>
            <Location />        
        </div>
      </div>
    </>
  );
}

export default ContactComponent
