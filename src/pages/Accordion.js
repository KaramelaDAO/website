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
      question: "What’s the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 1,
      question: "How do you make holy water?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 2,
      question: "What do you call someone with no body and no nose?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 3,
      question: "Why do you never see elephants hiding in trees?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 4,
      question: "Why can’t you hear a pterodactyl go to the bathroom?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 5,
      question: "Why did the invisible man turn down the job offer?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
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
