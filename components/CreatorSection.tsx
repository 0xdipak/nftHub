import { ChartPieIcon, IdentificationIcon, PresentationChartBarIcon, RocketLaunchIcon } from "@heroicons/react/16/solid";
import React from "react";

const CreatorSection = () => {
  return (
    <div className="pb-[3rem] pt-[5rem] bg-blue-900">
      <div className="text-center">
        <p className="heading-mini">Become A Creator</p>
        <h1 className="heading-primary">
          Create and <span className="text-yellow-300">Sell</span> Your NFTs
        </h1>
      </div>

      <div className="w-[80%] mx-auto mt-[5rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[3rem]">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
          className="bg-white hover:bg-red-700 transition-all cursor-pointer duration-300 bg-opacity-10
        rounded-md p-4"
        >
          <RocketLaunchIcon className="w-[4rem] h-[4rem] mt-[1.5rem] text-yellow-300" />
          <h1 className="mt-[1rem] text-[20px] text-white">
            Setup Your Wallet
          </h1>
          <p className="mt-[1rem] text-[15px] text-white opacity-85">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            expedita?
          </p>
          <button className="mt-[1rem] text-[17px] hover:text-yellow-300 text-white underline">
            Read More
          </button>
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
          className="bg-white hover:bg-red-700 transition-all cursor-pointer duration-300 bg-opacity-10
        rounded-md p-4"
        >
          <ChartPieIcon className="w-[4rem] h-[4rem] mt-[1.5rem] text-green-300" />
          <h1 className="mt-[1rem] text-[20px] text-white">
            Setup Your Wallet
          </h1>
          <p className="mt-[1rem] text-[15px] text-white opacity-85">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            expedita?
          </p>
          <button className="mt-[1rem] text-[17px] hover:text-yellow-300 text-white underline">
            Read More
          </button>
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
          className="bg-white hover:bg-red-700 transition-all cursor-pointer duration-300 bg-opacity-10
        rounded-md p-4"
        >
          <IdentificationIcon className="w-[4rem] h-[4rem] mt-[1.5rem] text-orange-300" />
          <h1 className="mt-[1rem] text-[20px] text-white">
            Setup Your Wallet
          </h1>
          <p className="mt-[1rem] text-[15px] text-white opacity-85">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            expedita?
          </p>
          <button className="mt-[1rem] text-[17px] hover:text-yellow-300 text-white underline">
            Read More
          </button>
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
          className="bg-white hover:bg-red-700 transition-all cursor-pointer duration-300 bg-opacity-10
        rounded-md p-4"
        >
          <PresentationChartBarIcon className="w-[4rem] h-[4rem] mt-[1.5rem] text-emerald-300" />
          <h1 className="mt-[1rem] text-[20px] text-white">
            Setup Your Wallet
          </h1>
          <p className="mt-[1rem] text-[15px] text-white opacity-85">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            expedita?
          </p>
          <button className="mt-[1rem] text-[17px] hover:text-yellow-300 text-white underline">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatorSection;
