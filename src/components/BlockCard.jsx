import React from "react";

const BlockCard = ({ card }) => {
  return (
    <div
      id="block-container"
      dir="rtl"
      className="border-2 grid grid-rows-4 text-start p-8 sm:w-[350px] text-primary h-[400px] bg-[#f2f3f8] rounded-[10px] border-[#f0f0f1]">
      <figure className="row-span-2 flex justify-center items-center">
        <img
          className="max-h-40"
          src={card.image}
          alt={card.title}
        />
      </figure>
      <h2 className="row-span-1 my-auto text-[20px] font-bold">{card.title}</h2>
      <p className="row-span-1  mb-2 text-[14px] font-normal">
        {card.discription}
      </p>
    </div>
  );
};

export default BlockCard;
