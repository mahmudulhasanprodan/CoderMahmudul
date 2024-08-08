import React from 'react'

const OtherSkill = () => {
  return (
    <>
      <div className="bg-BgColor shadow-lg py-16 lg:py-40">
        <div className="container">
          <div className="bg-BgColor">
            <div className="container">
              <div className="flex flex-col items-center justify-center gap-y-3 pt-10">
                <h2 className="text-CommonColor text-5xl font-bold font-FontFamily">
                  Soft Skills
                </h2>
                <p className="text-CommonColor font-FontFamily px-4 lg:px-0 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat nam quod voluptatum enim aliquid.
                </p>
              </div>

              <div className="w-full flex pb-10 gap-x-5 flex-wrap gap-y-5 pt-20 items-center justify-center">
                <div className="px-4 lg:px-0">
                  <div className="w-[250px] sm:w-[560px] flex items-center justify-between">
                    <h2 className="text-CommonColor font-FontFamily font-semibold">
                      Photoshop
                    </h2>
                    <p className="text-CommonColor font-FontFamily font-semibold">
                      95%
                    </p>
                  </div>
                  <div className="w-[325px] sm:w-[600px] h-[15px] bg-SkillColor rounded-full mt-2">
                    <div className="w-[300px] sm:w-[560px] h-[15px] bg-BtnColor rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="w-full sm:w-[545px] flex items-center justify-between">
                    <h2 className="text-CommonColor font-FontFamily font-semibold">
                      MS Excel
                    </h2>
                    <p className="text-CommonColor font-FontFamily font-semibold">
                      90%
                    </p>
                  </div>
                  <div className="w-[325px] sm:w-[600px] h-[15px] bg-SkillColor rounded-full mt-2">
                    <div className="w-[280px] sm:w-[545px] h-[15px] bg-blue-400 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="w-full sm:w-[525px] flex items-center justify-between">
                    <h2 className="text-CommonColor font-FontFamily font-semibold">
                      MS Word
                    </h2>
                    <p className="text-CommonColor font-FontFamily font-semibold">
                      80%
                    </p>
                  </div>
                  <div className="w-[325px] sm:w-[600px] h-[15px] bg-SkillColor rounded-full mt-2">
                    <div className="w-[260px] sm:w-[525px] h-[15px] bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="w-full sm:w-[500px] flex items-center justify-between">
                    <h2 className="text-CommonColor font-FontFamily font-semibold">
                      Illustrator
                    </h2>
                    <p className="text-CommonColor font-FontFamily font-semibold">
                      70%
                    </p>
                  </div>
                  <div className="w-[325px] sm:w-[600px] h-[15px] bg-SkillColor rounded-full mt-2">
                    <div className="w-[240px] sm:w-[500px] h-[15px] bg-sky-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherSkill
