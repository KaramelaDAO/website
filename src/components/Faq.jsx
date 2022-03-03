import { Disclosure, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import parse from 'html-react-parser';

const faqList = [
  {
    id: 1,
    question: "Q. What is a DAO?",
    answer:
      "<p>A decentralized autonomous organization (DAO) is a new kind of entity that operates without central authority or leadershp. Decisions are made from the bottom-up, governed by rules enforced on a blockchain. Members are issued governance tokens, which they use to vote on important decisions, such as how to invest treasury funds or which projects to focus on.</p>",
    answer2:
      "<p>In their purest form, DAOs operate like machines, with the tasks they are instructed to carry out determined by rules embedded into smart contracts. Therefore no managers are needed, thus removing any bureaucracy or hierarchy hurdles.",
  },
  {
    id: 2,
    question: "Q. How do I join?",
    answer:
      "<p>Becoming a Citizen require a Citizenship NFT. These NFTs will be soon available for purchase. Only 300 NFTs will be available for now, so make sure that you are watching the action on the Discord.",
    answer2:
      "<p>For a limited time, temporary Citizenships are also available. If you participate in one of our Community Calls (virtual or physical), you’ll be granted a POAP (Proof of Participation) that you can use to vote and propose new motions. These temporary Citizenships will be deactivated when the DAO moves from the Genesis phase to the next one. Join our Discord for more information.</p>",
  },
  {
    id: 3,
    question: "Q. How do I learn more?",
    answer:
    "<p> Follow us on <a href='https://twitter.com/karameladao' class='underline hover:underline ...'>Twitter</a>, and join our <a href='https://discord.gg/dKdeANjg8p' className= 'under-line text-purple-700'>Discord</a>. You'll find lots of interesting discussions about DAOs, NFTs, blockchains and related topics. Plus a caring, supportive group to help you learn about these transformative technologies and get involved in the DAO. </p>",
    answer2:
    " ",
    },
   {
    id: 4,
    question: "Q. $Lollipop Documentation",
    answer:
    "<a href='/Lollipop_Documentation.pdf' download>Please click here download the documentation file.</a>",
    answer2:
    " ",
    },
 
];

const Faq = () => {
  return (
    <>
      {faqList.map((faq) => (
        <div
          className="w-full p-2 glass-govern mx-auto rounded-2xl mt-5"
          key={faq.id}
        >
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left text-white md:text-lg quick-sand focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>{faq.question}</span>
                  <FaChevronDown
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-300 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-200 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel
                    className="px-4 pt-4 pb-2 text-sm md:text-base text-white"
                    static
                  >
                    <p>{parse(faq.answer)}</p>
                    <p className="mt-5">{parse(faq.answer2)}</p>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </>
  );
};

export default Faq;
