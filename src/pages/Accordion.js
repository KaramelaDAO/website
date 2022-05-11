import React, { useState } from "react";
import { ReactComponent as UpIcon } from "../assets/icons/up.svg";
import { ReactComponent as DownIcon } from "../assets/icons/down.svg";
import classNames from "classnames";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickHandler = (val) => {
    if (activeIndex === val) {
      setActiveIndex(null);
    } else {
      setActiveIndex(val);
    }
  };

  const accordionItems = [
    {
      id: 0,
      question: "What is a DAO?",
      answer: "A decentralized autonomous organization (DAO) is a new kind of entity that operates without central authority or leadershp. Decisions are made from the bottom-up, governed by rules enforced on a blockchain. Members are issued governance tokens, which they use to vote on important decisions, such as how to invest treasury funds or which projects to focus on. In their purest form, DAOs operate like machines, with the tasks they are instructed to carry out determined by rules embedded into smart contracts. Therefore no managers are needed, thus removing any bureaucracy or hierarchy hurdles.",
    },
    {
      id: 1,
      question: "How do I join?",
      answer:
        "Becoming a Citizen require a Citizenship NFT. Only 10 NFTs are available for now, so make sure that you are watching the action on the Discord. For a limited time, temporary Citizenships are also available. If you participate in one of our Community Calls (virtual or physical), you’ll be granted a POAP (Proof of Participation) that you can use to vote and propose new motions. These temporary Citizenships will be deactivated when the DAO moves from the Genesis phase to the next one. Join our Discord for more information.",
    },
    {
      id: 2,
      question: "How do I learn more?",
      answer:
        "Follow us on Twitter, and join our Discord. You'll find lots of interesting discussions about DAOs, NFTs, blockchains and related topics. Plus a caring, supportive group to help you learn about these transformative technologies and get involved in the DAO.",
    },
  ];
  return (
    <section className="flex flex-col items-center mb-[20rem]">
      <h2 className="text-3xl text-center sm:text-4xl font-bold mb-6">
        Frequently asked questions
      </h2>
      <div className="flex flex-col border-t-2 w-[60%]">
        {accordionItems.map((item) => (
          <div
            key={item.id}
            className="py-6 border-b-[1px] border-[#E5E7EB] last-of-type:border-0 cursor-pointer"
            onClick={() => onClickHandler(item.id)}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="w-[90%]">
                <h5 className="text-lg font-medium">{item.question}</h5>
              </span>
              <span
                className="w-[10%] cursor-pointer"
                onClick={() => onClickHandler(item.id)}
              >
                <DownIcon
                  width="32px"
                  color="#9CA3AF"
                  className={classNames(
                    {
                      "rotate-180": item.id === activeIndex,
                    },
                    "hover:text-[#fff] ease-in-out duration-500"
                  )}
                />
              </span>
            </div>

            <p
              className={classNames(
                {
                  hidden: item.id !== activeIndex,
                },
                "text-base font-normal text-[#D1D5DB] w-[90%] ease-in-out duration-500"
              )}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
