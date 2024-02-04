import Image from "next/image";
import { title } from "process";
import React from "react";

const UserData = [
  {
    user: "Adam",
    image: "/user6.png",
    price: "1.4",
  },
  {
    user: "Adam",
    image: "/user1.png",
    price: "1.4",
  },
  {
    user: "Adam",
    image: "/user2.png",
    price: "1.4",
  },
  {
    user: "Adam",
    image: "/user3.png",
    price: "1.4",
  },
  {
    user: "Adam",
    image: "/user4.png",
    price: "1.4",
  },
  {
    user: "Adam",
    image: "/user5.png",
    price: "1.4",
  },
];

const Creators = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-blue-950">
      <div className="text-center">
        <p className="heading-mini">Creators</p>
        <h1 className="heading-primary">
          Top <span className="text-yellow-300">Creators</span> of Today
        </h1>
      </div>

      <div
        className="w-[80%] pt-[5rem] mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6
      gap-[2rem]"
        data-aos="zoom-in"
        data-aos-anchor-placement="top-center"
      >
        {UserData.map((data, index) => (
          <CreatorCard
            key={index + 1}
            image={data.image}
            user={data.user}
            price={data.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Creators;

interface Props {
  image: string;
  user: string;
  price: string;
}

const CreatorCard = ({ image, user, price }: Props) => {
  return (
    <div className="text-center">
      <div>
        <Image
          src={image}
          alt={user}
          width={200}
          height={200}
          className="mx-auto"
        />
      </div>
      <h1 className="text-[25px] text-white mt-[1.5rem]">{user}</h1>
      <p className="text-yellow-400">{price} ETH</p>
    </div>
  );
};
