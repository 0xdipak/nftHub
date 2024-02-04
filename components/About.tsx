import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-blue-950">
      <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 items-center gap-[3rem]">
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          className="md:w-[500px] md:h-[600px] w-[80%] h-[80%] border-[3px] flex items-center justify-center border-gray-400
        rounded-lg"
        >
          <Image
            src="/about.jpg"
            alt="about img"
            width={500}
            height={500}
            className="-rotate-12 rounded-lg"
          />
        </div>

        <div className="">
          <p className="heading-mini">About Us</p>
          <h1 className="heading-primary">
            Discover More Collect and Sell Rare NFTs
          </h1>
          <p className="text-[15px] md:text-[17px] mt-[1rem] mb-[1rem] text-white opacity-80">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            maiores sed magnam voluptas voluptatem! Dolor possimus id, officiis
            recusandae facere atque vero libero suscipit nostrum fuga
            praesentium cupiditate sint maxime.
          </p>
          <p className="text-[15px] md:text-[17px] mt-[1rem] mb-[1rem] text-white opacity-80">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            maiores sed magnam voluptas voluptatem! Dolor possimus id, officiis
            recusandae facere atque vero libero suscipit nostrum fuga
            praesentium cupiditate sint maxime.
          </p>
          <button
            className="before:ease relative h-12 w-40 overflow-hidden bg-blue-700 text-white
          font-semibold shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48
          before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90
          before:bg-[#da5959] before:transition-all before:duration-300 hover:text-white mt-[1.5rem]
          hover:before:-rotate-180"
          >
            <span className="relative z-10">Read More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
