import React, { useState } from 'react'
import { FaQuoteLeft } from "react-icons/fa6";
import { NavLink,Link } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa6";
import Button from '../../CommonItem/Button/Button';
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";


const Header = () => {

  const[Isshow,setIsshow] = useState(false);
  // Handleshow function start here 
  const Handleshow = () => {
    setIsshow(!Isshow);
  }
  return (
    <>
      <div className="bg-BgColor">
        <div className="container">
          <div className="flex items-center py-4 justify-between px-4 px-lg-0">
            <div className="flex items-center gap-x-32">
              <div className="flex items-center">
                <span className="font-bold text-CommonColor text-3xl text-blue-400 -mt-2">
                  <FaQuoteLeft />
                </span>
                <h2 className="text-CommonColor font-bold font-FontFamily text-xl flex items-center">
                  Coder <h3 className="text-BtnColor">Mahmudul</h3>
                </h2>
              </div>
              <div
                className={`absolute lg:static flex-col lg:flex-row ${
                  Isshow
                    ? "left-0 top-16 bg-gray-600 flex  w-full text-center"
                    : "flex left-[-100%]  items-center gap-x-6"
                }`}
              >
                <div>
                  <NavLink
                    to={"/"}
                    className={
                     ` text-CommonColor font-FontFamily focus:text-BtnColor ${Isshow && "hover:bg-BtnColor w-full py-1"}`
                    }
                  >
                    Home
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to={"/"}
                    className={
                      `text-CommonColor font-FontFamily focus:text-BtnColor  ${Isshow && "hover:bg-BtnColor w-full py-1"}`
                    }
                  >
                    Services
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to={"/about"}
                    className={
                      `text-CommonColor font-FontFamily focus:text-BtnColor  ${Isshow && "hover:bg-BtnColor w-full py-1"}`
                    }
                  >
                    About
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to={"/contact"}
                    className={
                      `text-CommonColor font-FontFamily focus:text-BtnColor  ${Isshow && "hover:bg-BtnColor w-full py-1"}`
                    }
                  >
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
            <div className="flex items-center gap-x-10">
              <div className="flex items-center gap-x-1">
                <span className="text-red-400">
                  <FaFilePdf />
                </span>
                <a
                  href="Mahmudul Hasan.pdf"
                  download={"Mahmudul Hasan.pdf"}
                  className="underline text-CommonColor font-semibold hover:text-red-400"
                >
                  Cv Download
                </a>
              </div>
              <div>
                <Button
                  className={
                    "bg-BtnColor py-2 px-10 rounded-md text-CommonColor font-bold"
                  }
                  title={"Hire Me"}
                />
              </div>
            </div>
            </div>
            <div
              className="cursor-pointer text-CommonColor lg:hidden"
              onClick={Handleshow}
            >
              {Isshow === true ? <RxCross1 className="text-red-400 font-bold"/> : <FaBars />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header
