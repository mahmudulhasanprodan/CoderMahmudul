import React from 'react'
import Menpic from "../assets/men.jpg"

const AboutComponent = () => {
  return (
    <>
      <div className="bg-BgColor py-20">
        <div className="container">
          <div className="w-full lg:w-2/3 px-4 xl:px-0">
            <h2 className="font-FontFamily font-bold text-3xl text-BtnColor mb-10">
              About Me
            </h2>
            <div className="w-[350px] h-[300px]">
              <picture>
                <img src={Menpic} alt={Menpic} className="w-[350px] h-[300px] pb-3"/>
              </picture>
            </div>
            <span className="font-FontFamily text-md lg:text-xl text-BtnColor ">
              Hi I am Mahmudul Hasan and i am a front-end developer.
            </span>
            <p className="font-FontFamily text-sm lg:text-base text-CommonColor pt-3 text-justify">
              As a Front-End Developer, I specialize in creating intuitive,
              dynamic, and visually engaging user interfaces for web
              applications. My role involves translating design concepts and
              user requirements into functional, high-performance code using a
              range of technologies. I focus on crafting seamless user
              experiences by implementing responsive designs, optimizing
              performance, and ensuring cross-browser compatibility.
            </p>
            <h3 className="font-FontFamily font-bold text-lg lg:text-xl text-BtnColor lg:text-CommonColor pt-4 underline">
              Skills and Technologies:
            </h3>
            <div>
              <p className="font-FontFamily lg:text-base text-CommonColor pt-3 text-sm">
                * Proficient in HTML5, CSS3, and JavaScript ES6+.
              </p>
              <p className="font-FontFamily lg:text-base text-CommonColor pt-3 text-sm">
                * Experienced with front-end frameworks/libraries such as React,
                Angular.
              </p>
              <p className="font-FontFamily lg:text-base text-CommonColor pt-3 text-sm">
                * Knowledge of responsive design principles and mobile-first
                development.
              </p>
              <p className="font-FontFamily lg:text-base text-CommonColor pt-3 text-sm">
                * Familiarity with version control systems like Git.
              </p>
              <p className="font-FontFamily lg:text-base text-CommonColor pt-3 text-sm">
                * Understanding of RESTful APIs and asynchronous JavaScript
                (AJAX, Fetch API).
              </p>
              <p className="font-FontFamily lg:text-base text-CommonColor pt-3 text-sm">
                * Basic knowledge of build tools and task runners.
              </p>
            </div>
            <h3 className="font-FontFamily font-bold text-lg lg:text-xl text-BtnColor lg:text-CommonColor pt-4 underline">
              Approch:
            </h3>
            <p className="font-FontFamily text-sm lg:text-base text-CommonColor pt-3 text-justify">
              I approach front-end development with a keen eye for detail and a
              strong focus on user-centric design. My goal is to create not only
              aesthetically pleasing interfaces but also to ensure they are
              functional, accessible, and performant. By staying updated with
              industry trends and best practices, I strive to deliver modern,
              high-quality solutions that meet both user and business needs
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutComponent
