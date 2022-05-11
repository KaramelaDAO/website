import React from "react";
import { ReactComponent as CheckIcon } from "../assets/icons/check.svg";

const Values = () => {
  const cardsData = [
    {
      id: 1,
      text: `We believe in the potential of DLTs as an enabling technology for
        increasing trust, security and transparency in several worldwide
        operations.`,
    },
    {
      id: 2,
      text: "Not designed to enrich just the few, we can do well by doing good!",
    },
    {
      id: 3,
      text: "Access to benefits for all DAO citizens and burden sharing in an equitable, transparent and accountable manner.",
    },
  ];
  return (
    <section className="w-full flex flex-col items-center justify-center my-10">
      <h2 className="text-3xl leading-9 font-bold">Our Values</h2>
      <div className="flex flex-col flex-wrap md:flex-row items-center justify-evenly my-9">
        {cardsData.map((item) => (
          <div
            key={item.id}
            className="bg-[#e6f4f733] w-[260px] h-[240px] md:w-[285px] md:h-[265px] rounded-[36px] px-5 py-6 md:px-8 md:py-10 m-3 md:m-5"
          >
            <span>
              <CheckIcon color="#00C65E" className="mb-3" />
            </span>
            <p className="font-light text-base leading-6">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
