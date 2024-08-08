import React from 'react'
import { FaQuoteLeft } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
      <div className="bg-FooterColor py-20">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 justify-between items-start">
            <div className="flex items-center px-4 lg:px-0">
              <span className="font-bold text-CommonColor text-3xl text-blue-400 -mt-2">
                <FaQuoteLeft />
              </span>
              <h2 className="text-CommonColor font-bold font-FontFamily text-xl flex items-center">
                Coder <h3 className="text-BtnColor">Mahmudul</h3>
              </h2>
            </div>
            <div className="w-96 hidden lg:block">
              <p className="text-CommonColor font-FontFamily">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                vel ullam numquam nemo, deleniti repudiandae?
              </p>
            </div>
            <div className="hidden lg:block">
              <h2 className="font-FontFamily font-bold text-CommonColor text-2xl">
                Lets Talk
              </h2>
              <p className="font-FontFamily text-CommonColor italic pt-2 cursor-pointer">
                mahmudulhasan8627@gmail.com
              </p>
            </div>
            <div className="flex flex-col w-full items-center justify-center lg:max-w-fit">
              <div>
                <h2 className="font-FontFamily font-bold text-CommonColor text-2xl">
                  Stay Connected
                </h2>
              </div>
              <div className="flex item-center px-4 lg:px-0 gap-x-3 pt-2 text-CommonColor  cursor-pointer text-xl hover:text-CommonColor">
                <FaSquareFacebook className="hover:text-BtnColor" />
                <FaSquareTwitter className="hover:text-BtnColor" />
                <FaLinkedin className="hover:text-BtnColor" />
                <FaSquareInstagram className="hover:text-BtnColor" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-CommonColor" />
    </>
  );
}

export default Footer
