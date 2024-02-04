import React from "react";
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

const PopularItems = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-blue-950">
      <div className="text-center">
        <p className="heading-mini">Popular Items</p>
        <h1 className="heading-primary">
          Explore <span className="text-yellow-300">Popular</span> NFTs
        </h1>
      </div>

      <div
        className="w-[80%] pt-[5rem] mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[1.5rem]"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
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
      </div>
    </div>
  );
};

export default PopularItems;
