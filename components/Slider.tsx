'use client'
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NFTCard from "./NFTCard";

const CardData = [
  {
    title: "Warrior",
    author: "nobody",
    image: "/nft1.svg",
    price: "3.1",
  },
  {
    title: "Meata Forted",
    author: "nobody",
    image: "nft2.svg",
    price: "5.3",
  },
  {
    title: "Forted",
    author: "nobody",
    image: "nft3.svg",
    price: "2.6",
  },
  {
    title: "Forted Eastern",
    author: "nobody",
    image: "/nft4.svg",
    price: "4.1",
  },
  {
    title: "Eastern",
    author: "nobody",
    image: "/nft5.svg",
    price: "4.7",
  },
  {
    title: "Eastern",
    author: "nobody",
    image: "/nft6.svg",
    price: "5.2",
  },
];

const Slider = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-blue-900">
      <div className="text-center">
        <p className="heading-mini">Bidding</p>
        <h1 className="heading-primary mt-[0.5rem]">
          Live <span className="text-yellow-300">Bidding</span>
        </h1>
      </div>

      <div className="w-[80%] mx-auto pt-[5rem]">
        <BidSlider />
      </div>
    </div>
  );
};

export default Slider;

const BidSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1300, min: 764 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      {CardData.map((data, index) => (
          <NFTCard
            key={index + 1}
            image={data.image}
            title={data.title}
            author={data.author}
            price={data.price}
          />
      ))}
    </Carousel>
  );
};
