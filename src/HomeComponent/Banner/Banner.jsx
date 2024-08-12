import React from 'react'
import Button from '../../CommonItem/Button/Button';
import BannerPicture from "../../assets/Homepic/Banner.png"

const Banner = () => {
  return (
    <>
      <div className="bg-BgColor">
        <div className="container">
          <div className="flex justify-around items-center">
            <div className="w-full lg:w-1/2 m-0 p-0 px-4 lg-px-0">
              <div className="pt-8 lg:pt-0">
                <h3 className="font-FontFamily font-bold text-BtnColor text-sm">
                  HELLO!
                </h3>
              </div>
              <div className="pt-5">
                <h2 className="text-CommonColor font-extrabold text-4xl lg:text-6xl">
                  I'm
                  <span className="text-BtnColor">
                     Mahmudul <br /> Hasan
                  </span>
                </h2>
                <p className="text-CommonColor font-FontFamily text-xl pt-6">
                  A Front-end Developer
                </p>
              </div>
              <div className="mt-10">
                <Button
                  className={
                    "py-2 bg-BtnColor px-8 text-CommonColor rounded-lg font-bold hover:bg-blue-400"
                  }
                  title={"My Works"}
                />
              </div>
            </div>
            <div className="w-1/2 hidden lg:block">
              <picture>
                <img src={BannerPicture} alt={BannerPicture} className="w-full h-[700px] shadow-xl"/>
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner
