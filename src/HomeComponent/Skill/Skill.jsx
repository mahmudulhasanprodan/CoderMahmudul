import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { FaFireFlameCurved } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";


const Skill = () => {
  return (
    <>
      <div className="bg-BgColor">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-y-3 pt-20 lg:pt-10">
            <h2 className="text-CommonColor text-5xl font-bold font-FontFamily">
              Hard Skills
            </h2>
            <p className="text-CommonColor font-FontFamily px-4 lg:px-0 text-justify lg:none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              nam quod voluptatum enim aliquid.
            </p>
          </div>

          <div className="flex items-center pb-10 gap-x-5 flex-wrap gap-y-5 justify-center pt-16">
            <div className="w-full md:w-[360px] h-[225px] bg-SkillColor flex flex-col items-center justify-center gap-y-3 cursor-pointer hover:bg-blue-600">
              <span className="text-BtnColor text-7xl">
                <FaHtml5 />
              </span>
              <p className="font-FontFamily text-CommonColor font-bold text-2xl">
                HTML5
              </p>
              <h3 className="w-14 h-[2px] bg-BtnColor"></h3>
            </div>
            <div className="w-full md:w-[360px] h-[225px] bg-SkillColor flex flex-col items-center justify-center gap-y-3 cursor-pointer hover:bg-blue-600">
              <span className="text-BtnColor text-7xl">
                <FaCss3Alt />
              </span>
              <p className="font-FontFamily text-CommonColor font-bold text-2xl">
                CSS
              </p>
              <h3 className="w-14 h-[2px] bg-BtnColor"></h3>
            </div>
            <div className="w-full md:w-[360px] h-[225px] bg-SkillColor flex flex-col items-center justify-center gap-y-3 cursor-pointer hover:bg-blue-600">
              <span className="text-BtnColor text-7xl">
                <FaJava />
              </span>
              <p className="font-FontFamily text-CommonColor font-bold text-2xl">
                JS
              </p>
              <h3 className="w-14 h-[2px] bg-BtnColor"></h3>
            </div>
            <div className="w-full md:w-[360px] h-[225px] bg-SkillColor flex flex-col items-center justify-center gap-y-3 cursor-pointer hover:bg-blue-600">
              <span className="text-BtnColor text-7xl">
                <FaReact />
              </span>
              <p className="font-FontFamily text-CommonColor font-bold text-2xl">
                React js
              </p>
              <h3 className="w-14 h-[2px] bg-BtnColor"></h3>
            </div>
            <div className="w-full md:w-[360px] h-[225px] bg-SkillColor flex flex-col items-center justify-center gap-y-3 cursor-pointer hover:bg-blue-600">
              <span className="text-BtnColor text-7xl">
                <FaCss3 />
              </span>
              <p className="font-FontFamily text-CommonColor font-bold text-2xl">
                Tailwindcss
              </p>
              <h3 className="w-14 h-[2px] bg-BtnColor"></h3>
            </div>
            <div className="w-full md:w-[360px] h-[225px] bg-SkillColor flex flex-col items-center justify-center gap-y-3 cursor-pointer hover:bg-blue-600">
              <span className="text-BtnColor text-7xl">
                <FaFireFlameCurved />
              </span>
              <p className="font-FontFamily text-CommonColor font-bold text-2xl">
                Firebase
              </p>
              <h3 className="w-14 h-[2px] bg-BtnColor"></h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill
