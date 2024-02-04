import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[60vh] sm:h-[88vh] bg-[#090c22] flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center w-[80%] mx-auto gap-[2rem] lg:gap-[7rem]">
        <div className="mt-[2rem] sm:mt-0">
          <h1
            data-aos="fade-right"
            className="text-[30px] md:text-[40px] lg:text-[50px] leading-[2rem] sm:leading-[4rem]
                text-white"
          >
            Sell Your Real NFTs & Earn Money
          </h1>
          <p
            data-aos="fade-left"
            data-aos-delay="200"
            className="mt-[1rem] text-white opacity-80 text-[15px] md:text-[17px]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            perferendis, nulla dolore est qui dolores distinctio iure quis culpa
            minus autem natus! Dolorem earum aliquam distinctio necessitatibus
            perferendis non doloremque, reprehenderit aut illo, tenetur officiis
            aperiam inventore nostrum dolorum sunt recusandae libero aspernatur
            facilis dolores iusto architecto dignissimos ratione iste!
          </p>
          <button
            data-aos="zoom-in"
            data-aos-delay="400"
            className="before:ease relative h-12 w-40 overflow-hidden bg-blue-700 text-white
          font-semibold shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48
          before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90
          before:bg-[#da5959] before:transition-all before:duration-300 hover:text-white mt-[1.5rem]
          hover:before:-rotate-180"
          >
            <span className="relative z-10">Get started</span>
          </button>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="600"
          className="hidden sm:block sm:m-auto lg:mx-0"
        >
          <Image
            src="/hero.png"
            alt="hero image"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
