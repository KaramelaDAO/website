import React from "react";
import MainButton from "../Buttons/MainButton";
import HollowButton from "../Buttons/HollowButton";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
import bgHero from "../../assets/images/bg-hero.png";

const HomeDisplay = () => {
  return (
    <section
      id="main"
    // style={{ backgroundImage: `url(${bgHero})` }}
    // className="bg-cover bg-no-repeat bg-center"
    >
      <div className={`h-[100vh] flex flex-col items-center justify-start`}>
        <div className="inline-block px-4 mt-32">
          <h1 className="text-center text-4xl leading-[50px] mb-4 sm:mb-0 sm:leading-[75px] sm:text-6xl 2xl:text-8xl 2xl:leading-[125px] md:leading-[125px] md:text-7xl font-semibold ">
            Sweet sweet DAO
          </h1>
          <p className="text-center text-base font-normal leading-5 w-0 min-w-full mb-8">
            <div class="text-2xl">
              KaramelaDAO is a DAO that issues and distributes a digital currency called <a target="_blank" class="underline" href="https://wiki.karameladao.com/organization/token"> Lollipop ($loll)</a>.
            </div>
            <div class="pt-4">
              At KaramelaDAO we experiment with new technologies and new concepts and we try to push the limits of what is possible in the crypto space.
              If you have an interesting/crazy idea, join us and let's build together.
            </div>
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center w-full">
            <a href="https://wiki.karameladao.com/"><MainButton text={"Learn more"} /></a>
            <a href="https://discord.gg/dKdeANjg8p"><HollowButton icon={<Discord />} text={"Join discord"} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDisplay;
