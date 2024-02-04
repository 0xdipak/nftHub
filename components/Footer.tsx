import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-blue-900">
      <div
        className="w-[80%] border-b-[1.2px] pb-[2rem] border-b-slate-500 mx-auto grid grid-cols-1
        md:grid-cols-2 lg:grid-cols-4 gap-[3rem]"
      >
        <div>
          <h1 className="text-[20px] sm:text-[30px] text-white">
            NF <span className="text-yellow-300">ty</span>
          </h1>
          <p className="text-[14px] text-white opacity-60 mt-[1rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            quia quibusdam debitis dolorem quasi. Ipsum rerum ab doloremque,
            modi reiciendis possimus magni! Consequuntur, iste quasi.
          </p>
          <p className="text-[14px] mt-[1.4rem] text-white opacity-80">
            (+000) 123 4567 90 - info@gmail.com
          </p>
        </div>

        <div className="lg:mx-auto">
            <h1 className="text-[20px] text-white mb-[1.5rem]">Information</h1>
            <p className="footer-link">About Us</p>
            <p className="footer-link">Privacy Policy</p>
            <p className="footer-link">Wallet</p>
            <p className="footer-link">Bidding</p>
            <p className="footer-link">FAQ</p>
        </div>
        <div className="lg:mx-auto">
            <h1 className="text-[20px] text-white mb-[1.5rem]">Account</h1>
            <p className="footer-link">Dashboard</p>
            <p className="footer-link">My Bidding</p>
            <p className="footer-link">My Wishlist</p>
            <p className="footer-link">Account Details</p>
            <p className="footer-link">Track My Sell</p>
        </div>
        <div className="lg:mx-auto">
            <h1 className="text-[20px] text-white mb-[1.5rem]">Shop</h1>
            <p className="footer-link">Affiliate</p>
            <p className="footer-link">Bestsellers</p>
            <p className="footer-link">Discount</p>
            <p className="footer-link">Latest Product</p>
            <p className="footer-link">Sale Products</p>
        </div>
      </div>

      <div className="mt-[2rem] grid grid-cols-1 gap-[4rem] sm:grid-cols-2 justify-between w-[80%]
      mx-auto">
        <p className="text-[14px] text-white opacity-60">&#169; Copyright 2024.</p>
        <Image src="/pay.svg" alt="pay" width={230} height={230} className="object-contain sm:ml-auto" />
      </div>
    </div>
  );
};

export default Footer;
