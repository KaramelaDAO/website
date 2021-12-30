import { useState } from "react";
import { BsTwitter, BsDiscord } from "react-icons/bs";
import ConnectWalletModal from "../components/ConnectWalletModal";
import img from "../images/1.png";
import heart from "../images/heart.png";
import eye from "../images/eye.png";
import mouth from "../images/mouth.png";
import Faq from "../components/Faq";

const standForList = [
  {
    id: 1,
    text: "We believe in the potential of distributed ledger technnologies (DLTs) to increase trust, security and transparency in daily life, government and business.",
    icon: heart,
  },
  {
    id: 2,
    text: "We believe DLTs are not destined to enrich just the few. We can do well by doing good!",
    icon: eye,
  },
  {
    id: 3,
    text: "We believe in giving all citizens equal access to DAO benefits, and sharing DAO burdens in an equitable, transparent and accountable manner.",
    icon: mouth,
  },
];

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section className="mx-5 lg:mx-8 xl:mx-12 2xl:mx-32 mt-10 mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
          <div>
            <img
              src={img}
              alt="place your gif here instead of this pic"
              className="object-fill h-[350px] sm:h-[500px] mx-auto"
            />
          </div>
          <div className="text-center self-center order-first lg:order-last">
            <h1 className="uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold text-white tracking-wider quick-sand">
              The Sweetest
            </h1>
            <p className="mt-5 uppercase text-indigo-200 text-2xl sm:text-3xl xl:text-5xl font-bold tracking-wider quick-sand">
              DAO
            </p>
            <p className="mt-5 text-indigo-200 text-xl sm:text-2xl xl:text-4xl font-bold tracking-wider quick-sand">
            We power the world's Web3
            </p>
            <p className="mt-5 text-indigo-200 text-xl sm:text-2xl xl:text-4xl font-bold tracking-wider quick-sand">
            education!
            </p>
            <button
              className="px-6 py-3 mt-10 capitalize text-white text-lg sm:text-xl xl:text-2xl border-2 border-red-500 bg-gradient-to-r from-pink-600 to-rose-400 rounded-md shadow-xl transition duration-300 ease-in-out hover:scale-105"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Become a citizen
            </button>
            <a href="https://mirror.xyz/karameladao.eth">
            <button className="mt-5 capitalize text-white sm:text-lg xl:text-xl underline block mx-auto">
              learn more
            </button>
            </a>
          </div>
          <ConnectWalletModal open={openModal} setOpen={setOpenModal} />
        </div>

        <div className="lg:grid lg:grid-cols-8 mt-5 lg:mt-10">
          <div></div>
          <div className="glass p-5 sm:p-8 xl:p-12 col-span-6 place-items-center">
            <p className="text-center sm:text-lg text-white">
            We simplify Web3 and blockchain concepts, increase awareness and spread this knowledge across the world. Karamela is a Decentralized Autonomous Organization run by people for people (PfP).
            </p>
            <img src={img} alt="logo" className="h-36 mx-auto mt-8" />
          </div>
          <div></div>
        </div>

        {/* -----------------------------WHAT WE STAND FOR---------------------------- */}
        <h1 className="text-white mt-12 lg:mt-24 text-2xl md:text-4xl text-center quick-sand">
          What we stand for
        </h1>
        <div className="grid lg:grid-cols-3 gap-5 md:gap-8 mt-5 md:mt-10 md:mx-20">
          {standForList.map((stand) => (
            <div className="glass-govern p-5 relative" key={stand.id}>
              <p className="text-sm md:text-base text-white mb-10">
                {stand.text}
              </p>
              <button className="flex justify-center text-blue-900 text-sm absolute bottom-3">
                <BsTwitter className="text-xl text-purpleC mr-2" />
                Tweet it
              </button>
              <img
                src={stand.icon}
                alt="icon"
                className="h-5 absolute bottom-3 right-5"
              />
            </div>
          ))}
        </div>

        {/* -----------------------------FAQ---------------------------- */}

        <h1 className="text-white mt-12 lg:mt-24 text-2xl md:text-4xl text-center quick-sand">
          Frequently asked questions
        </h1>
        <div className="lg:grid lg:grid-cols-8 mt-5 lg:mt-8">
          <div></div>
          <div className="col-span-6">
            {/* -----This is the faq component in the components folder----- */}
            <Faq />
          </div>
          <div></div>
        </div>

        {/* -----------------------------JOIN DISCORD---------------------------- */}

        <h1 className="text-white mt-12 lg:mt-24 text-2xl md:text-3xl text-center quick-sand">
          Join our Discord channel to find out more
        </h1>
        <div className="text-center mt-5 md:mt-12">
          <a href="https://discord.gg/dKdeANjg8p">
            <button className="flex items-center px-6 py-3 mx-auto uppercase text-white text-lg sm:text-xl xl:text-2xl border-2 border-red-500 bg-gradient-to-r from-pink-600 to-rose-400 rounded-md shadow-xl transition duration-300 ease-in-out hover:scale-105">
              <BsDiscord className="mr-3" />
              Join discord
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
