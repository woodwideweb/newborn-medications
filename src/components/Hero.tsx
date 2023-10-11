import React from "react";

const Hero: React.FC = () => {
    return <section className="flex flex-col font-light sm:flex-row">
        <div className="bg-slate-500  text-white py-24 xs:py-32 sm:w-1/2 sm:py-64 md:py-72 lg:py-80 lg+:py-96">
            <h1 className=" text-xl pl-4 md:pl-8 sm:text-2xl lg:text-3xl 2xl:pl-10">Newborn Medications</h1>
        </div>

        <div className="sm:w-1/2 sm:text-lg md:text-[21px] 2xl:text-[22px]">
            <div className="sm:h-1/2"></div>
            <div className="bg-slate-400 sm:h-1/2"></div>
        </div>
    </section >
}

export default Hero;